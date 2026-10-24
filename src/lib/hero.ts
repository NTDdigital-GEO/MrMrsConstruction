// Hero poster: first frame of Hero_p2.mp4, self-hosted and resized at build time (src/assets/hero-poster.jpg).
// Phones only ever download this image (not the 3.2 MB video); it is the LCP element, so it is also preloaded.
import { getImage } from 'astro:assets';
import poster from '../assets/hero-poster.jpg';

export async function heroPoster() {
  const large = await getImage({ src: poster, width: 1920, format: 'webp', quality: 65 });
  const small = await getImage({ src: poster, width: 960, format: 'webp', quality: 62 });
  return {
    src: small.src,
    large: large.src,
    srcset: `${small.src} 960w, ${large.src} 1920w`,
    sizes: '100vw',
    width: 1920,
    height: 800,
  };
}
