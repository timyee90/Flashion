import {
  SUBMIT_REVIEW,
  REPORT_REVIEW,
  SHOW_MORE_REVIEWS,
  ADD_REVIEW_HELPFUL,
  CHANGE_SORTING_CRITERIA,
} from '../constants/ratingsReviewsTypes';

export const submitReview = (review) => {
  return {
    type: SUBMIT_REVIEW,
    payload: review,
  };
};

export const reportReview = (review_id) => {
  return {
    type: REPORT_REVIEW,
    payload: review_id,
  };
};

export const renderMoreReviews = (currentlyShownNumberOfReviews) => {
  return {
    type: SHOW_MORE_REVIEWS,
    payload: currentlyShownNumberOfReviews,
  };
};

export const markReviewAsHelpful = (review_id) => {
  return {
    type: ADD_REVIEW_HELPFUL,
    payload: review_id,
  };
};

export const changeSortCriteriaReview = (criteria) => {
  return {
    type: CHANGE_SORTING_CRITERIA,
    payload: criteria,
  };
};
