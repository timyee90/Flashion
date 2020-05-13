import {
  CHANGE_SORTING_CRITERIA,
  SHOW_MORE_REVIEWS,
} from '../constants/ratingsReviewsTypes.js';

const initState = {
  sortingCriteria: '',
};

const reviewsReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_SORTING_CRITERIA:
      return {
        ...state,
        sortingCriteria: action.payload,
      };
    case SHOW_MORE_REVIEWS:
      return {
        ...state,
        reviews: state.reviews.push(...action.payload),
      };
    default:
      return state;
  }
};

export default reviewsReducer;
