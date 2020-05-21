import {
  CHANGE_RATING_FILTER,
  GET_REVIEWS_META_DATA,
  CLEAR_RATING_FILTER,
  GET_FULL_META,
} from '../constants/ratingsReviewsTypes.js';
import { toggleRatingFilter } from '../../utils/computations';

const initState = {
  ratingFilter: [],
  fullMetadata: {
    characteristics: { Fit: {}, Comfort: {}, Quality: {}, Length: {} },
  },
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
    case GET_FULL_META:
      return {
        ...state,
        fullMetadata: action.payload,
      };
    case CLEAR_RATING_FILTER:
      return {
        ...state,
        ratingFilter: [],
      };
    default:
      return state;
  }
};

export default ratingsReducer;
