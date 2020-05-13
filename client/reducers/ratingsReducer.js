import { CHANGE_RATING_FILTER } from '../constants/ratingsReviewsTypes.js';

const initState = {
  ratingFilter: [],
};

const ratingsReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_RATING_FILTER:
      return {
        ...state,
        ratingFilter: action.payload,
      };
    default:
      return state;
  }
};

export default ratingsReducer;
