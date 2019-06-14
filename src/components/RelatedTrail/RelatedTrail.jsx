import React from 'react';

import styles from './RelatedTrail.module.scss';

const RelatedTrail = () => {
  return (
    <div className={styles.component}>
      <div className={styles.userName}>
        trail name
      </div>

      <div className={styles.card}></div>
    </div>
  );
};

export default RelatedTrail;