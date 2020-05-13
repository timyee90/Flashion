import {
  CHANGE_RATING_FILTER,
  GET_AVG_RATING,
} from '../constants/ratingsReviewsTypes';

export const changeRatingFilter = (rating) => {
  return {
    type: CHANGE_RATING_FILTER,
    payload: rating,
  };
};

export const getAvgRating = () => {
  return (dispatch) => {};
};
