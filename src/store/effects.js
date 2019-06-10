import {
  requestFetchTrail,
  confirmFetchTrail,
  rejectFetchTrail
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
          } else {
            console.error(`Cannot authenticate user ${id}. Message: ${response.data.message}`);
            dispatch(rejectFetchTrail(response.data.message));
          }
        },
        () => {
          dispatch(rejectFetchTrail('server error'));
          console.error('server error');
        }
      );
  };
};