import { SET_PRODUCT_ID } from '../constants/appTypes';

export const setProductID = (id) => {
  return {
    type: SET_PRODUCT_ID,
    payload: id,
  };
};
