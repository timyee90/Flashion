import {
  DISPLAY_NEXT_IMAGE,
  DISPLAY_PREVIOUS_IMAGE,
  DISPLAY_CHOSEN_IMAGE,
  CHANGE_STYLE,
  SELECT_SIZE,
  ADD_TO_BAG,
  ADD_TO_FAVORITES,
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

export const displayNextImage = () => {
  return {
    type: DISPLAY_NEXT_IMAGE,
  };
};

export const displayPreviousImage = () => {
  return {
    type: DISPLAY_PREVIOUS_IMAGE,
  };
};

export const displayChosenImage = (image_thumbnail) => {
  return {
    type: DISPLAY_CHOSEN_IMAGE,
    payload: image_thumbnail,
  };
};

export const changeStyle = (style_id) => {
  return {
    type: CHANGE_STYLE,
    payload: style_id,
  };
};

export const selectSize = (size_id) => {
  return {
    type: SELECT_SIZE,
    payload: size_id,
  };
};

export const addToBag = (user_and_sku) => {
  return {
    type: ADD_TO_BAG,
    payload: user_and_sku,
  };
};

export const addToFavorites = (product_id) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: product_id,
  };
};
