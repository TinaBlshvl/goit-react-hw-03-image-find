import css from '../styles/Styles.module.css';
import PropTypes from 'prop-types';
// import { useLayoutEffect } from 'react';

// import { ImageGalleryItem } from 'components/ImageGallaryItem/ImageGallaryItem';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items, openModal }) => {
  return (
    <ul
      className={css.imageGallery}
      onClick={e => {
        openModal(e.target);
      }}
    >
      {/* {items.map(item => (
        <li key={item.id}>
          return(
          <ImageGalleryItem key={item.id} item={item} />
          );
        </li>
      ))} */}

      {items.map(item => {
        return <ImageGalleryItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
