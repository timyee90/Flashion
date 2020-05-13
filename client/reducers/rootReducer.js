import { combineReducers } from 'redux';
import ratingsReducer from './ratingsReducer.js';
import reviewsReducer from './reviewsReducer.js';

export default combineReducers({
  ratings: ratingsReducer,
  reviews: reviewsReducer,
  /* insert reducers */
});
