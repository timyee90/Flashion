import {
  CHANGE_RATING_FILTER,
  GET_REVIEWS_META_DATA,
  CLEAR_RATING_FILTER,
} from '../constants/ratingsReviewsTypes.js';
import { getReviewMeta } from '../../utils/queries';

export const changeRatingFilter = (rating) => {
  return {
    type: CHANGE_RATING_FILTER,
    payload: rating,
  };
};

export const getReviewsMetaData = (product_id) => {
  return (dispatch) => {
    getReviewMeta(product_id)
      .then((data) => {
        const total = Object.values(data.ratings).reduce((acc, curr) => {
          acc += curr;
          return acc;
        }, 0);
        const ratingGraphData = {};
        for (let i = 1; i < 6; i++) {
          if (data.ratings[i]) {
            ratingGraphData[i] = {
              percent: (data.ratings[i] / total) * 100,
              count: data.ratings[i],
            };
          } else {
            ratingGraphData[i] = 0;
          }
        }
        return ratingGraphData;
      })
      .then((chartData) => {
        dispatch({
          type: GET_REVIEWS_META_DATA,
          payload: chartData,
        });
      });
  };
};

export const clearRatingFilter = () => {
  return {
    type: CLEAR_RATING_FILTER,
    payload: [],
  };
};
