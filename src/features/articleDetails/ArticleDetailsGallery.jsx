import { Gallery } from 'react-photoswipe-gallery';
import GalleryImg from '../../ui/GalleryImg';
// import GalleryImg from "./GalleryImg";

function ArticleDetailsGallery({ images }) {
  console.log(images);
  return (
    <Gallery>
      {images.map((image) => (
        <GalleryImg link={image.photo} key={image.id} />
      ))}
    </Gallery>
  );
}

export default ArticleDetailsGallery;
