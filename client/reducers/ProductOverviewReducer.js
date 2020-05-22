import {
  GET_PRODUCT_DATA,
  GET_STYLES_DATA,
} from '../constants/ProductOverviewTypes';

const initState = {
  productInfo: {},
};

const productOverviewReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DATA:
      return {
        ...state,
        productInfo: action.payload,
      };
    case GET_STYLES_DATA:
      return {
        ...state,
        stylesInfo: action.payload,
      };
    default:
      return state;
  }
};

export default productOverviewReducer;
