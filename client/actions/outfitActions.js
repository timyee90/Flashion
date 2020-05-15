import { REMOVE_FAVORITE } from './constants/outfitTypes.js';

export const removeFavorite = (productId) => {
  return {
    type: REMOVE_FAVORITE,
    payload: productId,
  };
};
