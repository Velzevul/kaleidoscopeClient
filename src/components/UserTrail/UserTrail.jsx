import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import styles from './UserTrail.module.scss';
import { DATE_FORMAT } from '../../constants';
import TrailQuery from '../TrailQuery/TrailQuery';

const UserTrail = ({
  queries
}) => {
  const elements = [];

  queries.forEach((query, index) => {
    const currentQueryDate = moment(query.timestamp).format(DATE_FORMAT);
    const previousQueryDate = index > 0 ? moment(queries[index - 1].timestamp).format(DATE_FORMAT) : null;

    if (currentQueryDate !== previousQueryDate) {
      elements.push(
        <div className={styles.dateDelimiter}>
          {currentQueryDate}
        </div>
      );
    }

    elements.push(
      <TrailQuery query={query}></TrailQuery>
    );
  });

  return (
    <div className={styles.component}>
      {elements}
    </div>
  );
}

export default connect(
  state => ({
    queries: state.trail.queries
  })
)(UserTrail);