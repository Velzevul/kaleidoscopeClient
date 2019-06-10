import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import trailReducer from './trailReducer';

const middleware = [ReduxThunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middleware.push(logger);
  console.log('adding logger');
}

const rootReducer = combineReducers({
  trail: trailReducer
});

const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;