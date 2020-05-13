import { CHANGE_RATING_FILTER } from '../constants/ratingsReviewsTypes';

export const changeRatingFilter = (rating) => {
  return {
    type: CHANGE_RATING_FILTER,
    payload: rating,
  };
};
