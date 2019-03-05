import {
  requestLoadPrimaryTrail,
  confirmLoadPrimaryTrail,
  confirmExtendPrimaryTrail,
  requestLoadRelatedTrails,
  confirmLoadRelatedTrails
} from './actionCreators';


export const laodPrimaryTrail = (id) => {
  return (dispatch) => {
    dispatch(requestLoadPrimaryTrail(id));

    return api.getTrail(id)
      .then(
        response => dispatch(confirmLoadPrimaryTrail(response.payload)),
        error => console.error(`failed to load trail with id ${id}. Error message: ${error.message}`)
      );
  };
};

export const extendPrimaryTrail = (payload) => {
  return (dispatch, getState) => {
    const primaryTrailId = getState().primaryTrail.id;

    return api.extendTrail(primaryTrailId, payload)
      .then(
        response => dispatch(confirmExtendPrimaryTrail(response.payload)),
        error => console.error(`failed to extend tail with id ${primaryTrailId}. Error message: ${error.message}`)
      );
  };
};


export const loadRelatedTrails = (query) => {
  return (dispatch, getState) => {
    const primaryTrailId = getState().primaryTrail.id;

    dispatch(requestLoadRelatedTrails());

    return api.getTrails({query, blacklist: [primaryTrailId]})
      .then(
        response => dispatch(confirmLoadRelatedTrails(response.payload)),
        error => console.error(`failed to load related trails for query ${query}. Error message: ${error.message}`)
      );
  };
};