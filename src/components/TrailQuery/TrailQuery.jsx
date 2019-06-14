import React from 'react';
import moment from 'moment';

import styles from './TrailQuery.module.scss';
import { TIME_FORMAT } from '../../constants';
import QueryImagesRow from '../QueryImagesRow/QueryImagesRow';

const TrailQuery = ({
  query
}) => {
  const nCols = 3;
  const nRows = Math.ceil(query.images.length / nCols);
  let imageRows = [];
  
  for (let i = 0; i < nRows; ++i) {
    imageRows = [...imageRows, query.images.slice(nCols*i, nCols*(i+1))];
  }

  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <div className={styles.timestamp}>
          {moment(query.timestamp).format(TIME_FORMAT)}
        </div>

        <div className={styles.query}>
          {query.q}
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