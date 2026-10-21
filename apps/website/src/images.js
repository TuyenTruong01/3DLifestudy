// Set VITE_IMAGE_BASE_URL to a CDN origin later (for example, https://cdn.example.com/images).
// With no variable configured, images are served from the local public/images folder.
const configuredBase = import.meta.env.VITE_IMAGE_BASE_URL?.replace(/\/$/, '');
const localBase = `${import.meta.env.BASE_URL}images`;
const imagePath = (fileName) => `${configuredBase || localBase}/${fileName}`;

export const images = {
  fallback: imagePath('course-home.png'),
  hero: imagePath('hero-house-hotspots.png'),
  designProcess: {
    drawing: imagePath('design-furniture.png'),
    unfolding: imagePath('design-unfolding.png'),
    cnc: imagePath('design-cnc.png'),
    assembly: imagePath('design-assembly.png'),
  },
  courses: {
    1: imagePath('course-home.png'),
    2: imagePath('course-appliances.png'),
    3: imagePath('course-production.png'),
    4: imagePath('course-furniture-materials.png'),
    5: imagePath('course-appliance-repair.png'),
    6: imagePath('course-factory-technology.png'),
    7: imagePath('course-interior-design.png'),
  },
};

export const courseImage = (number) => images.courses[number] || images.fallback;
export const designProcessImage = (id) => images.designProcess[id] || images.fallback;

export function useFallbackImage(event) {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied) return;
  image.dataset.fallbackApplied = 'true';
  image.src = images.fallback;
}
