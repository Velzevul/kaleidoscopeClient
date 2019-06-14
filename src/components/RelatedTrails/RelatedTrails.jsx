import React from 'react';
import { connect } from 'react-redux';

import styles from './RelatedTrails.module.scss';

const RelatedTrails = ({
  showRelatedTrails,
  relatedTrails
}) => {
  if (showRelatedTrails) {
    if (relatedTrails.isFetching) {
      return (
        <div className={styles.componentCenter}>
          <div className={styles.spinner}></div>
        </div>
      );
    } else {
      return (
        <div className={styles.component}>
          show trails here
        </div>
      );
    }
  } else {
    return (
      <div className={styles.componentCenter}>
        <div className={styles.emptyStateTitle}>
          Click on an image to find similar trails
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    showRelatedTrails: state.ui.activeImageId !== null,
    relatedTrails: state.relatedTrails
  })
)(RelatedTrails);