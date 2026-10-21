// Cloudflare Pages Function: POST /api/lead
// Receives every website form (JSON), filters spam, then forwards the lead to:
//   1) LEAD_WEBHOOK_URL (Zapier / Make / HubSpot / CRM) — optional
//   2) e-mail via Resend (RESEND_API_KEY + LEAD_TO_EMAIL)  — optional
// At least one must be configured in Cloudflare Pages > Settings > Environment variables.

const REQUIRED = ['name', 'email'];
const MAX_LEN = 2000;

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  // Honeypot: bots fill hidden fields. Pretend success, drop the lead.
  if (data.company_website) return json({ ok: true });

  for (const k of REQUIRED) {
    if (!data[k] || String(data[k]).trim().length < 2) return json({ ok: false, error: `missing_${k}` }, 422);
  }
  for (const k of Object.keys(data)) data[k] = String(data[k] ?? '').slice(0, MAX_LEN).trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) return json({ ok: false, error: 'invalid_email' }, 422);

  // Optional Cloudflare Turnstile verification
  if (env.TURNSTILE_SECRET) {
    const token = data['cf-turnstile-response'];
    const ok = token && (await verifyTurnstile(token, env.TURNSTILE_SECRET, request.headers.get('CF-Connecting-IP')));
    if (!ok) return json({ ok: false, error: 'captcha' }, 403);
  }
  delete data['cf-turnstile-response'];

  const lead = {
    ...data,
    received_at: new Date().toISOString(),
    ip_country: request.headers.get('CF-IPCountry') || '',
    user_agent: request.headers.get('User-Agent') || '',
  };

  const jobs = [];
  if (env.LEAD_WEBHOOK_URL) {
    jobs.push(fetch(env.LEAD_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) }));
  }
  if (env.RESEND_API_KEY && env.LEAD_TO_EMAIL) {
    jobs.push(sendEmail(env, lead));
  }
  if (!jobs.length) return json({ ok: false, error: 'no_destination_configured' }, 500);

  const results = await Promise.allSettled(jobs);
  const delivered = results.some((r) => r.status === 'fulfilled' && r.value.ok);
  return delivered ? json({ ok: true }) : json({ ok: false, error: 'delivery_failed' }, 502);
}

export function onRequestGet() {
  return json({ ok: false, error: 'method_not_allowed' }, 405);
}

async function verifyTurnstile(token, secret, ip) {
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const out = await r.json();
  return !!out.success;
}

function sendEmail(env, lead) {
  const rows = Object.entries(lead)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:4px 10px;color:#555">${esc(k)}</td><td style="padding:4px 10px">${esc(v)}</td></tr>`)
    .join('');
  return fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.LEAD_FROM_EMAIL || 'leads@mrandmrscnr.com',
      to: env.LEAD_TO_EMAIL.split(',').map((s) => s.trim()),
      reply_to: lead.email,
      subject: `New lead: ${lead.project_type || 'Project'} — ${lead.name}${lead.city ? ` (${lead.city})` : ''} [${lead.source || 'website'}]`,
      html: `<h2>New website lead</h2><table>${rows}</table>`,
    }),
  });
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}
