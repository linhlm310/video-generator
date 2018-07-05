/**
 * @file The Server Timestamp reducer.
 */

import { ERRORS_UPDATE } from '../actions/constants';

const initialState = {
  errors: null,
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ERRORS_UPDATE:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
};

export default appReducer;
