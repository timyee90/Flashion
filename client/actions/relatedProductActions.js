import { GET_RELATED_PRODUCT_DATA } from '../constants/relatedProductsTypes.js';
import { getRelatedProductMeta } from '../../utils/queries';

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
