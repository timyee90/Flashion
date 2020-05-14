import { combineReducers } from 'redux';
import ratingsReducer from './ratingsReducer.js';
import reviewsReducer from './reviewsReducer.js';
import qaReducer from './qaReducer.js';
import ProductOverviewReducer from './ProductOverviewReducer.js';
import appReducer from './appReducer.js';

export default combineReducers({
  app: appReducer,
  ratings: ratingsReducer,
  reviews: reviewsReducer,
  qa: qaReducer,
  productInfo: ProductOverviewReducer,
});
