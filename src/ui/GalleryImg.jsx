import { Item } from 'react-photoswipe-gallery';
function GalleryImg({ link }) {
  return (
    <Item original={link} thumbnail={link}>
      {({ ref, open }) => <img ref={ref} onClick={open} src={link} />}
    </Item>
  );
}

export default GalleryImg;
