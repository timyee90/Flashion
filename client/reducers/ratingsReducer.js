import {
  CHANGE_RATING_FILTER,
  GET_AVG_RATING,
  GET_RECOMMENDED_PERCENTAGE,
} from '../constants/ratingsReviewsTypes.js';

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
