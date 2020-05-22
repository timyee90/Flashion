import {
  GET_RELATED_PRODUCT_DATA,
  GET_CURRENT_PRODUCT_INFO,
} from '../constants/relatedProductsTypes.js';
import { getRelatedProductMeta, getProductInfo } from '../../utils/queries';

export const getRelatedProductIds = (id) => {
  return (dispatch) => {
    getRelatedProductMeta(id).then((data) => {
      dispatch({
        type: GET_RELATED_PRODUCT_DATA,
        payload: data,
      });
    });
  };
};

export const getCurrentProductInfo = (id) => {
  return (dispatch) => {
    getProductInfo(id).then((data) => {
      dispatch({
        type: GET_CURRENT_PRODUCT_INFO,
        payload: data,
      });
    });
  };
};
