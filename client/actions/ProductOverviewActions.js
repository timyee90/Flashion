import {
  GET_PRODUCT_DATA,
  GET_STYLES_DATA,
} from '../constants/ProductOverviewTypes.js';
import { getProductInfo, getProductStyles } from '../../utils/queries.js';

export const getProductData = (product_id) => {
  return (dispatch) => {
    getProductInfo(product_id).then((productData) => {
      dispatch({
        type: GET_PRODUCT_DATA,
        payload: productData,
      });
    });
  };
};

export const getStylesData = (product_id) => {
  return (dispatch) => {
    getProductStyles(product_id).then((stylesData) => {
      dispatch({
        type: GET_STYLES_DATA,
        payload: stylesData,
      });
    });
  };
};
