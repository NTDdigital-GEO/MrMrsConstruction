// Service pages — copy migrated from mrandmrscnr.com/services/* (Oct 2026).
// Content QA fixes applied: "Mrs. & Mrs. Constructing" -> "Mr. & Mrs. Construction", duplicated / mismatched
// card + FAQ texts corrected (see README "Content fixes"). Layout and order match the WordPress template.

export interface Card { title: string; text: string; icon: string }
export interface Faq { q: string; a: string; list?: string[] }
export interface Service {
  slug: string;
  menu: string;           // nav + card label
  h1: string;
  heroImage: string;      // hero background (right)
  subtitle: string;       // H2 inside hero card
  heroText: string;
  introTitle: string;
  introText: string;
  introImages: [string, string];
  whyTitle: string;
  cards: Card[];
  solutionsTitle: string;
  solutionsText: string;
  teamTitle: string;
  teamText: string;
  faqs: Faq[];
  homeTeaser: string;     // homepage "Our Services" row text
  homeImage: string;      // homepage row image
  cardImage: string;      // "Additional Services" carousel image
  metaTitle: string;
  metaDescription: string;
  serviceType: string;    // schema.org Service.serviceType
}

const STD_CITIES = 'Serving Palo Alto, Saratoga, San Jose & 16 more cities. Get a free quote.';

