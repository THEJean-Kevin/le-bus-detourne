import type { ImageMetadata } from 'astro';
 
// Charge toutes les images de src/assets/images au moment du build.
const images = import.meta.glob<ImageMetadata>(
  '/src/assets/images/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true, import: 'default' }
);
 
/**
 * Convertit un chemin des fichiers de données (ex. "/images/plats/tartine.jpg")
 * en image optimisable par <Image>.
 * L'arborescence de src/assets/images est identique à l'ancien public/images.
 */
export function resolveImage(path: string): ImageMetadata {
  const key = path.replace(/^\/?images\//, '/src/assets/images/');
  const image = images[key];
 
  if (!image) {
    throw new Error(
      `Image introuvable : "${path}". Elle doit être dans ${key} ` +
        `(attention aux majuscules/minuscules : le build GitHub Actions les distingue).`
    );
  }
  return image;
}