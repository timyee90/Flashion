import {
  CHANGE_SORTING_CRITERIA,
  SHOW_MORE_REVIEWS,
  GET_REVIEWS_DATA,
  GET_AVG_RATING,
  GET_RECOMMENDED_PERCENTAGE,
} from '../constants/ratingsReviewsTypes.js';

const initState = {
  sortingCriteria: 'helpful',
  reviews: [],
  numOfShownReviews: 0,
  avg_rating: 5,
};

const reviewsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_REVIEWS_DATA:
      return {
        ...state,
        reviews: action.payload,
      };
    case CHANGE_SORTING_CRITERIA:
      return {
        ...state,
        sortingCriteria: action.payload,
      };
    case SHOW_MORE_REVIEWS:
      return {
        ...state,
        reviews: state.numOfShownReviews + 2,
      };
    case GET_AVG_RATING:
      return {
        ...state,
        avg_rating: action.payload,
      };
    case GET_RECOMMENDED_PERCENTAGE:
      return {
        ...state,
        recommendedPercentage: action.payload,
      };
    default:
      return state;
  }
};

export default reviewsReducer;
