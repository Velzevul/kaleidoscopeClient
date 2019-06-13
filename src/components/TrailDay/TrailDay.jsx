import React from 'react';
import moment from 'moment';

import styles from './TrailDay.module.scss';

import { DATE_FORMAT } from '../../constants';

import TrailQuery from '../TrailQuery/TrailQuery';

const TrailDay = ({
  queries
}) => {
  return (
    <div className={styles.component}>
      <div className={styles.day}>
        {moment(queries[0].timestamp).format(DATE_FORMAT)}
      </div>

      {queries.map(q => 
        <TrailQuery query={q}
                    key={q.id}>
        </TrailQuery>
      )}
    </div>
  );
}

export default TrailDay;