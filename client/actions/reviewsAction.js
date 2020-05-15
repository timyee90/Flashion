import {
  SHOW_MORE_REVIEWS,
  CHANGE_SORTING_CRITERIA,
  GET_REVIEWS_DATA,
  GET_AVG_RATING,
  GET_RECOMMENDED_PERCENTAGE,
} from '../constants/ratingsReviewsTypes';
import { computeAverageRating } from '../../utils/computeRatingAverage.js';
import { computeRecommendedPercentage } from '../../utils/computations.js';
import { getReviews } from '../../utils/queries';

//needs to be async func
export const renderMoreReviews = (currentlyShownNumberOfReviews) => {
  return {
    type: SHOW_MORE_REVIEWS,
    payload: currentlyShownNumberOfReviews + 2,
  };
};

export const changeSortCriteriaReview = (criteria) => {
  return {
    type: CHANGE_SORTING_CRITERIA,
    payload: criteria,
  };
};

export const getReviewData = (id) => {
  return (dispatch) => {
    getReviews(id).then((data) => {
      dispatch({
        type: GET_REVIEWS_DATA,
        payload: data,
      });
      console.log('avg is: ', computeAverageRating(data));
      dispatch({
        type: GET_AVG_RATING,
        payload: computeAverageRating(data),
      });
      dispatch({
        type: GET_RECOMMENDED_PERCENTAGE,
        payload: computeRecommendedPercentage(data),
      });
    });
  };
};
