import {
  RENDER_MORE_QUESTIONS,
  SEARCH_QUERY,
  GET_QA_DATA,
} from '../constants/qaTypes.js';

const initState = {
  qaEntries: [],
};

const qaReducer = (state = initState, action) => {
  switch (action.type) {
    case RENDER_MORE_QUESTIONS:
      return {
        ...state,
        qaEntries: state.qaEntries.push(...action.payload),
      };
    case SEARCH_QUERY:
      return {
        ...state,
        qaEntries: action.payload,
      };
    case GET_QA_DATA:
      return {
        ...state,
        qaEntries: action.payload,
      };
    default:
      return state;
  }
};

export default qaReducer;
