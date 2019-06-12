import React from 'react';
import { connect } from 'react-redux';

import styles from './App.module.scss';

import { logOut } from '../../store/effects';

import AuthPage from '../AuthPage/AuthPage';
import TrailQuery from '../TrailQuery/TrailQuery';

const App = ({
  trail, 
  logOut
}) => {
  if (trail.user) {
    return (
      <div className={styles.layout}>
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
          {trail.queries.map(q => 
            <TrailQuery query={q}
                        key={q.id}>
            </TrailQuery>
          )}
        </div>

        <div className={styles.mainFull}>
          
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