export const SERVICES: Service[] = [
  {
    slug: 'home-remodeling',
    menu: 'Home Remodeling',
    h1: 'Home Remodeling',
    heroImage: '2024/01/Home-Remodeling_01.jpg',
    subtitle: 'Stunning Home Remodeling Services - Your Dream Home Awaits',
    heroText:
      'Are you dreaming of transforming your house into your dream home? Look no further than Mr. & Mrs. Construction, where we offer exceptional and top-notch home remodeling services. With a passion for turning your visions into reality, we take immense pride in delivering stunning and innovative home remodeling solutions that exceed expectations.',
    introTitle: 'Unleashing the Beauty of Your Home',
    introText:
      'At Mr. & Mrs. Construction, we understand that your home is a reflection of your personality and taste. Our comprehensive range of home remodeling services is designed to breathe new life into your living spaces and create a haven that perfectly complements your lifestyle. Whether you desire a complete home makeover or a specific room transformation, our expert team is fully equipped to handle projects of all sizes and complexities.',
    introImages: ['2024/03/Mr_Mrs_San-Jose_Gold-Creek-Way1_Print.webp', '2024/03/Mr_Mrs_Palo-Alto_Parkside-Dr_12_Print.webp'],
    whyTitle: 'Why Choose Mr. & Mrs. Construction for Your Home Remodeling?',
    cards: [
      { icon: 'target', title: 'Tailored Solutions', text: 'We believe in the power of personalization. Every project we undertake is meticulously tailored to match your specific requirements and preferences.' },
      { icon: 'award', title: 'Unparalleled Expertise', text: 'With years of experience in the industry, our team of skilled professionals possesses the expertise to handle every aspect of your home remodeling project flawlessly.' },
      { icon: 'shield', title: 'Quality Assurance', text: 'At Mr. & Mrs. Construction, quality is at the core of everything we do. We source the finest materials and use cutting-edge techniques to ensure long-lasting and remarkable results.' },
      { icon: 'clock', title: 'Timely Delivery', text: 'We understand the importance of deadlines. Rest assured, your project will be completed within the agreed timeframe, without compromising on quality.' },
      { icon: 'users', title: 'Customer-Centric Approach', text: 'Our clients are our priority, and we maintain open communication throughout the remodeling process to ensure that your vision is realized to perfection.' },
      { icon: 'headset', title: 'Aftercare and Support', text: 'Our relationship with clients doesn’t end at project completion. We offer comprehensive aftercare and support to ensure your continued satisfaction with our work.' },
    ],
    solutionsTitle: 'Experience the Mr & Mrs Difference',
    solutionsText:
      'Join hands with Mr. & Mrs. Construction and embark on an unforgettable journey of home transformation. Let our creativity, dedication, and passion for excellence breathe life into your dreams. Contact us today to schedule a consultation and take the first step towards a home that reflects your unique style and personality.',
    teamTitle: 'Our Expert Team for Home Remodeling',
    teamText:
      'At Mr. & Mrs. Construction, our team is our greatest asset. We have assembled a group of skilled professionals who are passionate about home remodeling and dedicated to delivering outstanding results — from design and permits to construction and final walkthrough.',
    faqs: [
      { q: 'How long does a typical home remodeling project take?', a: 'The duration of a project varies depending on its complexity. We provide an estimated timeline during the initial consultation.' },
      { q: 'What sets Mr. & Mrs. Construction apart from other remodeling companies?', a: 'We take immense pride in our customer-centric approach, exceptional craftsmanship, and dedication to quality.' },
      { q: 'Can I make changes to the design plan during the project?', a: 'Yes, we encourage open communication, and our team is flexible to accommodate reasonable changes during the remodeling process.' },
      { q: 'Are your services insured?', a: 'Yes, we are fully licensed and insured, ensuring that your property and investment are protected throughout the project.' },
      { q: 'How much does a home remodel cost?', a: 'The cost of a home remodel depends on various factors, including the size of the space, the materials used, and the complexity of the design. We offer a free initial consultation to discuss your needs and budget, after which we provide a detailed quote outlining all costs involved. Our goal is to deliver high-quality work within your budget.' },
    ],
    homeTeaser:
      'Is your current home not keeping up with your evolving needs? Our home remodeling services are tailored to enhance your living experience. From reimagining interior layouts to incorporating modern design elements, we ensure your space truly reflects your personality.',
    homeImage: '2024/07/Mr_Mrs_San-Jose_Pinewood-Dr_16_Print.jpg',
    cardImage: '2024/01/Home-Remodeling_01.jpg',
    metaTitle: 'Home Remodeling in Silicon Valley | Mr. & Mrs. Construction',
    metaDescription: `Licensed Silicon Valley home remodeling contractor (CA Lic #1068849). Free 3D design preview. Full permit management. ${STD_CITIES}`,
    serviceType: 'Home remodeling',
  },
  {
    slug: 'kitchen-remodeling',
    menu: 'Kitchen Remodeling',
    h1: 'Kitchen Remodeling',
    heroImage: '2023/12/kitchen-remodeling.jpg',
    subtitle: 'Elevate Your Home with Exquisite Kitchen Remodeling Services',
    heroText:
      'Welcome to Mr. & Mrs. Construction, your trusted partner for kitchen remodeling services. Our team of skilled professionals is committed to transforming your kitchen into a stunning and functional space that exceeds your expectations. With years of experience in the industry, we have earned a reputation for excellence and customer satisfaction.',
    introTitle: 'Custom Kitchen Renovations Tailored to You',
    introText:
      'At Mr. & Mrs. Construction, we recognize that the kitchen is the heart of your home, blending functionality with personal style. Our specialized kitchen remodeling services are tailored to revitalize your culinary space, ensuring it meets your practical needs while reflecting your individual taste. From sleek, modern designs to cozy, traditional settings, we transform your vision into reality. Our dedicated team, skilled in the latest trends and techniques, is committed to delivering a seamless renovation experience. Let us help you create a kitchen that not only looks stunning but also enhances your home living experience, making every meal a delightful occasion.',
    introImages: ['2024/03/Mr_Mrs_Cupertino_Dolores-Ave_12_Print.webp', '2024/03/Mr_Mrs_Palo-Alto_Parkside-Dr_11_Print.webp'],
    whyTitle: 'Why Choose Mr. & Mrs. Construction for Your Kitchen Remodeling?',
    cards: [
      { icon: 'users', title: 'Experienced Professionals', text: 'Our team at Mr. & Mrs. Construction boasts years of industry experience, ensuring that every kitchen remodeling project is completed with expertise and attention to detail.' },
      { icon: 'award', title: 'Quality Craftsmanship', text: 'We take pride in our work, delivering exceptional craftsmanship. Our portfolio showcases our commitment to creating beautiful, functional kitchens that stand the test of time.' },
      { icon: 'pencil', title: 'Personalized Designs', text: 'Understanding that each client has unique needs, we offer personalized design services to create a kitchen that perfectly fits your lifestyle, preferences, and budget.' },
      { icon: 'chat', title: 'Transparent Communication', text: 'From the initial consultation to the final walkthrough, we maintain open and transparent communication, keeping you informed and involved throughout the entire remodeling process.' },
      { icon: 'clock', title: 'Timely Completion', text: 'We value your time and strive to complete all projects efficiently and within the agreed timeline, ensuring minimal disruption to your daily life.' },
      { icon: 'smile', title: 'Customer Satisfaction', text: 'Your satisfaction is our top priority. We go above and beyond to ensure that you are delighted with your new kitchen, offering a guarantee on our work to give you peace of mind.' },
    ],
    solutionsTitle: 'Innovative Kitchen Remodeling Solutions',
    solutionsText:
      'Discover the pinnacle of kitchen elegance with Mr. & Mrs. Construction’s bespoke remodeling services. Our passion lies in crafting kitchens that are not just visually stunning but are also a perfect fit for your everyday needs. We dive deep into the details, from cabinetry and countertops to lighting and appliances, ensuring each element harmonizes to create your ideal cooking and dining environment. With our commitment to quality craftsmanship and meticulous attention to detail, we deliver a kitchen remodel that enhances both the beauty and functionality of your home. Step into a world where culinary meets comfort, and let us bring your dream kitchen to life.',
    teamTitle: 'Our Expert Team for Kitchen Remodeling',
    teamText:
      'At Mr. & Mrs. Construction, our team’s expertise is the backbone of our success. We take immense pride in the talents, skills, and dedication of our professionals, who are true masters of kitchen remodeling. Each member of our team brings a unique set of skills and experience, contributing to the seamless execution of every project.',
    faqs: [
      { q: 'How long does a typical kitchen remodeling take?', a: 'The duration of a kitchen remodeling can vary depending on the scope of the project. Generally, a standard kitchen remodel may take anywhere from 6 to 12 weeks. However, complex projects or custom designs might extend the timeline.' },
      { q: 'What is the average cost of a kitchen remodel?', a: 'The cost of a kitchen remodel depends on several factors, including the size of the kitchen, the materials chosen, and the extent of the renovation. At Mr. & Mrs. Construction, we offer personalized quotes tailored to your specific needs and budget.' },
      { q: 'Can I stay in my home during the kitchen remodeling process?', a: 'Yes, you can usually stay in your home during a kitchen remodel. Our team takes measures to minimize disruptions, and we ensure a safe working environment. However, we understand that each client’s situation is unique, and we can discuss alternative arrangements if necessary.' },
      { q: 'Do you provide a warranty for your kitchen remodeling services?', a: 'Yes, we take pride in the quality of our workmanship and the materials we use. We offer warranties on our services to provide you with peace of mind and assurance in the longevity of your kitchen remodel.' },
      { q: 'How can I get started with my kitchen remodeling project?', a: 'Getting started is easy! Simply reach out to us through our website or call our office to schedule a free consultation. Our team will discuss your ideas, requirements, and budget, and we’ll guide you through the entire process.' },
    ],
    homeTeaser:
      'Discover the heart of your home anew with our kitchen remodeling expertise. Whether you seek a sleek and contemporary design or a cozy and rustic atmosphere, our skilled team transforms your kitchen into a functional and inviting space where memories are made.',
    homeImage: '2024/01/Mr_Mrs_Palo-Alto_Parkside-Dr_14_Print.webp',
    cardImage: '2023/12/kitchen-remodeling.jpg',
    metaTitle: 'Kitchen Remodeling in Silicon Valley | Mr. & Mrs. Construction',
    metaDescription: `Licensed Silicon Valley kitchen remodeling contractor (CA Lic #1068849). Free 3D design preview. Full permit management. ${STD_CITIES}`,
    serviceType: 'Kitchen remodeling',
  },
  {
    slug: 'bathroom-remodel',
    menu: 'Bathroom Remodel',
    h1: 'Bathroom Remodel',
    heroImage: '2023/12/Bathroom-Remodeling_1.webp',
    subtitle: 'Revitalize Your Space: Expert Bathroom Remodel by Mr. & Mrs. Construction',
    heroText:
      'At Mr. & Mrs. Construction, we take immense pride in being your go-to bathroom remodeling service. With years of experience and a team of skilled professionals, we are committed to transforming your bathroom into a space that reflects your unique style and meets your functional needs.',
    introTitle: 'Your Trusted Bathroom Remodeling Contractor',
    introText:
      'When it comes to bathroom remodeling services, you need a bathroom remodeling contractor you can trust. We are dedicated to delivering exceptional craftsmanship, utilizing top-notch materials, and providing transparent communication throughout the entire process. Our goal is to exceed your expectations and create a bathroom you’ll love for years to come.',
    introImages: ['2024/03/Mr_Mrs_San-Jose_Pinewood-Dr_15_Print.webp', '2024/03/Mr_Mrs_Palo-Alto_Parkside-Dr_6_Print.webp'],
    whyTitle: 'Why Choose Mr. & Mrs. Construction for Your Bathroom Remodel?',
    cards: [
      { icon: 'pencil', title: 'Customized Design Solutions', text: 'We create personalized bathroom designs that reflect your style and maximize functionality, ensuring a perfect fit for your lifestyle and needs.' },
      { icon: 'award', title: 'High-Quality Materials', text: 'Our commitment to quality means using only the best materials that combine durability with aesthetic appeal, guaranteeing a finish that lasts and looks great.' },
      { icon: 'users', title: 'Experienced Professionals', text: 'Our licensed team brings years of hands-on bathroom remodeling experience, from waterproofing and plumbing to custom tile work and finishing details.' },
      { icon: 'clock', title: 'Efficient Project Management', text: 'We pride ourselves on efficient project management, ensuring that your bathroom remodel is completed on time and within budget, with minimal disruption to your daily life.' },
      { icon: 'cube', title: 'Advanced Technology', text: 'We stay at the forefront of the latest industry trends and technologies. This allows us to offer you innovative solutions and advanced techniques that enhance the functionality and aesthetic appeal of your bathroom.' },
      { icon: 'smile', title: 'Satisfaction Guaranteed', text: 'Your satisfaction is our top priority. We work closely with you throughout the process to ensure the final product meets your expectations and you are completely satisfied with your new bathroom.' },
    ],
    solutionsTitle: 'Tailored Bathroom Solutions for Every Home',
    solutionsText:
      'At Mr. & Mrs. Construction, we understand that a bathroom remodel is not just about replacing tiles and fixtures—it’s about creating a personal sanctuary that reflects your style and meets your needs. Whether you’re looking to update an outdated bathroom, increase functionality, or simply add a touch of luxury, our expert team is here to help bring your vision to life.',
    teamTitle: 'Our Expert Team for Bathroom Remodel',
    teamText:
      'Every bathroom remodel starts with a personalized design consultation where we listen to your ideas and preferences. Our designers work with you to create a bathroom that matches your vision, from modern and minimalist to classic and luxurious. We guide you through selecting materials, colors, and finishes, ensuring every detail contributes to the overall aesthetic and functionality of your space.',
    faqs: [
      { q: 'How long does a bathroom remodel typically take?', a: 'The duration of a bathroom remodel can vary depending on the scope and complexity of the project. Generally, a straightforward renovation may take around 2 to 3 weeks, while more extensive remodels can extend to 4 to 6 weeks. Our team at Mr. & Mrs. Construction will provide a detailed timeline during the initial consultation to give you a clear idea of the project’s duration.' },
      { q: 'What are the common bathroom remodeling costs?', a: 'The cost of a bathroom remodel can be influenced by factors such as the size of the bathroom, the level of customization, the quality of materials chosen, and any additional features or upgrades. At Mr. & Mrs. Construction, we offer competitive pricing and strive to provide transparent cost estimates tailored to your specific needs and budget.' },
      { q: 'Can Mr. & Mrs. Construction help with the design phase of my bathroom remodel?', a: 'Absolutely! Our team includes experienced designers who work closely with you to create a bathroom that fits your vision and needs. We help with selecting colors, materials, and fixtures, and we provide 3D renderings so you can visualize the space before construction begins.' },
      { q: 'Do you offer any warranties on your services?', a: 'Yes, we take pride in the quality of our work and stand behind it with warranties on both labor and materials. Our team ensures that every aspect of your bathroom remodel is completed to the highest standards.' },
      { q: 'Do I need to vacate my home during the bathroom remodel?', a: 'In most cases, you will not need to leave your home during the remodeling process. Our team works efficiently and keeps the work area contained and clean to minimize disruption to your daily life. We also coordinate with you to schedule work times that are the least intrusive.' },
    ],
    homeTeaser:
      'Indulge in the tranquility of a revitalized bathroom retreat. Our bathroom remodeling services combine elegant aesthetics with intelligent storage solutions, ensuring your daily routines are elevated to a spa-like experience.',
    homeImage: '2024/01/Mr_Mrs_San-Jose_Pinewood-Dr_15_Print.webp',
    cardImage: '2023/12/Bathroom-Remodeling_1.webp',
    metaTitle: 'Bathroom Remodeling in Silicon Valley | Mr. & Mrs. Construction',
    metaDescription: `Licensed Silicon Valley bathroom remodeling contractor (CA Lic #1068849). Free 3D design preview. Full permit management. ${STD_CITIES}`,
    serviceType: 'Bathroom remodeling',
  },
  {
    slug: 'room-addition',
    menu: 'Room Addition',
    h1: 'Room Addition',
    heroImage: '2023/12/room-addition.jpg',
    subtitle: 'Expand Your Home with Our Expert Room Addition Services',
    heroText:
      'At Mr. & Mrs. Construction, we take immense pride in our legacy of providing exceptional room addition services. With years of experience in the construction industry, our team has transformed countless homes into spacious and functional living environments. As your trusted room addition contractor, we are dedicated to delivering top-notch craftsmanship and personalized design solutions to bring your vision to life.',
    introTitle: 'Efficient and Seamless Integration',
    introText:
      'Our construction experts specialize in projects that require a delicate balance of old and new. We use the latest construction techniques and materials to ensure that the new addition looks and feels like a natural extension of your home, avoiding the disjointed appearance that can come from less experienced workmanship.',
    introImages: ['2024/03/Mr_Mrs_San-Jose_Parkside-Ave_11_Print-1.webp', '2024/03/Mr_Mrs_San-Jose_Pinewood-Dr_12_Print-1.webp'],
    whyTitle: 'Why Choose Mr. & Mrs. Construction for Your Room Addition?',
    cards: [
      { icon: 'users', title: 'Experienced Professionals', text: 'Our team at Mr. & Mrs. Construction boasts years of industry experience, ensuring that every room addition is engineered, permitted and built with expertise and attention to detail.' },
      { icon: 'award', title: 'Quality Craftsmanship', text: 'We take pride in our work, delivering exceptional craftsmanship. Our portfolio showcases our commitment to creating beautiful, functional additions that stand the test of time.' },
      { icon: 'pencil', title: 'Personalized Designs', text: 'Understanding that each client has unique needs, we offer personalized design services to create an addition that perfectly fits your lifestyle, preferences, and budget.' },
      { icon: 'chat', title: 'Transparent Communication', text: 'From the initial consultation to the final walkthrough, we maintain open and transparent communication, keeping you informed and involved throughout the entire process.' },
      { icon: 'clock', title: 'Timely Completion', text: 'We value your time and strive to complete all projects efficiently and within the agreed timeline, ensuring minimal disruption to your daily life.' },
      { icon: 'smile', title: 'Customer Satisfaction', text: 'Your satisfaction is our top priority. We go above and beyond to ensure that you are delighted with your new space, offering a guarantee on our work to give you peace of mind.' },
    ],
    solutionsTitle: 'Maximizing Your Home’s Potential',
    solutionsText:
      'A room addition can significantly enhance the functionality of your home. It can provide the extra space you need for a comfortable and organized living environment, such as an additional bathroom, a larger kitchen, or a dedicated playroom for children.',
    teamTitle: 'Our Expert Team for Room Addition',
    teamText:
      'From initial design to final touches, our team manages all aspects of your room addition project. We coordinate all activities and communicate regularly, keeping you updated on progress and ensuring the project stays on track and within budget.',
    faqs: [
      { q: 'What is the typical timeframe for a room addition?', a: 'The timeframe for a room addition can vary depending on the complexity and size of the project. Our team will provide a detailed timeline during the consultation phase.' },
      { q: 'Do you handle permit applications?', a: 'Yes, we handle all the necessary permits and paperwork required for your room addition project, saving you time and ensuring compliance with local regulations.' },
      { q: 'Can you match the existing style and finishes of my home in the new addition?', a: 'Absolutely! Our team specializes in ensuring that new additions blend seamlessly with your existing home. We meticulously match materials, architectural styles, and finishes to make the new space appear as if it has always been part of your home.' },
      { q: 'What steps are involved in the room addition process?', a: 'The room addition process involves several key steps: initial consultation, design, obtaining permits, construction, and final inspection. During the initial consultation, we discuss your needs and assess your space. Next, we design the addition and take care of all necessary permits. Once permits are approved, construction begins. After construction, a final inspection ensures everything is up to standard before we hand over the completed space to you.' },
      { q: 'How do you ensure the construction process is minimally disruptive to my daily life?', a: 'We agree on working hours with you in advance, keep the work area separated and cleaned daily, and schedule noisy or utility-related work ahead of time so your household can plan around it. Your project manager keeps you informed throughout.' },
    ],
    homeTeaser:
      'Our room addition services provide the perfect solution when your family grows, or your needs change. Our experienced contractors meticulously plan and execute room additions, seamlessly integrating new spaces into your home design.',
    homeImage: '2024/07/Room-Addition.jpg',
    cardImage: '2023/12/room-addition.jpg',
    metaTitle: 'Room Additions in Silicon Valley | Mr. & Mrs. Construction',
    metaDescription: `Licensed Silicon Valley room addition contractor (CA Lic #1068849). Free 3D design preview. Full permit management. ${STD_CITIES}`,
    serviceType: 'Room addition',
  },
  {
    slug: 'adu-construction',
    menu: 'ADU Construction',
    h1: 'ADU Construction',
    heroImage: '2024/06/adu_he.jpg',
    subtitle: 'Your Trusted Partner for Top-Quality ADU Construction',
    heroText:
      'Welcome to Mr. & Mrs. Construction, your ADU construction company specializing in the design, construction, and remodeling of Accessory Dwelling Units (ADUs). As experienced ADU builders, we provide comprehensive services to help you create additional living spaces that are both functional and stylish.',
    introTitle: 'Why Add an ADU to Your Property?',
    introText:
      'Accessory Dwelling Units (ADUs) are a versatile and valuable addition to any property. They offer a range of benefits, including increased property value, additional living space, and the potential for rental income. As experienced ADU contractors, we understand the unique needs of homeowners and strive to deliver high-quality ADU construction services that exceed your expectations.',
    introImages: ['2024/05/ADU_2.jpg', '2024/05/ADU_3.jpg'],
    whyTitle: 'Why Choose Mr. & Mrs. Construction for Your ADU Construction?',
    cards: [
      { icon: 'users', title: 'Experienced ADU Contractors', text: 'With years of experience in the industry, Mr. & Mrs. Construction has established itself as a trusted name among ADU contractors. Our portfolio of successful projects and satisfied clients speaks to our commitment to excellence and customer satisfaction.' },
      { icon: 'award', title: 'Quality Craftsmanship', text: 'At Mr. & Mrs. Construction, we use only the highest quality materials and employ skilled craftsmen to ensure your ADU is built to the highest standards. Our attention to detail and dedication to quality result in a finished product that is both durable and beautiful.' },
      { icon: 'pencil', title: 'Customized ADU Solutions', text: 'We understand that every project is unique, and we offer personalized services tailored to your specific needs and preferences. Our team works closely with you throughout the entire process to ensure your vision is realized.' },
      { icon: 'pin', title: 'Local Knowledge and Expertise', text: 'As an experienced ADU construction company, we have in-depth knowledge of local building codes and regulations. We handle all necessary permits and inspections, ensuring your project complies with all legal requirements.' },
      { icon: 'target', title: 'Our Goal', text: 'Our goal is to exceed your expectations and deliver an ADU that you will love for years to come.' },
      { icon: 'smile', title: 'Customer Satisfaction', text: 'Your satisfaction is our top priority. We maintain open communication throughout the project and are always available to answer any questions or address any concerns.' },
    ],
    solutionsTitle: 'Comprehensive ADU Services',
    solutionsText:
      'Our ADU construction services cover every aspect of your project, from initial consultation to final inspection. We are a full-service ADU construction company dedicated to making your vision a reality.',
    teamTitle: 'Our Expert Team for ADU Construction',
    teamText:
      'Mr. & Mrs. Construction is dedicated to delivering exceptional ADU construction services across Silicon Valley. Our reputation as reliable ADU contractors is built on our commitment to quality, customer satisfaction, and innovative solutions.',
    faqs: [
      { q: 'What is an Accessory Dwelling Unit (ADU)?', a: 'An Accessory Dwelling Unit (ADU) is a secondary residential unit on a single-family property. ADUs can be attached to the main house, located within the main house, or built as a separate structure. They offer additional living space and can serve various purposes, such as housing family members, generating rental income, or providing a home office or studio.' },
      { q: 'Why should I consider building an ADU on my property?', a: 'Building an ADU offers several benefits, including:', list: ['Increased Property Value: ADUs can significantly boost your property’s market value.', 'Additional Income: Renting out your ADU can provide a steady source of rental income.', 'Flexible Living Space: ADUs can be used for guests, aging family members, or as a home office or studio.', 'Sustainability: ADUs make efficient use of existing infrastructure and can be designed to be energy-efficient.'] },
      { q: 'How long does the ADU construction process take?', a: 'The timeline for ADU construction can vary depending on several factors, such as the complexity of the design, permitting processes, and site conditions. Typically, the process can take anywhere from 6 to 12 months from initial consultation to project completion. Our team at Mr. & Mrs. Construction will provide you with a detailed timeline during the planning phase.' },
      { q: 'Do I need special permits to build an ADU?', a: 'Yes, building an ADU requires obtaining specific permits and approvals from local government agencies. Our experienced team handles all aspects of the permitting process, ensuring that your ADU complies with local zoning laws and building codes. We make the process as seamless as possible, taking care of all the paperwork and necessary approvals.' },
      { q: 'Can I customize the design of my ADU?', a: 'Absolutely! At Mr. & Mrs. Construction, we specialize in creating custom ADU designs that meet your unique needs and preferences. Our design team works closely with you to develop a plan that complements your existing property while incorporating your desired features and aesthetics. Whether you prefer a modern, traditional, or eco-friendly design, we can bring your vision to life.' },
    ],
    homeTeaser:
      'Our ADU construction services cover every aspect of your project, from initial consultation to final inspection. We are a full-service ADU construction company dedicated to making your vision a reality.',
    homeImage: '2024/06/adu_he.jpg',
    cardImage: '2024/06/adu_he.jpg',
    metaTitle: 'ADU Builder in Silicon Valley | Mr. & Mrs. Construction',
    metaDescription: `Licensed Silicon Valley ADU builder (CA Lic #1068849). Free 3D design preview. Full permit management. ${STD_CITIES}`,
    serviceType: 'Accessory dwelling unit (ADU) construction',
  },
  {
    slug: 'new-home-construction',
    menu: 'New Home Construction',
    h1: 'New Home Construction',
    heroImage: '2024/06/New-Home-Constructionn_2.webp',
    subtitle: 'Your Trusted Partner in New Home Construction',
    heroText:
      'At Mr. & Mrs. Construction, we specialize in delivering high-quality new home construction services tailored to your vision and lifestyle. As experienced new home builders, we are dedicated to turning your dream home into a reality, from the first design concept through final inspection.',
    introTitle: 'Trust an Experienced New Home Construction Company',
    introText:
      'Mr. & Mrs. Construction is committed to delivering exceptional results on every new home we build in Silicon Valley. Our reputation as a trusted new home builder is built on our dedication to quality, innovation, and customer satisfaction.',
    introImages: ['2024/06/New-Home-Constructionn_4.webp', '2024/06/New-Home-Constructionn_3.webp'],
    whyTitle: 'Why Choose Mr. & Mrs. Construction for Your New Home Construction?',
    cards: [
      { icon: 'target', title: 'Personalized Approach', text: 'We believe that your home should reflect your unique style and needs. Our personalized approach ensures that every detail of your home is tailored to your preferences. From initial design concepts to final finishes, we work closely with you to bring your vision to life.' },
      { icon: 'pencil', title: 'Innovative Design Solutions', text: 'Our team of architects and designers is dedicated to creating innovative and functional home designs. Whether you prefer a modern, traditional, or eclectic style, we incorporate the latest trends and technologies to create a home that is both beautiful and practical.' },
      { icon: 'award', title: 'Experience and Expertise', text: 'With years of experience in the construction industry, our team has honed the skills and knowledge necessary to deliver exceptional results. We have successfully completed numerous new home construction projects, earning a reputation for reliability and excellence.' },
      { icon: 'layers', title: 'Comprehensive Services', text: 'As a full-service new home construction company, we handle every aspect of your project, from design and planning to construction and final inspections. Our comprehensive services ensure a seamless and stress-free experience, allowing you to focus on enjoying your new home.' },
      { icon: 'pin', title: 'Local Expertise', text: 'As a locally-owned and operated company, we have a deep understanding of the local market and building regulations. Our local expertise allows us to navigate the permitting process efficiently and build homes that are perfectly suited to the local environment.' },
      { icon: 'shield', title: 'Warranty and Aftercare', text: 'We stand behind the quality of our work with comprehensive warranties and aftercare services. Our dedication to quality extends beyond the construction phase, ensuring that any issues are promptly addressed and that your home remains in excellent condition.' },
    ],
    solutionsTitle: 'Custom New Construction Homes',
    solutionsText:
      'Our custom new construction home designs start with your ideas. We take the time to understand your preferences and incorporate them into a comprehensive design plan. From the layout of the rooms to the choice of finishes, every detail is meticulously planned to create a home that is truly yours.',
    teamTitle: 'Our Expert Team for New Home Construction',
    teamText:
      'At Mr. & Mrs. Construction, we have developed a streamlined and efficient process to ensure your new home construction project is a success — one team for design, engineering coordination, permits and construction.',
    faqs: [
      { q: 'What is the typical timeline for new home construction?', a: 'The timeline for new home construction can vary depending on factors such as the complexity of the design, weather conditions, and permitting processes. Generally, the construction of a new home takes between 6 to 12 months from start to finish. We provide a detailed timeline during the planning phase to ensure you know what to expect.' },
      { q: 'What factors influence the cost of building a new home?', a: 'The cost of building a new home is influenced by several factors, including the size of the home, the complexity of the design, the materials used, and the location of the property. Additional features and customizations can also impact the overall cost. During our initial consultation, we provide a comprehensive estimate based on your specific requirements.' },
      { q: 'Can I customize the design of my new home?', a: 'Yes, customization is a key advantage of building a new home. Our team of architects and designers work closely with you to create a home that reflects your style and meets your unique needs. From layout and floor plans to finishes and fixtures, every aspect of your home can be tailored to your preferences.' },
      { q: 'How do you ensure the quality of construction?', a: 'At Mr. & Mrs. Construction, we prioritize quality and craftsmanship in every project. We use high-quality materials and employ experienced builders who adhere to the highest construction standards. Additionally, we conduct regular inspections and quality checks throughout the construction process to ensure your new home meets our stringent quality criteria.' },
      { q: 'What are the benefits of building a new home versus buying an existing one?', a: 'Building a new home offers several benefits, including the ability to customize the design, incorporate modern amenities, and ensure energy efficiency. New homes typically require less maintenance and repairs compared to older homes and can be built with the latest energy-efficient technologies, reducing utility costs and environmental impact.' },
    ],
    homeTeaser:
      'We are dedicated to turning your dream home into a reality. Whether you are planning a custom home on your own lot or a complete rebuild, we are here to provide you with exceptional service and craftsmanship.',
    homeImage: '2024/07/New-Home-Constructionn_3.jpg',
    cardImage: '2024/06/New-Home-Constructionn_2.webp',
    metaTitle: 'New Home Construction in Silicon Valley | Mr. & Mrs. Construction',
    metaDescription: `Licensed Silicon Valley custom home builder (CA Lic #1068849). Free 3D design preview. Full permit management. ${STD_CITIES}`,
    serviceType: 'New home construction',
  },
  {
    slug: 'hardscaping-landscaping',
    menu: 'Hardscaping & Landscaping',
    h1: 'Hardscaping & Landscaping',
    heroImage: '2024/05/Hardscaping-Landscaping_3.webp',
    subtitle: 'Expert Hardscaping & Landscaping Services',
    heroText:
      'At Mr. & Mrs. Construction, we specialize in transforming outdoor spaces with our expert hardscaping and landscaping remodeling services. Whether you’re looking to create a serene garden retreat or a functional outdoor entertainment area, our team is dedicated to bringing your vision to life with exceptional craftsmanship and attention to detail.',
    introTitle: 'Hardscape Construction',
    introText:
      'Our hardscape construction services are designed to enhance the beauty and functionality of your outdoor spaces. From patios and walkways to retaining walls and fire pits, we use the highest quality materials and techniques to create durable, stunning hardscape elements that complement your home’s exterior.',
    introImages: ['2024/03/Mr_Mrs_San-Jose_Pinewood-Dr_12_Print.webp', '2024/05/Mr_Mrs_San-Jose_Pinewood-Dr_16_Print.webp'],
    whyTitle: 'Why Choose Mr. & Mrs. Construction for Your Hardscaping & Landscaping?',
    cards: [
      { icon: 'award', title: 'Expertise and Dedication', text: 'At Mr. & Mrs. Construction, we pride ourselves on delivering high-quality hardscaping and landscaping services tailored to each client’s unique vision.' },
      { icon: 'shield', title: 'Quality Materials', text: 'We use only the best materials and employ skilled craftsmen to ensure that every element of your hardscaping and landscaping project is built to last and looks spectacular.' },
      { icon: 'pencil', title: 'Tailored Designs', text: 'Every project begins with understanding your specific needs and preferences. We offer customized designs that reflect your personal style and enhance your property’s natural beauty.' },
      { icon: 'pin', title: 'Local Knowledge and Experience', text: 'Our deep understanding of local climates, soil types, and plant species allows us to create sustainable and beautiful outdoor spaces that thrive in your environment.' },
      { icon: 'cube', title: 'Advanced Technology', text: 'We stay at the forefront of the latest industry trends and technologies. This allows us to offer you innovative solutions and advanced techniques that enhance the functionality and aesthetic appeal of your home.' },
      { icon: 'smile', title: 'Customer Satisfaction', text: 'Your satisfaction is our top priority. We maintain clear communication throughout the project, ensuring that your vision is realized to the fullest extent.' },
    ],
    solutionsTitle: 'Breathtaking Landscape Remodels Tailored to You',
    solutionsText:
      'Transform your yard into a picturesque haven with our landscape remodel services. We offer custom designs that incorporate plant selections, water features, and decorative elements to create a cohesive, beautiful landscape that complements your home.',
    teamTitle: 'Our Expert Team for Hardscaping & Landscaping',
    teamText:
      'Our hardscaping and landscaping remodeling services combine functionality and aesthetics to create outdoor spaces that are both practical and beautiful. Whether you need a complete redesign or specific upgrades, our team ensures every project is executed with precision and care.',
    faqs: [
      { q: 'What is hardscaping?', a: 'Hardscaping refers to the design and installation of non-living elements in your outdoor space, such as patios, walkways, retaining walls, fire features, and water features. These elements add structure, functionality, and aesthetic appeal to your landscape.' },
      { q: 'Why should I choose landscaping for my property?', a: 'Landscaping offers numerous benefits, including increased property value, extended outdoor living space, better organization and flow, reduced maintenance, and enhanced visual appeal. It allows you to create personalized and functional outdoor areas for relaxation and entertainment.' },
      { q: 'How do I know which hardscaping features are best for my property?', a: 'Our experienced hardscaping team will work closely with you to understand your preferences, budget, and the unique aspects of your property. We will provide expert recommendations and design options that suit your needs and complement your landscape.' },
      { q: 'How long does a landscaping project take to complete?', a: 'The duration of a landscaping project depends on its complexity and size. Our team will provide you with a detailed timeline during the initial consultation. We strive to complete projects efficiently while maintaining the highest quality standards.' },
      { q: 'Do you offer free consultations?', a: 'Yes, we offer free hardscaping consultations to discuss your ideas, assess your property, and provide you with a personalized quote. Contact us today to schedule your consultation and get started on your dream hardscape.' },
    ],
    homeTeaser:
      'Embrace the beauty of nature with our landscaping expertise. We create outdoor environments that evoke tranquility and joy, blending lush greenery with thoughtfully designed elements for an enchanting outdoor oasis.',
    homeImage: '2024/01/Landscaping-Hardscaping.webp',
    cardImage: '2024/05/Hardscaping-Landscaping_3.webp',
    metaTitle: 'Hardscaping & Landscaping in Silicon Valley | Mr. & Mrs. Construction',
    metaDescription: `Licensed Silicon Valley hardscaping & landscaping contractor (CA Lic #1068849). Patios, walkways, retaining walls and full yard remodels. ${STD_CITIES}`,
    serviceType: 'Hardscaping and landscaping',
  },
  {
    slug: '3d-design',
    menu: '3D Design',
    h1: '3D Design',
    heroImage: '2024/01/3d-design_01.jpg',
    subtitle: 'Transform Your Home with Professional Home 3D Design Services',
    heroText:
      'Welcome to our home 3D design service in Santa Clara, California, where we turn your dream home into a reality! Our expert team of designers and architects is passionate about creating captivating 3D designs that bring your visions to life.',
    introTitle: 'Enhanced Visualization and Planning',
    introText:
      '3D design provides a clear and realistic visualization of your project, enhancing the planning process and ensuring that all stakeholders have a unified understanding of the design. This clarity helps in identifying potential issues early and streamlines the approval process.',
    introImages: ['2024/05/3d_design_01.webp', '2024/05/3d_design_02.webp'],
    whyTitle: 'Why Choose Mr. & Mrs. Construction for Your 3D Design?',
    cards: [
      { icon: 'cube', title: 'Unparalleled Realism', text: 'Our 3D design technology allows us to create realistic representations of your future home. You’ll be amazed at how accurately you can visualize the layout, color schemes, and materials.' },
      { icon: 'target', title: 'Personalized Approach', text: 'We understand that each client’s needs and preferences are unique. Our team works closely with you to understand your vision, style, and requirements, ensuring a personalized 3D design that reflects your personality and taste.' },
      { icon: 'clock', title: 'Efficiency and Cost-Effectiveness', text: 'By using 3D design, we minimize the chances of costly design errors and changes during the construction phase. This efficiency saves both time and money, making your project smooth and cost-effective.' },
      { icon: 'chat', title: 'Transparent Communication', text: 'Throughout the design process, we maintain open communication with you, ensuring that your inputs and feedback are incorporated into the design.' },
      { icon: 'award', title: 'Expertise and Experience', text: 'Our team of skilled designers and architects brings years of experience to the table, ensuring that your 3D design is not only visually stunning but also structurally sound and feasible.' },
      { icon: 'smile', title: 'Client Satisfaction', text: 'Your satisfaction is our top priority. We are dedicated to delivering exceptional results, turning your dream project into a reality with precision and care.' },
    ],
    solutionsTitle: 'Detailed and Accurate 3D Models',
    solutionsText:
      'We create detailed 3D models that accurately represent your project. From floor plans and room layouts to intricate details like fixtures and finishes, our 3D models cover every aspect of your design. This comprehensive approach ensures that nothing is overlooked and that every element is meticulously planned.',
    teamTitle: 'Our Expert Team for 3D Design',
    teamText:
      'Our 3D design services facilitate an interactive design process, allowing you to collaborate closely with our team. You can explore different design options, make real-time adjustments, and see how changes impact the overall project. This level of interaction ensures that your vision is accurately captured and executed.',
    faqs: [
      { q: 'What is 3D design, and how does it benefit my project?', a: '3D design uses advanced software to create detailed, three-dimensional models of your project. This allows you to visualize the final outcome before construction begins, ensuring that all aspects of the design meet your expectations. It helps in making informed decisions, refining designs, and avoiding costly changes during the construction phase.' },
      { q: 'How long does the 3D design process take?', a: 'The timeline for the 3D design process varies depending on the complexity of the project and the level of detail required. Generally, it can take anywhere from a few days to a couple of weeks. During our initial consultation, we will provide a more accurate timeline based on your specific project needs.' },
      { q: 'Can I make changes to the design once the 3D model is created?', a: 'Yes, one of the key benefits of 3D design is the ability to make real-time adjustments. You can explore different design options and see how changes impact the overall project. We encourage collaboration and will work with you to refine the design until it meets your vision and requirements.' },
      { q: 'Is 3D design more expensive than traditional design methods?', a: 'While 3D design may have a higher upfront cost compared to traditional 2D drawings, it can save you money in the long run by reducing the likelihood of changes and rework during construction. The ability to visualize and adjust the design beforehand ensures a more efficient and cost-effective construction process, ultimately providing better value for your investment.' },
      { q: 'What if I need assistance with construction after the 3D design is complete?', a: 'We also offer construction and remodeling services, so you can rely on our experienced team to bring your 3D design to life.' },
    ],
    homeTeaser:
      'Before the first hammer strikes, see your vision come to life with our innovative home 3D design services. Our meticulous planning process allows you to explore different design possibilities, ensuring your satisfaction before construction begins.',
    homeImage: '2024/01/3d-design-1.jpg',
    cardImage: '2024/01/3d-design_01.jpg',
    metaTitle: '3D Home Design & Rendering | Mr. & Mrs. Construction',
    metaDescription: 'See your remodel before construction begins. Photorealistic 3D design included with your free consultation. Licensed Silicon Valley design-build contractor, CA Lic #1068849.',
    serviceType: '3D home design and rendering',
  },
];

