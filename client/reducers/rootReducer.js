import { combineReducers } from 'redux';
import ratingsReducer from './ratingsReducer.js';
import reviewsReducer from './reviewsReducer.js';
import qaReducer from './qaReducer.js';
import ProductOverviewReducer from './ProductOverviewReducer.js';

export default combineReducers({
  /* insert reducers */
  ratings: ratingsReducer,
  reviews: reviewsReducer,
  qa: qaReducer,
  productInfo: ProductOverviewReducer,
});
