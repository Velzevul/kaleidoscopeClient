import React from 'react';
import { connect } from 'react-redux';

import styles from './RelatedTrails.module.scss';
import RelatedTrail from '../RelatedTrail/RelatedTrail';

const RelatedTrails = ({
  showRelatedTrails,
  relatedTrails
}) => {
  if (showRelatedTrails) {
    if (relatedTrails.isFetching) {
      return (
        <div className={styles.layoutCenter}>
          <div className={styles.spinner}></div>
        </div>
      );
    } else if (relatedTrails.trails.length === 0) {
      return (
        <div className={styles.layoutCenter}>
          <div className={styles.emptyState}>
            Could not find trails with similar images
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.layoutComponent}>
          <div className={styles.header}>
            Trails with similar images
          </div>

          <div className={styles.body}>
            {relatedTrails.trails.map(t => 
              <RelatedTrail trail={t}></RelatedTrail>
            )}
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className={styles.layoutCenter}>
        <div className={styles.emptyState}>
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