import { combineReducers } from 'redux';
import ratingsReducer from './ratingsReducer.js';
import reviewsReducer from './reviewsReducer.js';
import qaReducer from './qaReducer.js';
import outfitReducer from './outfitReducer.js';
import relatedProductsReducer from './relatedProductsReducer.js';

export default combineReducers({
  /* insert reducers */
  ratings: ratingsReducer,
  reviews: reviewsReducer,
  qa: qaReducer,
  relatedProducts: relatedProductsReducer,
  // outfitReducer: outfitReducer,
});
