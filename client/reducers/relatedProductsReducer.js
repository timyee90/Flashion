import {
  GET_RELATED_PRODUCT_DATA,
  GET_PRODUCT_STYLES_DATA,
} from '../constants/relatedProductsTypes.js';

const initState = {
  relatedProducts: [],
  productStyles: [],
};

const relatedProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_RELATED_PRODUCT_DATA:
      return {
        ...state,
        relatedProducts: action.payload,
      };
    case GET_PRODUCT_STYLES_DATA:
      return {
        ...state,
        productStyles: action.payload,
      };
    default:
      return state;
  }
};

export default relatedProductsReducer;
