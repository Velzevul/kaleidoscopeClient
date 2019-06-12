import React from 'react';
import { connect } from 'react-redux';

import styles from './QueryImagesRow.module.scss';

import QueryImage from '../QueryImage/QueryImage';
import ImagePreview from '../ImagePreview/ImagePreview';

const QueryImagesRow = ({
  images,
  activeImageId
}) => {
  const imagePreview = images.find(i => i._id === activeImageId);
  const imagePreviewIndex = images.indexOf(imagePreview);

  return (
    <div>
      <div className={styles.images}>
        {images.map(i => 
          <QueryImage image={i} 
                      key={i._id}>
          </QueryImage>
        )}
      </div>

      {imagePreview
        ? <ImagePreview image={imagePreview}
                        index={imagePreviewIndex}>
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