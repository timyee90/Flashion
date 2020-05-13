import {
  DISPLAY_NEXT_IMAGE,
  DISPLAY_PREVIOUS_IMAGE,
  DISPLAY_CHOSEN_IMAGE,
  CHANGE_STYLE,
  SELECT_SIZE,
  ADD_TO_BAG,
  ADD_TO_FAVORITES,
} from "../constants/ProductOverviewTypes.js";

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
