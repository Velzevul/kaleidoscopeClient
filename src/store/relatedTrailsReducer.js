import { 
  REQUEST_FETCH_RELATED_TRAILS, 
  CONFIRM_FETCH_RELATED_TRAILS,
  REJECT_FETCH_RELATED_TRAILS,
  CLEAR_RELATED_TRAILS
} from './actions';
import initialState from './initialState';

const relatedTrailsReducer = (
  state = initialState.relatedTrails, 
  action
) => {
  switch (action.type) {
    case REQUEST_FETCH_RELATED_TRAILS:
      return {
        ...state,
        isFetching: true
      };
    case CONFIRM_FETCH_RELATED_TRAILS:
      return {
        ...state,
        isFetching: false,
        trails: action.trails
      };
    case REJECT_FETCH_RELATED_TRAILS:
      return {
        ...state,
        isFetching: false
      };
    case CLEAR_RELATED_TRAILS:
      return {
        ...initialState.relatedTails
      };
    default:
      return state;
  }
};

export default relatedTrailsReducer;