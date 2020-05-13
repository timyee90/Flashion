import {
  SHOW_MORE_REVIEWS,
  CHANGE_SORTING_CRITERIA,
} from '../constants/ratingsReviewsTypes';

//needs to be async func
export const renderMoreReviews = (currentlyShownNumberOfReviews) => {
  return {
    type: SHOW_MORE_REVIEWS,
    payload: currentlyShownNumberOfReviews,
  };
};

export const changeSortCriteriaReview = (criteria) => {
  return {
    type: CHANGE_SORTING_CRITERIA,
    payload: criteria,
  };
};

export const getReviewData = () => {
  return (dispatch) => {
    //insert getrevies util func
  };
};
