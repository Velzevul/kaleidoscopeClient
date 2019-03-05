import {
  REQUEST_LOAD_RELATED_TRAILS,
  CONFIRM_LOAD_RELATED_TRAILS
} from './actions';

const initialState = {
  isFetching: false,
  trails: []
};

export const relatedTrailsReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case REQUEST_LOAD_RELATED_TRAILS:
      return {
        ...state,
        isFetching: true
      };
    case CONFIRM_LOAD_RELATED_TRAILS:
      return {
        isFetching: false,
        trails: action.trails
      };
    default:
      return state;
  }
}