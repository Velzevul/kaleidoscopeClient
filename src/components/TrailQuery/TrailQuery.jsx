import React from 'react';
import moment from 'moment';

import styles from './TrailQuery.module.scss';

import QueryImagesRow from '../QueryImagesRow/QueryImagesRow';

const TrailQuery = ({
  query
}) => {
  const timeFormat = 'H:mm'
  const imagesPerRow = 3;
  const nRows = Math.ceil(query.images.length/imagesPerRow);
  
  let imageRows = [];

  for (let i = 0; i < nRows; ++i) {
    imageRows = [...imageRows, query.images.slice(imagesPerRow*i, imagesPerRow*(i+1))];
  }

  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <div className={styles.query}>
          {query.q}
        </div>

        <div className={styles.timestamp}>
          {moment(query.timestamp).format(timeFormat)}
        </div>
      </div>
      
      {imageRows.map((row, index) => 
        <QueryImagesRow images={row} 
                        key={index}>
        </QueryImagesRow>
      )}
    </div>
  );
};

export default TrailQuery;