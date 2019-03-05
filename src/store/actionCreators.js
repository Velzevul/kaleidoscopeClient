import * as actions from './actions';


export const requestLoadPrimaryTrail = (id) => ({
  type: actions.REQUEST_LOAD_PRIMARY_TRAIL,
  id
});

export const confirmLoadPrimaryTrail = ({dates, images, queries}) => ({
  type: actions.CONFIRM_LOAD_PRIMARY_TRAIL,
  dates,
  images,
  queries
});

export const confirmExtendPrimaryTrail = ({dates, images, queries}) => ({
  type: actions.CONFIRM_EXTEND_PRIMARY_TRAIL,
  dates,
  images,
  queries
});


export const requestLoadRelatedTrails = () => ({
  type: actions.REQUEST_LOAD_RELATED_TRAILS
});

export const confirmLoadRelatedTrails = ({trails}) => ({
  type: actions.CONFIRM_LOAD_RELATED_TRAILS,
  trails
});