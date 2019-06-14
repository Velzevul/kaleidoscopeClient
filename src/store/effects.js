import * as actionCreators from './actionCreators';
import * as api from '../api/server';


export const fetchTrail = (id) => {
  return (dispatch) => {
    dispatch(actionCreators.requestFetchTrail(id));

    return api.getTrail(id)
      .then(
        response => {
          if (response.success) {
            dispatch(actionCreators.confirmFetchTrail(response.data.trail));
            localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            console.error(`Cannot authenticate user ${id}. Message: ${response.data.message}`);
            dispatch(actionCreators.rejectFetchTrail());
            localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  };
};

export const logOut = () => {
  return (dispatch) => {
    localStorage.removeItem('kaleidoscopeUser');
    dispatch(actionCreators.clearTrail());
  }
}

export const fetchRelatedTrails = (imageId) => {
  return dispatch => {
    dispatch(actionCreators.setActiveImage(imageId));
    
    if (imageId === null) {
      dispatch(actionCreators.clearRelatedTrails());
    } else {
      dispatch(actionCreators.requestFetchRelatedTrails());

      setTimeout(() => {
        dispatch(actionCreators.confirmFetchRelatedTrails([]));
      }, 2000);
    }
  }
}