// Copy + settings for the Google/Meta Ads landing page: /free-3d-design-consultation/
// Built from the /home-test/ audit (Oct 2026). Items marked TODO(client) must be confirmed by the owners before ads go live.

import { SITE } from '../config/site';

export const LP = {
  path: '/free-3d-design-consultation/',
  title: 'Complimentary 3D Design Consultation | Mr. & Mrs. Construction',
  description:
    'See your remodel finished before construction begins. One licensed Silicon Valley design-build team for 3D design, permits and construction. CA Lic #1068849.',
  cta: 'Book My Complimentary 3D Design Consultation',
  ctaShort: 'See My Home in 3D',
  formTitle: 'Request your 3D design consultation',
  formNote: 'Complimentary, in your home. No obligation.',
  // TODO(client): confirm reply-time standard (Offer Stack proposes a 2-hour callback).
  formReply: 'We reply within one business day to schedule your visit.',

  // Default hero + per-service variants for ad message match. Use ?service=kitchen etc. in the ad final URL.
  hero: {
    eyebrow: 'Design-Build Remodeling & ADUs · Silicon Valley',
    h1: 'See your remodel finished — before construction begins.',
    sub: 'One licensed team delivers your 3D design, city permits and construction, with an itemized written proposal before any work begins.',
  },
  variants: {
    kitchen: {
      project: 'Kitchen remodeling',
      eyebrow: 'Kitchen Remodeling · Silicon Valley',
      h1: 'See your new kitchen in 3D — before construction begins.',
      sub: 'Layout, cabinetry and lighting designed around how you cook and gather, then permitted and built by one licensed team.',
    },
    bathroom: {
      project: 'Bathroom remodeling',
      eyebrow: 'Bathroom Remodeling · Silicon Valley',
      h1: 'See your new bathroom in 3D — before construction begins.',
      sub: 'Primary suites and guest baths designed, permitted and built by one licensed team, with an itemized written proposal first.',
    },
    adu: {
      project: 'ADU construction',
      eyebrow: 'ADUs & Garage Conversions · Silicon Valley',
      h1: 'See your ADU in 3D — before construction begins.',
      sub: 'Detached, attached and garage-conversion ADUs designed, permitted and built by one licensed team that knows your city’s ADU rules.',
    },
    addition: {
      project: 'Room addition',
      eyebrow: 'Room Additions · Silicon Valley',
      h1: 'See your addition in 3D — before construction begins.',
      sub: 'Ground-floor and second-story additions designed to read as part of the original house, then permitted and built by one team.',
    },
    remodel: {
      project: 'Complete remodeling',
      eyebrow: 'Whole-Home Remodeling · Silicon Valley',
      h1: 'See your whole-home remodel in 3D — before it begins.',
      sub: 'Full or phased renovations managed as a single project: one design, one contract, one project manager.',
    },
    newhome: {
      project: 'New home construction',
      eyebrow: 'New Custom Homes · Silicon Valley',
      h1: 'See your new custom home in 3D — before ground breaks.',
      sub: 'From feasibility study through certificate of occupancy, designed, permitted and built by one licensed team.',
    },
  } as Record<string, { project: string; eyebrow: string; h1: string; sub: string }>,

  // Proof bar — only verifiable facts.
  proof: [
    { value: 'Since 1999', label: 'Building in Silicon Valley' },
    { value: '19', label: 'Peninsula & South Bay cities served' },
    // Rating + count maintained in src/config/site.ts (SITE.reviews).
    { value: `${SITE.reviews.rating} ★`, label: `Google rating · ${SITE.reviews.count} reviews`, show: true },
    { value: 'Top 7%', label: 'of 336,931 CA contractors · BuildZoom' },
    { value: '#1068849', label: 'CA license · bonded & insured', href: 'license' },
  ] as { value: string; label: string; show?: boolean; href?: string }[],

  problem: {
    kicker: 'The usual way',
    title: 'Most remodels go wrong in the gaps between people.',
    text: [
      'An architect draws it. A designer selects it. An expediter files the permits. A contractor prices it — and discovers what the drawings missed. Every hand-off adds weeks, and every gap becomes a change order.',
      'Meanwhile you are asked to approve a six-figure project you have only seen as line drawings.',
    ],
    cards: [
      { icon: 'users', title: 'Four firms, and you coordinating them', text: 'Separate contracts, separate schedules, and your inbox as the project office.' },
      { icon: 'clock', title: 'Budgets that move after the walls open', text: 'Verbal changes, vague allowances and invoices that arrive after the fact.' },
      { icon: 'cube', title: 'Signing for a space you can’t yet see', text: 'Material boards and floor plans, but no clear picture of the finished room.' },
    ],
  },

  method: {
    kicker: 'The Mr. & Mrs. Method',
    title: 'One team. One contract. From first sketch to final inspection.',
    text: 'Design, permits and construction under one roof, so decisions are made once — in 3D, before anything is ordered.',
    steps: [
      { n: '01', title: 'In-home consultation', text: 'We walk your home, take full measurements and listen to how your family lives and what you want to change.' },
      { n: '02', title: 'Your 3D design preview', text: 'A photorealistic rendering built from your measurements and your material choices. Refine it until it is right.' },
      { n: '03', title: 'Proposal & permits', text: 'An itemized written proposal and schedule. We prepare the submittal and manage plan check, revisions and inspections.' },
      { n: '04', title: 'Build, with one manager', text: 'A named project manager from contract to completion, weekly updates, and no change without your written approval.' },
    ],
  },

  // TODO(client): confirm each deliverable (rendering timing, number of revisions).
  offer: {
    kicker: 'Your first step',
    title: 'The complimentary 3D design consultation',
    text: 'Before you commit to a contractor, see exactly what you would be building.',
    items: [
      'An in-home visit with full measurements',
      'A photorealistic 3D rendering of your new space',
      'A design review to refine layout and finishes',
      'A preliminary investment range and timeline',
      'The permit pathway for your city',
      'No obligation to proceed',
    ],
    image: '2024/01/3d_001.webp',
  },

  // TODO(client): ranges from the Offer Stack (May 2026) — confirm before publishing, or set showPricing:false.
  showPricing: true,
  services: [
    { slug: 'kitchen-remodeling', title: 'Kitchen remodeling', text: 'Layouts, cabinetry and lighting planned in 3D around how you cook and gather.', price: '$50K–$200K+' },
    { slug: 'bathroom-remodel', title: 'Bathroom remodeling', text: 'Primary suites and guest baths, detailed with the precision of a fine hotel.', price: '$25K–$120K+' },
    { slug: 'adu-construction', title: 'ADUs & garage conversions', text: 'Detached, attached and conversion units — designed, permitted and built for family or rental use.', price: '$120K–$350K+' },
    { slug: 'room-addition', title: 'Room additions', text: 'Ground-floor and second-story additions engineered to read as part of the original house.', price: '$100K–$350K+' },
    { slug: 'home-remodeling', title: 'Whole-home remodeling', text: 'Full or phased renovations of older Silicon Valley homes, managed as a single project.', price: '$120K–$400K+' },
    { slug: 'new-home-construction', title: 'New custom homes', text: 'Ground-up homes from feasibility study through certificate of occupancy.', price: 'from $600K' },
  ],

  // TODO(client): confirm every commitment and the warranty term against the standard contract.
  commitments: [
    { icon: 'pencil', title: 'An itemized proposal', text: 'Every line priced and scheduled before work begins.' },
    { icon: 'shield', title: 'No surprise change orders', text: 'Any change is priced in writing and signed by you first.' },
    { icon: 'license', title: 'Permits, handled', text: 'Submittals, revisions and inspections managed by our team.' },
    { icon: 'headset', title: 'One project manager', text: 'A named contact from contract to completion, with weekly updates.' },
    { icon: 'award', title: 'A written warranty', text: 'Our workmanship warranty is included in your contract.' },
  ],

  local: {
    kicker: 'Local knowledge',
    title: 'Decades of permits, city by city.',
    text: 'Saratoga’s design review, Palo Alto’s plan check, San Jose’s ADU program — every city has its own requirements and its own timeline. We prepare each submittal for the reviewers who will read it, which keeps revision cycles short.',
  },

  faqs: [
    { q: 'Is the 3D design consultation really complimentary?', a: 'Yes. The in-home visit and your 3D design preview are included at no charge, and there is no obligation to proceed.' },
    { q: 'What does a remodel typically cost?', a: 'Kitchens typically range from $50,000 to $200,000+, bathrooms from $25,000 to $120,000+, and ADUs from $120,000 to $350,000+, depending on scope, structure and finishes. Your consultation ends with a preliminary range for your project, and the written proposal itemizes every line.' },
    { q: 'How long will my project take?', a: 'Once permits are approved, kitchens typically take 8–14 weeks and bathrooms 4–8 weeks; room additions 3–5 months and ADUs 5–8 months. Permit review varies by city, and you receive a full schedule with your proposal.' },
    { q: 'How do you prevent change orders?', a: 'Most decisions are made in 3D before anything is ordered. If you choose to change the scope, the change is priced in writing and approved by you before work proceeds.' },
    { q: 'Do you handle permits?', a: 'Yes — application, plan check, revisions, inspections and final sign-off, in all 19 cities we serve.' },
    { q: 'Are you licensed, bonded and insured?', a: 'Yes. California license #1068849, bonded and insured — you can verify it on the CSLB website.' },
    { q: 'Can an ADU produce rental income?', a: 'Many Bay Area ADUs rent for roughly $2,500–$4,000 a month, depending on size, city and finish. Rents and returns vary, and we are happy to share local comparables during your consultation.' },
  ],

  close: {
    title: 'Let’s see your home, finished.',
    text: 'We’ll visit, measure and listen — then show you the result in 3D before you commit to anything.',
  },
};
