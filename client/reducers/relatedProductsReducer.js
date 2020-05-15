import { GET_RELATED_PRODUCT_DATA } from '../constants/relatedProductsTypes.js';

const initState = {
  relatedProducts: [],
};

const relatedProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_RELATED_PRODUCT_DATA:
      return {
        ...state,
        relatedProducts: action.payload,
      };
    default:
      return state;
  }
};

export default relatedProductsReducer;
