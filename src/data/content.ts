// Shared content blocks (homepage + interior pages), migrated from WordPress.

// Real customer video testimonials (YouTube) with the overlay images used on the live site.
export const VIDEO_TESTIMONIALS = [
  { id: '5D53gs94zZ4', overlay: '2024/04/tm_-4.webp', alt: 'Client video testimonial — Mr. & Mrs. Construction' },
  { id: 'DFg86RZ1nlk', overlay: '2024/04/tm_-1.webp', alt: 'Client video testimonial — Dahjung' },
  { id: 'wqXam_5rz98', overlay: '2024/04/tm_-2.webp', alt: 'Client video testimonial' },
  { id: '0kXlpYIpPXI', overlay: '2024/04/tm_-3.webp', alt: 'Client video testimonial' },
];

// Homepage "Why Us?" (glass cards on photo background) — copy as on the live homepage.
export const HOME_WHY_US = [
  { icon: 'award', title: 'Exceptional Craftsmanship and Attention to Detail', text: 'At the heart of every project, our commitment to quality shines through. Our skilled artisans and designers pour their expertise into every detail, delivering results that exceed expectations.' },
  { icon: 'headset', title: 'Excellent Customer Service', text: 'We care about our clients. Hence we provide the best customer service to them. We understand the attachment between clients and their homes. We always strive to keep our projects as an open book and appreciate and incorporate clients’ ideas and suggestions.' },
  { icon: 'handshake', title: 'Trusted Experience', text: 'With years of industry experience, Mr. & Mrs. Construction symbolizes reliability and excellence. Our portfolio of successful projects and satisfied clients speaks volumes about our dedication to our craft.' },
  { icon: 'target', title: 'Customer-Centric Approach', text: 'Your vision is our priority. We collaborate closely with you throughout the entire process, ensuring that your desires and preferences are integrated seamlessly into the final design.' },
];

export const HOME = {
  h1: 'Silicon Valley Home Remodeling & ADU Construction | Licensed Contractor.',
  intro:
    'At Mr & Mrs Construction, we specialize in bringing your home improvement dreams to life. With a passion for crafting functional and aesthetically pleasing spaces, we are your dedicated partners in creating a living environment that resonates with your lifestyle.',
  introImages: ['2024/07/Home-remodeilng_09.jpg', '2024/01/Mr_Mrs_San-Jose_Gold-Creek-Way_3_Print.webp'],
  whyBg: '2024/01/2aa.jpg',
  formBg: '2024/01/Home_contact.webp',
  threeD: {
    title: 'Home 3D Design',
    subtitle: 'Bringing Designs to Life with High-Quality Rendering',
    text: 'Before the first hammer strikes, see your vision come to life with our innovative home 3D design services. Our meticulous planning process allows you to explore different design possibilities, ensuring your satisfaction before construction begins.',
    render: '2024/01/3d_001.webp',
    photo: '2024/01/3d_002.webp',
  },
  cta: {
    title: 'Let’s Transform Your Space Together',
    text: 'Embark on a journey of transformation with Mr & Mrs Construction. Whether you’re looking to remodel, expand, or enhance your home, our comprehensive range of services caters to your unique needs. Contact us today to embark on a transformational experience that redefines living.',
    left: '2024/07/home_tr_01.jpg',
    right: '2024/07/home_tr_02.jpg',
  },
};

// Fallback for the homepage "Latest Articles" carousel before the blog is migrated (npm run migrate).
export const LATEST_POSTS_FALLBACK = [
  { slug: 'room-additions-how-to-expand', title: 'Room Additions – How to Expand and Make Your Home More Functional', image: '2025/01/Room-Additions.webp' },
  { slug: 'new-construction-projects-types', title: 'Planning Your Dream Home: New Construction Projects Types', image: '2025/01/New-Construction-Projects.jpg' },
  { slug: 'how-to-make-a-small-cupertino-kitchen-functional', title: 'Get Ideas From Remodeling Contractors on How to Make a Small Cupertino Kitchen Functional and Open up Space', image: '2025/01/Small-Cupertino-Kitchen.webp' },
  { slug: 'trends-in-construction-2025', title: 'Major Trends in Construction and Remodeling For 2025', image: '2025/01/Major-Trends-in-Construction-and-Remodeling.webp' },
  { slug: 'affordable-remodeling-services-for-the-homeowner', title: 'Affordable Remodeling Services for the Homeowner', image: '2025/01/Remodeling-Services-for-the-Homeowner.jpg' },
  { slug: 'how-to-find-the-ideal-adu-contractor-in-palo-alto', title: 'How to Find the Ideal ADU Contractor in Palo Alto', image: '2024/12/How-to-Find-the-Ideal-ADU-Contractor-in-Palo-Alto.jpg' },
  { slug: 'custom-home-construction-in-san-jose', title: 'Custom Home Construction in San Jose: Why Hiring Local Contractors Matters', image: '2024/10/Home-Construction-in-San-Jose-f.jpg' },
  { slug: 'top-trends-in-kitchen-remodeling-2024', title: 'Top Trends in Kitchen Remodeling 2024', image: '2024/10/Trends-in-Kitchen-Remodeling-f.jpg' },
];

export const PAGE_HEROES = {
  about: '2024/01/About-us2-copy.jpg',
  testimonials: '2024/04/Testimonials_03.jpg',
  quote: '2024/01/Contact-us_02.jpg',
  refer: '2024/04/Refer-a-a-friend.jpg',
  gallery: '2024/03/Mr_Mrs_Palo-Alto_Parkside-Dr_2_Print.webp',
  blog: '2024/03/construction-blog2.webp',
  services: '2024/01/Home-Remodeling_01.jpg',
  areas: '2024/03/Mr_Mrs_Saratoga_Northampton-Dr_5_Print.webp',
};