// Order used in the top navigation (matches the WordPress menu)
export const NAV_SERVICE_ORDER = ['home-remodeling', 'kitchen-remodeling', 'bathroom-remodel', 'new-home-construction', 'room-addition', 'adu-construction', 'hardscaping-landscaping', '3d-design'];
// Order used on the homepage "Our Services" rows (matches the WordPress homepage)
export const HOME_SERVICE_ORDER = ['home-remodeling', 'kitchen-remodeling', 'bathroom-remodel', 'room-addition', 'adu-construction', 'new-home-construction', 'hardscaping-landscaping', '3d-design'];

export const bySlug = (slug: string) => SERVICES.find((s) => s.slug === slug)!;
export const ordered = (order: string[]) => order.map(bySlug);

// "Our Projects Process" (same six steps on every service page)
export const PROCESS = [
  { title: 'Consultation', text: 'We begin every project with an in-depth consultation to understand your vision, requirements, and budget.', image: '2024/03/Mr_Mrs_Palo-Alto_Parkside-Dr_2_Print.webp' },
  { title: 'Design and Planning', text: 'Our expert team collaborates to create a comprehensive design plan that aligns with your ideas and preferences.', image: '2024/01/3d_002.webp' },
  { title: 'Material Selection', text: 'We source the finest materials, prioritizing quality, sustainability, and aesthetics.', image: '2024/03/Mr_Mrs_Cupertino_Dolores-Ave_8_Print.webp' },
  { title: 'Construction Phase', text: 'Our skilled craftsmen diligently bring the design to life, ensuring precision and attention to detail at every step.', image: '2024/06/New-Home-Constructionn_3.webp' },
  { title: 'Quality Checks', text: 'Throughout the project, we conduct rigorous quality checks to maintain our commitment to excellence.', image: '2024/03/Mr_Mrs_San-Jose_Gold-Creek-Way_8_Print.webp' },
  { title: 'Completion', text: 'On successful completion, we present you with a transformed space that exceeds your expectations.', image: '2024/03/Mr_Mrs_Saratoga_Northampton-Dr_5_Print.webp' },
];
