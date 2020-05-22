import {
  GET_RELATED_PRODUCT_DATA,
  GET_CURRENT_PRODUCT_INFO,
} from '../constants/relatedProductsTypes.js';

const initState = {
  relatedProducts: [],
  currentProductInfo: [],
};

const relatedProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_RELATED_PRODUCT_DATA:
      return {
        ...state,
        relatedProducts: action.payload,
      };
    case GET_CURRENT_PRODUCT_INFO:
      return {
        ...state,
        currentProductInfo: action.payload,
      };
    default:
      return state;
  }
};

export default relatedProductsReducer;
