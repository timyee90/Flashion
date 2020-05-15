import { SET_PRODUCT_ID } from '../constants/appTypes.js';

const initState = {
  product_id: 1,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PRODUCT_ID:
      return {
        ...state,
        product_id: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
