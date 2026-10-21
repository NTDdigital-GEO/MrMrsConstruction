// 19 service-area pages (/service-areas/{slug}/). One template, city name injected everywhere
// (fixes the live bug where every city page says "...Project in Palo Alto?").
// `local` is optional city-specific copy — add permit notes, neighborhoods, local projects as they're written
// (keyword map clusters 1–5: Los Gatos, Atherton, Redwood City, Foster City, Santa Clara first).

export interface City {
  slug: string;
  name: string;
  county: 'Santa Clara County' | 'San Mateo County';
  tile: string;                 // square tile image used in carousels + hero
  local?: { title: string; paragraphs: string[] };
  galleryCity?: string;         // matches GALLERY[].city to show local projects
}

const c = (name: string, county: City['county'], tile: string, extra: Partial<City> = {}): City => ({
  slug: name.toLowerCase().replace(/\s+/g, '-') + '-ca',
  name,
  county,
  tile: `2024/04/${tile}.webp`,
  galleryCity: name,
  ...extra,
});

export const CITIES: City[] = [
  c('Atherton', 'San Mateo County', 'Atherton-CA'),
  c('Burlingame', 'San Mateo County', 'Burlingame-CA'),
  c('Campbell', 'Santa Clara County', 'Campbell-CA'),
  c('Cupertino', 'Santa Clara County', 'Cupertino-CA'),
  c('Foster City', 'San Mateo County', 'Foster-city-CA'),
  c('Hillsborough', 'San Mateo County', 'Hillsborough-CA'),
  c('Los Altos', 'Santa Clara County', 'Los-Altos-CA'),
  c('Los Gatos', 'Santa Clara County', 'Los-Gatos-CA'),
  c('Menlo Park', 'San Mateo County', 'Menlo-Park-CA'),
  c('Monte Sereno', 'Santa Clara County', 'Monte-Sereno-CA'),
  c('Mountain View', 'Santa Clara County', 'Mountain-View-CA'),
  c('Palo Alto', 'Santa Clara County', 'Palo-Alto-CA'),
  c('Redwood City', 'San Mateo County', 'Redwood-City-CA'),
  c('San Jose', 'Santa Clara County', 'San-Jose-CA'),
  c('San Mateo', 'San Mateo County', 'San-Mateo-CA'),
  c('Santa Clara', 'Santa Clara County', 'Santa-Clara-CA'),
  c('Saratoga', 'Santa Clara County', 'Saratoga-CA'),
  c('Stanford', 'Santa Clara County', 'Stanford-CA'),
  c('Sunnyvale', 'Santa Clara County', 'Sunnyvale-CA'),
];

// Order of the "Our Services Areas" carousel on the homepage (as on WordPress)
export const HOME_CITY_ORDER = ['Palo Alto', 'Campbell', 'Hillsborough', 'Burlingame', 'Foster City', 'San Mateo', 'Redwood City', 'Atherton', 'Santa Clara', 'San Jose', 'Menlo Park', 'Saratoga', 'Monte Sereno', 'Stanford', 'Los Gatos', 'Los Altos', 'Mountain View', 'Cupertino', 'Sunnyvale'];

export const cityByName = (n: string) => CITIES.find((x) => x.name === n)!;

// Shared before/after imagery used by every city template (same files as WordPress)
export const CITY_MEDIA = {
  introA: '2024/04/Sec1_2.webp',
  introB: '2024/04/Sec2_2.webp',
  homeBefore: '2024/04/Home-remodeling-before.webp',
  homeAfter: '2024/04/Home-remodeling-after.webp',
  kitchenBefore: '2024/04/kitchen-remodeling-before.webp',
  kitchenAfter: '2024/04/kitchen-remodeling-after.webp',
  bathBefore: '2024/04/bathroom-remodeling-before-2.webp',
  bathAfter: '2024/04/bathroom-remodeling-after-2.webp',
};
