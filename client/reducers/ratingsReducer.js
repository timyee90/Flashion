import {
  CHANGE_RATING_FILTER,
  GET_AVG_RATING,
} from '../constants/ratingsReviewsTypes.js';

const initState = {
  ratingFilter: [],
  avg_rating: 0,
};

const ratingsReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_RATING_FILTER:
      return {
        ...state,
        ratingFilter: action.payload,
      };
    case GET_AVG_RATING:
      return {
        ...state,
        avg_rating: action.payload,
      };
    default:
      return state;
  }
};

export default ratingsReducer;
