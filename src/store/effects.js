import {
  requestFetchTrail,
  confirmFetchTrail,
  rejectFetchTrail,
  clearTrail
} from './actionCreators';

import * as api from '../api/server';


export const fetchTrail = (id) => {
  return (dispatch) => {
    dispatch(requestFetchTrail(id));

    return api.getTrail(id)
      .then(
        response => {
          if (response.success) {
            dispatch(confirmFetchTrail(response.data.trail));
            localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            console.error(`Cannot authenticate user ${id}. Message: ${response.data.message}`);
            dispatch(rejectFetchTrail());
            localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  };
};

export const logOut = () => {
  return (dispatch) => {
    localStorage.removeItem('kaleidoscopeUser');
    dispatch(clearTrail());
  }
}