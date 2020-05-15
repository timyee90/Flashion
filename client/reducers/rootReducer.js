import { combineReducers } from 'redux';
import ratingsReducer from './ratingsReducer.js';
import reviewsReducer from './reviewsReducer.js';
import qaReducer from './qaReducer.js';
import outfitReducer from './outfitReducer.js';
import relatedProductsReducer from './relatedProductsReducer.js';
import productOverviewReducer from './ProductOverviewReducer.js';
import appReducer from './appReducer.js';

export default combineReducers({
  app: appReducer,
  ratings: ratingsReducer,
  reviews: reviewsReducer,
  qa: qaReducer,
  relatedProducts: relatedProductsReducer,
  // outfitReducer: outfitReducer,
  productInfo: productOverviewReducer,
});
