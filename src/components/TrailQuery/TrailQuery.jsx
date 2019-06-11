import React from 'react';
import moment from 'moment';
import styles from './TrailQuery.module.scss';
import { TIME_FORMAT } from '../../constants';

const TrailQuery = ({
  query
}) => {
  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <div className={styles.query}>
          {query.q}
        </div>

        <div className={styles.timestamp}>
          {moment(query.timestamp).format(TIME_FORMAT)}
        </div>
      </div>
      
      <div className={styles.images}>
        {query.images.map((i, index) => 
          <button type="button"
                  key={index}
                  onClick={() => console.log('click')}
                  className={styles.imageButton}
                  style={{
                    backgroundImage: `url(${i.thumbSrc})`
                  }}>
            <img src={i.thumbSrc} className={styles.image}/>
          </button>
        )}
      </div>
    </div>
  );
};

export default TrailQuery;