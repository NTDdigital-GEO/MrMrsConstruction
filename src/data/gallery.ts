// Projects gallery (/gallery/{slug}/) — 21 projects, images exactly as on WordPress (Oct 2026).
// Order = homepage grid order.

export interface Project { slug: string; title: string; city: string; thumb: string; images: string[] }

const P = (slug: string, title: string, city: string, thumb: string, images: string[]): Project => ({ slug, title, city, thumb, images });

export const GALLERY: Project[] = [
  P('sunnyvale-project-iv', 'Sunnyvale Project IV', 'Sunnyvale', '2025/01/Sunnyvale_Lime-Dr_PRINT-23.webp',
    [5, 27, 19, 13, 10, 17, 29, 26, 9, 21, 15, 6, 7, 23, 18, 2, 24, 28].map((n) => `2025/01/Sunnyvale_Lime-Dr_PRINT-${n}.webp`)),
  P('hillsborough-project-i', 'Hillsborough Project I', 'Hillsborough', '2024/12/Hillsborough-Project-I.jpg',
    [25, 12, 24, 17, 3, 27, 16, 4, 8, 19, 10, 6, 14, 20, 9, 7, 22, 13, 26, 2, 21, 5, 1, 28, 11].map((n) => `2024/12/Hillsborough_La-Cumbre-Rd_PRINT-${n}.webp`)),
  P('san-jose-project-v', 'San Jose Project V', 'San Jose', '2024/11/San-Jose_Bark-Ln_PRINT-33.webp',
    [19, 33, 26, 12, 15, 14, 25, 18, 24, 30, 31, 28, 21, 22, 5, 16, 6, 32, 23, 17, 27, 29, 2, 20, 4, 7].map((n) => `2024/11/San-Jose_Bark-Ln_PRINT-${n}.webp`)),
  P('san-joseproject-2', 'San Jose Project II', 'San Jose', '2024/03/Mr_Mrs_San-Jose_Gold-Creek-Way1_Print.webp',
    ['_5_Print-1', '_17_Print-1', '_13_Print', '1_Print', '_14_Print', '_5_Print', '_6_Print', '_15_Print', '_18_Print', '_8_Print', '_9_Print', '_4_Print', '_3_Print', '_16_Print', '_17_Print', '_7_Print', '_10_Print', '_12_Print', '_2_Print', '_11_Print'].map((s) => `2024/03/Mr_Mrs_San-Jose_Gold-Creek-Way${s}.webp`)),
  P('palo-alto-project-1', 'Palo Alto Project I', 'Palo Alto', '2024/03/Mr_Mrs_Palo-Alto_Parkside-Dr_14_Print.webp',
    [6, 23, 16, 20, 4, 8, 14, 2, 11, 3, 21, 9, 7, 15, 22, 18, 17, 10, 12, 13, 5, 19, 1].map((n) => `2024/03/Mr_Mrs_Palo-Alto_Parkside-Dr_${n}_Print.webp`)),
  P('sunnyvale-project-1', 'Sunnyvale Project I', 'Sunnyvale', '2024/03/Mr_Mrs_1_Large.webp',
    [4, 5, 1, 3, 2, 6].map((n) => `2024/03/Mr_Mrs_${n}_Large.webp`)),
  P('sunnyvale-project-2', 'Sunnyvale Project II', 'Sunnyvale', '2024/03/Mr_Mrs_Santa-Clara_Lansford-Pl_3_Print.webp',
    [14, 4, 15, 9, 8, 12, 7, 3, 11, 6, 1, 13, 5, 10, 2].map((n) => `2024/03/Mr_Mrs_Santa-Clara_Lansford-Pl_${n}_Print.webp`)),
  P('foster-city-project-1', 'Foster City Project I', 'Foster City', '2024/03/Mr_Mrs_Foster-City_Shearwater-Isle_2_Print.webp',
    [2, 4, 7, 1, 8, 6, 5, 3].map((n) => `2024/03/Mr_Mrs_Foster-City_Shearwater-Isle_${n}_Print.webp`)),
  P('saratoga-project-1', 'Saratoga Project I', 'Saratoga', '2024/03/Mr_Mrs_Saratoga_Northampton-Dr_5_Print.webp',
    [5, 12, 15, 17, 4, 14, 21, 19, 1, 2, 11, 20, 3].map((n) => `2024/03/Mr_Mrs_Saratoga_Northampton-Dr_${n}_Print.webp`)),
  P('san-jose-project-4', 'San Jose Project IV', 'San Jose', '2024/03/Mr_Mrs_San-Jose_Maxwell-Way_6_Large.webp',
    [8, 9, 7, 3, 14, 5, 11, 1, 13, 4, 6, 2, 12, 10, 15].map((n) => `2024/03/Mr_Mrs_San-Jose_Maxwell-Way_${n}_Large.webp`)),
  P('los-altos-project-1', 'Los Altos Project I', 'Los Altos', '2024/03/Mr_Mrs_Los-Gatos_Old-Adobe_1_Large.webp',
    ['1', '2-CROP', '2', '6', '3', '4', '5'].map((n) => `2024/03/Mr_Mrs_Los-Gatos_Old-Adobe_${n}_Large.webp`)),
  P('sunnyvale-project-3', 'Sunnyvale Project III', 'Sunnyvale', '2024/03/Mr_Mrs_Sunnyvale_Kimberly-Dr_3_Print.webp',
    [3, 2, 5, 4, 1].map((n) => `2024/03/Mr_Mrs_Sunnyvale_Kimberly-Dr_${n}_Print.webp`)),
  P('burlingame-project-1', 'Burlingame Project I', 'Burlingame', '2024/03/Mr_Mrs_Burlingame_Albemarle-Way_2_Large.webp',
    [1, 2, 4, 3].map((n) => `2024/03/Mr_Mrs_Burlingame_Albemarle-Way_${n}_Large.webp`)),
  P('cupertino-project-1', 'Cupertino Project I', 'Cupertino', '2024/03/Mr_Mrs_Cupertino_Dolores-Ave_12_Print.webp',
    [14, 3, 8, 2, 1, 5, 6, 10, 13, 12, 15, 19, 9, 16, 4, 18, 11, 7, 17].map((n) => `2024/03/Mr_Mrs_Cupertino_Dolores-Ave_${n}_Print.webp`)),
  P('los-gatos-project-1', 'Los Gatos Project I', 'Los Gatos', '2024/03/Mr_Mrs_Los-Gatos_Lilac-Ln_9_Print.webp',
    [6, 19, 3, 18, 15, 16, 4, 2, 1, 12, 10, 9, 13, 17, 7, 8, 14].map((n) => `2024/03/Mr_Mrs_Los-Gatos_Lilac-Ln_${n}_Print.webp`)),
  P('los-gatos-project-2', 'Los Gatos Project II', 'Los Gatos', '2024/03/Mr_Mrs_Los-Gatos_Lynn-Ave_4_Fea.webp',
    [3, 4, 2, 1].map((n) => `2024/03/Mr_Mrs_Los-Gatos_Lynn-Ave_${n}_Web.webp`)),
  P('san-jose-project-1', 'San Jose Project I', 'San Jose', '2024/03/Mr_Mrs_San-Jose_Parkside-Ave_11_Print.webp',
    [3, 9, 7, 10, 8, 6, 5, 2, 11, 4, 1].map((n) => `2024/03/Mr_Mrs_San-Jose_Parkside-Ave_${n}_Print.webp`)),
  P('san-mateo-project-1', 'San Mateo Project I', 'San Mateo', '2024/03/Mr_Mrs_San-Mateo_Laurel-Hill-Dr_3_Fea.webp',
    ['San-Mateo_Laurel-Hill-Dr_5_Web', 'San-Mateo_Laurel-Hill-Dr_3_Web', 'San-Mateo_Laurel-Hill-Dr_2_Web', 'San-Mateo_Laurel-Hill-Dr_4_Web', 'San-Jose_Parkside-Ave_12_Print', 'San-Mateo_Laurel-Hill-Dr_6_Web', 'San-Mateo_Laurel-Hill-Dr_7_Print'].map((s) => `2024/03/Mr_Mrs_${s}.webp`)),
  P('redwood-city-project-1-2', 'Redwood City Project II', 'Redwood City', '2024/03/Mr_Mrs_Redwood-City_Harbor-Colony_8.webp',
    [11, 9, 6, 7, 5, 3, 10, 2, 8, 12, 4, 1].map((n) => `2024/03/Mr_Mrs_Redwood-City_Harbor-Colony_${n}.webp`)),
  P('redwood-city-project-1', 'Redwood City Project I', 'Redwood City', '2024/03/Mr_Mrs_Redwood-City_Monaco-Dr_1_Web.webp',
    [5, 2, 4, 1, 3].map((n) => `2024/03/Mr_Mrs_Redwood-City_Monaco-Dr_${n}_Web.webp`)),
  P('san-jose-project-3', 'San Jose Project III', 'San Jose', '2024/03/Mr_Mrs_San-Jose_Pinewood-Dr_12_Print.webp',
    [2, 1, 6, 13, 10, 14, 3, 15, 5, 12, 4, 11, 9, 16, 7, 8].map((n) => `2024/03/Mr_Mrs_San-Jose_Pinewood-Dr_${n}_Print.webp`)),
];

export const projectsInCity = (city: string) => GALLERY.filter((p) => p.city === city);
