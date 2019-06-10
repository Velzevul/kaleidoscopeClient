import React from 'react';
import styles from './App.module.scss';
import { connect } from 'react-redux';

import { logOut } from '../../store/effects';
import AuthPage from '../AuthPage/AuthPage';

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
          Trail to appear here
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
