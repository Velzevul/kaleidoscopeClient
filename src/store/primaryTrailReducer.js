import {
  REQUEST_LOAD_PRIMARY_TRAIL,
  CONFIRM_LOAD_PRIMARY_TRAIL,
  CONFIRM_EXTEND_PRIMARY_TRAIL
} from './actions';

export const primaryTrailReducer = (
  state = {
    isFetching: false,
    id: null,
    dates: [],
    queries: [],
    images: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_LOAD_PRIMARY_TRAIL:
      return {
        ...state, 
        id: action.id,
        isFetching: true
      };
    case CONFIRM_LOAD_PRIMARY_TRAIL:
      return {
        ...state,
        isFetching: false,
        dates: action.dates,
        queries: action.queries,
        images: action.images
      }
    case CONFIRM_EXTEND_PRIMARY_TRAIL:
      return {
        ...state,
        dates: [...action.dates, ...state.dates],
        queries: [...action.queries, ...state.queries],
        images: [...action.images, ...state.images]
      };
    default:
      return state;
  }
};