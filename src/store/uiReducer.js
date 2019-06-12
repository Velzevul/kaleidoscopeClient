import { 
  SET_ACTIVE_IMAGE
} from './actions';
import initialState from './initialState';

const uiReducer = (
  state = initialState.ui, 
  action
) => {
  switch (action.type) {
    case SET_ACTIVE_IMAGE:
      return {
        ...state,
        activeImageId: action.imageId
      };
    default:
      return state;
  }
};

export default uiReducer;