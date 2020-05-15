import {
  CHANGE_RATING_FILTER,
  GET_AVG_RATING,
  GET_RECOMMENDED_PERCENTAGE,
} from '../constants/ratingsReviewsTypes.js';
import { computeAverageRating } from '../../utils/computeRatingAverage.js';
import { computeRecommendedPercentage } from '../../utils/computations.js';

export const changeRatingFilter = (rating) => {
  return {
    type: CHANGE_RATING_FILTER,
    payload: rating,
  };
};
