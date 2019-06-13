import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import styles from './App.module.scss';

import { DATE_FORMAT } from '../../constants';
import { logOut } from '../../store/effects';

import AuthPage from '../AuthPage/AuthPage';
import TrailDay from '../TrailDay/TrailDay';

const getLast = arr => arr[arr.length - 1];
const allButLast = arr => arr.slice(0, arr.length - 1);

const App = ({
  trail, 
  logOut
}) => {
  if (trail.user) {
    const queriesByDay = trail.queries.reduce((cumulative, nextQuery) => {
      const nextDate = moment(nextQuery.timestamp).format(DATE_FORMAT);
      
      if (cumulative.length) {
        const prevDate = moment(getLast(getLast(cumulative)).timestamp).format(DATE_FORMAT);
        console.log(prevDate, nextDate);

        if (nextDate === prevDate) {
          return [...allButLast(cumulative), [...getLast(cumulative), nextQuery]];
        } else {
          return [...cumulative, [nextQuery]];
        }
      } else {
        console.log('...', nextDate);

        return [[nextQuery]];
      }
    }, []);

    console.log(queriesByDay);

    return (
      <div className={styles.component}>
        <div className={styles.sideHeader}>
          <div className={styles.sideHeaderLeft}>
            {trail.user}
          </div>

          <div className={styles.sideHeaderRight}>
            <button type="button" 
                    className={styles.logOutButton}
                    onClick={logOut}>Log out</button>
          </div>
        </div>

        <div className={styles.sideBody}>
          {queriesByDay.map(dayQueries => 
            <TrailDay queries={dayQueries}></TrailDay>
          )}
        </div>

        <div className={styles.main}>
          
        </div>
      </div>
    );
  } else {
    return (
      <AuthPage></AuthPage>
    );
  }
}

export default connect(
  state => ({
    trail: state.trail
  }),
  dispatch => ({
    logOut: () => dispatch(logOut())
  })
)(App);
