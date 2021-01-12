import { useReducer } from 'react';
import { LOG_IN, LOG_OUT, GET_ID } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case SET_ID:
      return {
        ...state,
        scannedId,
      };
    default:
      return {
        ...state,
        isLoggedIn: false,
      };
  }
};

export function useAuthReducer(initialState) {
  return useReducer(reducer, initialState);
}
