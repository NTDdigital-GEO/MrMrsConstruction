// Client-side behaviour shared by all pages (bundled by Astro, ~4 KB).
// Tracking: pushes the SAME event names the Google Ads account already imports from GA4
// (call_click, form_submit_all, click_get_quote, email_click, click_get_directions, click_services,
// click_gallery, click_about_us, click_service_area) — see README "GTM changes at launch".

type DL = Record<string, unknown>;
const w = window as unknown as { dataLayer: DL[]; turnstile?: { reset: (el?: Element) => void } };
w.dataLayer = w.dataLayer || [];
const push = (e: DL) => w.dataLayer.push(e);

/* ---------- attribution (UTM + gclid kept for the session) ---------- */
const params = new URLSearchParams(location.search);
const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
try {
  const utm = utmKeys.filter((k) => params.get(k)).map((k) => `${k}=${params.get(k)}`).join('&');
  if (utm) sessionStorage.setItem('mm_utm', utm);
  const gclid = params.get('gclid') || params.get('gbraid') || params.get('wbraid');
  if (gclid) sessionStorage.setItem('mm_gclid', gclid);
  if (!sessionStorage.getItem('mm_landing')) sessionStorage.setItem('mm_landing', location.pathname + location.search);
} catch { /* storage blocked */ }
const ss = (k: string) => { try { return sessionStorage.getItem(k) || ''; } catch { return ''; } };

/* ---------- click tracking ---------- */
const PATH_EVENTS: [RegExp, string][] = [
  [/^\/get-a-free-quote\/?$/, 'click_get_quote'],
  [/^\/services\//, 'click_services'],
  [/^\/gallery\//, 'click_gallery'],
  [/^\/about-us\/?$/, 'click_about_us'],
  [/^\/service-area(s)?\//, 'click_service_area'],
];
document.addEventListener('click', (ev) => {
  const a = (ev.target as Element).closest('a');
  if (!a) return;
  const href = a.getAttribute('href') || '';
  const explicit = a.getAttribute('data-track');
  let event = explicit || '';
  if (!event && href.startsWith('tel:')) event = 'call_click';
  if (!event && href.startsWith('mailto:')) event = 'email_click';
  if (!event && /maps\.google|google\.com\/maps/.test(href)) event = 'click_get_directions';
  if (!event && href.startsWith('/')) event = PATH_EVENTS.find(([re]) => re.test(href))?.[1] || '';
  if (event) push({ event, link_url: href, link_text: (a.textContent || '').trim().slice(0, 80), page_path: location.pathname });
});

/* ---------- lead forms: optional-fields toggle (phones) ---------- */
document.querySelectorAll<HTMLButtonElement>('.qform .more-toggle').forEach((b) => {
  b.addEventListener('click', () => {
    const more = document.getElementById(b.getAttribute('aria-controls') || '');
    more?.classList.add('open');
    b.setAttribute('aria-expanded', 'true');
    more?.querySelector<HTMLElement>('select, input')?.focus();
  });
});

/* ---------- lead forms ---------- */
document.querySelectorAll<HTMLFormElement>('form[data-lead-form]').forEach((form) => {
  const status = form.querySelector<HTMLElement>('.status');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  let started = false;
  form.addEventListener('input', () => {
    if (!started) { started = true; push({ event: 'form_start', form_id: form.id, form_source: form.dataset.source }); }
  });
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (!form.reportValidity()) return;
    if (import.meta.env.PUBLIC_PREVIEW === '1') {
      // Client preview (GitHub Pages): no backend, nothing is sent.
      if (status) status.textContent = 'Preview site — form submissions are disabled. On the live site this sends the request and opens the thank-you page.';
      return;
    }
    const set =(n: string, v: string) => { const el = form.elements.namedItem(n) as HTMLInputElement | null; if (el) el.value = v; };
    set('page', location.pathname);
    set('utm', ss('mm_utm'));
    set('gclid', ss('mm_gclid'));
    const data = Object.fromEntries(new FormData(form).entries());
    (data as Record<string, unknown>).landing = ss('mm_landing');
    if (button) { button.disabled = true; button.dataset.label = button.textContent || ''; button.textContent = 'Sending…'; }
    if (status) status.textContent = '';
    try {
      const res = await fetch(form.action, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error(String(res.status));
      // Same event name the Ads account imports today ("GA4 - form_submit_all") + enhanced-conversion user data.
      push({
        event: 'form_submit_all',
        form_id: form.id,
        form_source: form.dataset.source,
        project_type: data.project_type,
        user_data: { email: data.email, phone_number: String(data.phone || '').replace(/[^\d+]/g, '') },
      });
      try { sessionStorage.setItem('mm_lead', JSON.stringify({ project: data.project_type, t: Date.now() })); } catch {}
      location.href = form.dataset.redirect || '/thank-you/';
    } catch {
      if (status) status.textContent = 'Sorry, something went wrong. Please call us at 1-800-587-1823.';
      if (button) { button.disabled = false; button.textContent = button.dataset.label || 'Submit'; }
      w.turnstile?.reset(form.querySelector('.cf-turnstile') || undefined);
    }
  });
});

/* ---------- carousels ---------- */
document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((root) => {
  const track = root.querySelector<HTMLElement>('.track');
  if (!track) return;
  const step = () => (track.firstElementChild as HTMLElement | null)?.offsetWidth ?? 300;
  root.querySelector('[data-prev]')?.addEventListener('click', () => track.scrollBy({ left: -(step() + 22), behavior: 'smooth' }));
  root.querySelector('[data-next]')?.addEventListener('click', () => track.scrollBy({ left: step() + 22, behavior: 'smooth' }));
});

/* ---------- YouTube (load iframe on click only) ---------- */
document.querySelectorAll<HTMLButtonElement>('button.yt[data-yt]').forEach((b) => {
  b.addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0`;
    f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
    f.title = b.getAttribute('aria-label') || 'Video';
    b.appendChild(f);
    push({ event: 'video_play', video_id: b.dataset.yt });
  }, { once: true });
});

/* ---------- 3D render vs photo compare slider ---------- */
document.querySelectorAll<HTMLElement>('.compare').forEach((c) => {
  const input = c.querySelector<HTMLInputElement>('input');
  const top = c.querySelector<HTMLElement>('.top');
  const handle = c.querySelector<HTMLElement>('.handle');
  input?.addEventListener('input', () => {
    const v = Number(input.value);
    if (top) top.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
    if (handle) handle.style.left = `${v}%`;
  });
});

/* ---------- process steps (tap to open on touch) ---------- */
document.querySelectorAll<HTMLElement>('.steps .step').forEach((s, i, all) => {
  s.addEventListener('click', () => all.forEach((x) => x.classList.toggle('open', x === s)));
  if (i === 0) s.classList.add('open');
  s.addEventListener('mouseenter', () => all.forEach((x) => x.classList.remove('open')));
});

/* ---------- gallery lightbox ---------- */
const dlg = document.querySelector<HTMLDialogElement>('dialog.lightbox');
if (dlg) {
  const img = dlg.querySelector('img')!;
  document.querySelectorAll<HTMLAnchorElement>('.lightbox-grid a').forEach((a) => {
    a.addEventListener('click', (e) => { e.preventDefault(); img.src = a.href; img.alt = a.dataset.alt || ''; dlg.showModal(); });
  });
  dlg.querySelector('button')?.addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
}

/* ---------- scroll-to-top ---------- */
const top = document.querySelector<HTMLButtonElement>('.to-top');
if (top) {
  const onScroll = () => top.classList.toggle('show', window.scrollY > 600);
  window.addEventListener('scroll', onScroll, { passive: true });
  top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
