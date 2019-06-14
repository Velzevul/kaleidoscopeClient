import React from 'react';
import { connect } from 'react-redux';

import styles from './UserTrailImagesRow.module.scss';

import UserTrailImage from '../UserTrailImage/UserTrailImage';
import UserTrailImagePreview from '../UserTrailImagePreview/UserTrailImagePreview';

const UserTrailImagesRow = ({
  images,
  activeImageId
}) => {
  const selectedImage = images.find(i => i._id === activeImageId);
  const selectedImageIndex = images.indexOf(selectedImage);

  return (
    <div>
      <div className={styles.images}>
        {images.map(i => 
          <UserTrailImage image={i} 
                      key={i._id}>
          </UserTrailImage>
        )}
      </div>

      {selectedImage
        ? <UserTrailImagePreview image={selectedImage}
                        index={selectedImageIndex}>
          </UserTrailImagePreview>
        : null
      }
    </div>
  );
}

export default connect(
  state => ({
    activeImageId: state.ui.activeImageId
  })
)(UserTrailImagesRow);