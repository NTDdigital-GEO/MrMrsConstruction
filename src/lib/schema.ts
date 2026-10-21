// JSON-LD builders. Fixes the live Rank Math schema issues found in the Oct 2026 audit:
// addressRegion "San Francisco Bay" -> "CA", trailing comma in streetAddress, priceRange "$" -> "$$$",
// adds areaServed (19 cities), sameAs, license identifier and FAQPage where FAQs exist.
import { SITE } from '../config/site';
import { CITIES } from '../data/cities';
import { absMedia } from './media';

const ORG_ID = `${SITE.url}/#organization`;

export function businessSchema() {
  return {
    '@type': ['HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${SITE.url}/`,
    telephone: SITE.phoneE164,
    email: SITE.email,
    foundingDate: String(SITE.foundingYear),
    priceRange: '$$$',
    image: absMedia(SITE.ogImage),
    logo: { '@type': 'ImageObject', url: absMedia(SITE.logos.schema), width: 400, height: 400 },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    hasMap: SITE.mapUrl,
    openingHours: SITE.openingHours,
    areaServed: CITIES.map((c) => ({
      '@type': 'City',
      name: `${c.name}, CA`,
      containedInPlace: { '@type': 'AdministrativeArea', name: `${c.county}, California` },
    })),
    identifier: { '@type': 'PropertyValue', name: 'California CSLB License', value: SITE.license, url: SITE.licenseUrl },
    sameAs: Object.values(SITE.socials),
    description:
      'Family-owned design-build contractor in Santa Clara, CA serving Silicon Valley since 1999: kitchen and bathroom remodeling, ADUs, room additions, whole-home remodels and new custom homes, with in-house 3D design and full permit management. CA License #1068849.',
  };
}

export function websiteSchema() {
  return { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: `${SITE.url}/`, name: SITE.name, publisher: { '@id': ORG_ID }, inLanguage: 'en-US' };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${SITE.url}${it.url}` })),
  };
}

export function serviceSchema(opts: { name: string; serviceType: string; url: string; description: string; image?: string; areaName?: string }) {
  return {
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    url: `${SITE.url}${opts.url}`,
    description: opts.description,
    image: opts.image ? absMedia(opts.image) : undefined,
    provider: { '@id': ORG_ID },
    areaServed: opts.areaName
      ? { '@type': 'City', name: opts.areaName }
      : CITIES.map((c) => ({ '@type': 'City', name: `${c.name}, CA` })),
  };
}

export function faqSchema(faqs: { q: string; a: string; list?: string[] }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.list ? `${f.a} ${f.list.join(' ')}` : f.a },
    })),
  };
}

export function articleSchema(opts: { title: string; url: string; date: Date; updated?: Date; image?: string; description?: string }) {
  return {
    '@type': 'BlogPosting',
    headline: opts.title,
    url: `${SITE.url}${opts.url}`,
    datePublished: opts.date.toISOString(),
    dateModified: (opts.updated ?? opts.date).toISOString(),
    image: opts.image ? absMedia(opts.image) : undefined,
    description: opts.description,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: `${SITE.url}${opts.url}`,
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': [businessSchema(), websiteSchema(), ...nodes] };
}
