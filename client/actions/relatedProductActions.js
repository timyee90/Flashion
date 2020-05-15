import {
  GET_RELATED_PRODUCT_DATA,
  GET_PRODUCT_STYLES_DATA,
} from '../constants/relatedProductsTypes.js';
import {
  getProductStylesMeta,
  getRelatedProductMeta,
} from '../../utils/queries';

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

export const getProductStyles = (id) => {
  return (dispatch) => {
    getProductStylesMeta(id).then((data) => {
      dispatch({
        type: GET_PRODUCT_STYLES_DATA,
        payload: data,
      });
    });
  };
};
