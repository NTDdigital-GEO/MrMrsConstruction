// Single source of truth for business facts (NAP, license, tracking).
// Edit here — header, footer, schema, llms.txt and every form read from this file.

export const SITE = {
  name: 'Mr. & Mrs. Construction & Remodeling',
  shortName: 'Mr. & Mrs. Construction',
  legalName: 'Mr. & Mrs. Construction & Remodeling Inc.',
  url: 'https://mrandmrscnr.com',
  tagline: 'Build Your Dream Into Reality',
  phone: '1-800-587-1823',
  phoneHref: 'tel:1-800-587-1823',
  phoneE164: '+18005871823',
  email: 'info@mrandmrscnr.com',
  address: {
    street: '1500 Wyatt Dr, Suite #4',
    city: 'Santa Clara',
    region: 'CA',
    zip: '95054',
    country: 'US',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=1500+Wyatt+Dr+Suite+4+Santa+Clara+CA+95054',
  license: '1068849',
  licenseUrl: 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=1068849',
  foundingYear: 1999,
  // Google Business Profile rating. Verified 2026-10-23 (5.0 average, 58 reviews). Shown next to every form (TrustLine.astro).
  reviews: { rating: '5.0', count: 58, verified: '2026-10-23' },
  // TODO(client): confirm hours against the Google Business Profile before launch.
  openingHours: ['Mo-Sa 09:00-17:00'],
  socials: {
    instagram: 'https://www.instagram.com/mrandmrscnr/',
    facebook: 'https://www.facebook.com/mrandmrscnr/',
    houzz: 'https://www.houzz.com/professionals/general-contractors/mr-and-mrs-construction-and-remodeling-pfvwus-pf~633170617',
    yelp: 'https://www.yelp.com/biz/mr-and-mrs-construction-and-remodeling-santa-clara-3',
  },
  // Both GTM containers that are live on the WordPress site today.
  gtmIds: ['GTM-PR2CGF24', 'GTM-PN2L4CBT'],
  // Meta Pixel ID seen on the current site. Loaded through GTM today — keep it there; listed for reference.
  metaPixelId: '1712086908945896',
  googleSiteVerification: 'a3JbM7e42i5XzC3qSn0m4d-CWoSTh33TpAeNqgCotcw',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '/api/lead',
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITEKEY || '',
  // Client preview build (GitHub Pages): noindex everywhere, no GTM, forms disabled. Set PUBLIC_PREVIEW=1.
  preview: import.meta.env.PUBLIC_PREVIEW === '1',
  logos: {
    rectBlack: '/wp-content/uploads/2023/12/Logo_Rectangle_Black-no-gap.png',
    squareBlack: '/wp-content/uploads/2023/12/Logo_Square_Black-No-gap.png',
    rectWhite: '/wp-content/uploads/2023/12/Logo_Rectangle_White-no-gap.png',
    squareTaglineWhite: '/wp-content/uploads/2024/01/Logo_Square_Tagline_White-No-gap.png',
    schema: '/wp-content/uploads/2023/12/Logo_Square_Black.png',
  },
  heroVideo: '/wp-content/uploads/2024/05/Hero_p2.mp4',
  ogImage: '/wp-content/uploads/2024/05/Home-Feature.jpg',
} as const;

export const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about-us/',
    children: [
      { label: 'About us', href: '/about-us/' },
      { label: 'Testimonials', href: '/testimonials/' },
    ],
  },
  { label: 'Services', href: '/services/', children: 'services' as const },
  { label: 'Service Areas', href: '/service-area/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Refer A Friend', href: '/refer-a-friend/' },
];

export const FOOTER_MENU = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Services', href: '/services/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Testimonials', href: '/testimonials/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Refer A Friend', href: '/refer-a-friend/' },
  { label: 'Accessibility Statement', href: '/accessibility-statement/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Service', href: '/terms-of-service/' },
  { label: 'Site Map', href: '/site-map/' },
];

// Dropdown options used by every quote form (typos from the WP forms fixed).
export const PROJECT_TYPES = [
  'Kitchen remodeling',
  'Bathroom remodeling',
  'Room addition',
  'Complete remodeling',
  'New home construction',
  'ADU construction',
  'Hardscaping & landscaping',
];

export const HEARD_ABOUT = ['Google Search', 'Social Media', 'Yelp', 'Houzz', 'Local Advertisement', 'Referral'];
