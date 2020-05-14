import { GET_PRODUCT_DATA } from '../constants/ProductOverviewTypes';

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
    default:
      return state;
  }
};

export default productOverviewReducer;
