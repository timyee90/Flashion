import {
  SEARCH_QUERY,
  RENDER_MORE_QUESTIONS,
  GET_QA_DATA,
} from '../constants/qaTypes.js';
import { getQuestions } from '../../utils/queries';

export const searchQuestions = (query) => {
  return;
};

export const renderMoreQuestions = (currentPage) => {
  return (dispatch) => {};
};

export const getQAData = (prod_id) => {
  return (dispatch) => {
    getQuestions(prod_id).then((data) => {
      dispatch({
        type: GET_QA_DATA,
        payload: data,
      });
    });
  };
};
