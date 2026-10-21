// /llms.txt — plain-text summary for AI assistants (GEO). Generated from the same data as the site.
import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { SERVICES } from '../data/services';
import { CITIES } from '../data/cities';

export const GET: APIRoute = () => {
  const lines = [
    `# ${SITE.name}`,
    '',
    `> Family-owned design-build contractor headquartered in ${SITE.address.city}, California, serving Silicon Valley since ${SITE.foundingYear}. One team handles 3D design, city permits, materials and construction for kitchen and bathroom remodels, ADUs, room additions, whole-home remodels and new custom homes. California contractor license #${SITE.license} (licensed, bonded and insured).`,
    '',
    '## Contact',
    `- Phone: ${SITE.phone}`,
    `- Email: ${SITE.email}`,
    `- Address: ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.zip}`,
    `- License verification: ${SITE.licenseUrl}`,
    `- Free quote / consultation: ${SITE.url}/get-a-free-quote/`,
    '',
    '## Services',
    ...SERVICES.map((s) => `- [${s.menu}](${SITE.url}/services/${s.slug}/): ${s.metaDescription}`),
    '',
    '## Service areas (Santa Clara and San Mateo counties)',
    ...CITIES.map((c) => `- [${c.name}, CA](${SITE.url}/service-areas/${c.slug}/)`),
    '',
    '## More',
    `- [Project gallery](${SITE.url}/gallery/)`,
    `- [Client video testimonials](${SITE.url}/testimonials/)`,
    `- [About the company](${SITE.url}/about-us/)`,
    `- [Blog](${SITE.url}/blog/)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
