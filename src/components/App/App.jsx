import React from 'react';
import styles from './App.module.scss';
import { connect } from 'react-redux';
import AuthPage from '../AuthPage/AuthPage'

class App extends React.Component {
  render() {
    if (!this.props.trail.user) {
      return (
        <AuthPage></AuthPage>
      );
    } else {
      return (
        <div class={styles.layout}>
          <div class={styles.sideHeader}>
            Your search trails
          </div>

          <div class={styles.sideBody}>
            Trail to appear here
          </div>

          <div class={styles.mainHeader}>
            Related search trails
          </div>

          <div class={styles.mainBody}>
            Related search trails to appear here
          </div>
        </div>
      );
    }
  }
}

export default connect(
  state => ({
    trail: state.trail
  })
)(App);
