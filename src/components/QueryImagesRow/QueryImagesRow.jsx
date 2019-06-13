import React from 'react';
import { connect } from 'react-redux';

import styles from './QueryImagesRow.module.scss';

import QueryImage from '../QueryImage/QueryImage';
import ImagePreview from '../ImagePreview/ImagePreview';

const QueryImagesRow = ({
  images,
  activeImageId
}) => {
  const selectedImage = images.find(i => i._id === activeImageId);
  const selectedImageIndex = images.indexOf(selectedImage);

  return (
    <div>
      <div className={styles.images}>
        {images.map(i => 
          <QueryImage image={i} 
                      key={i._id}>
          </QueryImage>
        )}
      </div>

      {selectedImage
        ? <ImagePreview image={selectedImage}
                        index={selectedImageIndex}>
          </ImagePreview>
        : null
      }
    </div>
  );
}

export default connect(
  state => ({
    activeImageId: state.ui.activeImageId
  })
)(QueryImagesRow);