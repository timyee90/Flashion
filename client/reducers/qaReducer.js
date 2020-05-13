import { RENDER_MORE_QUESTIONS, SEARCH_QUERY } from '../constants/qaTypes.js';

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
  }
};

export default qaReducer;
