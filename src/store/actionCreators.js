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

export const rejectFetchTrail = () => ({
  type: actions.REJECT_FETCH_TRAIL
});

export const clearTrail = () => ({
  type: actions.CLEAR_TRAIL
});



export const setActiveImage = (imageId) => ({
  type: actions.SET_ACTIVE_IMAGE,
  imageId
});



export const requestFetchRelatedTrails = (imageId) => ({
  type: actions.REQUEST_FETCH_RELATED_TRAILS,
  imageId
});

export const confirmFetchRelatedTrails = (trails) => ({
  type: actions.CONFIRM_FETCH_RELATED_TRAILS,
  trails
});

export const rejectFetchRelatdTrails = () => ({
  type: actions.REJECT_FETCH_RELATED_TRAILS
});

export const clearRelatedTrails = () => ({
  type: actions.CLEAR_RELATED_TRAILS
});