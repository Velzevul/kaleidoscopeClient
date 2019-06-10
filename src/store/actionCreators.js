import * as actions from './actions';


export const requestFetchTrail = (user) => ({
  type: actions.REQUEST_FETCH_TRAIL,
  user
});

export const confirmFetchTrail = ({id, user, queries}) => ({
  type: actions.CONFIRM_FETCH_TRAIL,
  id,
  user,
  queries
});

export const rejectFetchTrail = (message) => ({
  type: actions.REJECT_FETCH_TRAIL,
  message
});