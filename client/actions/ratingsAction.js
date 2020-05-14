import {
  CHANGE_RATING_FILTER,
  GET_AVG_RATING,
} from '../constants/ratingsReviewsTypes.js';
import computeRatingAverage, {
  computeAverageRating,
} from '../../utils/computeRatingAverage.js';
import { getReviews } from '../../utils/queries.js';

export const changeRatingFilter = (rating) => {
  return {
    type: CHANGE_RATING_FILTER,
    payload: rating,
  };
};

export const getAvgRating = (reviews) => {
  return {
    type: GET_AVG_RATING,
    payload: computeAverageRating(reviews),
  };
};
