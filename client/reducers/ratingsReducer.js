import {
  CHANGE_RATING_FILTER,
  GET_AVG_RATING,
  GET_RECOMMENDED_PERCENTAGE,
  GET_REVIEWS_META_DATA,
} from '../constants/ratingsReviewsTypes.js';
import { toggleRatingFilter } from '../../utils/computations';

const initState = {
  ratingFilter: [],
};

const ratingsReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_RATING_FILTER:
      return {
        ...state,
        ratingFilter: toggleRatingFilter(action.payload, state.ratingFilter),
      };
    case GET_REVIEWS_META_DATA:
      return {
        ...state,
        reviewMetadata: action.payload,
      };
    default:
      return state;
  }
};

export default ratingsReducer;
