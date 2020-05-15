import { REMOVE_FAVORITE } from '../constants/outfitTypes.js';

const initState = {
  favorites: [],
};

const removeFromArray = (array, id) => {
  let index = array.indexOf(id);
  array.splice(index, 1);
  return array;
};

const outfitReducer = (state = initState, action) => {
  switch (action.type) {
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: removeFromArray(favorites, action.payload),
      };
    default:
      return state;
  }
};

export default outfitReducer;
