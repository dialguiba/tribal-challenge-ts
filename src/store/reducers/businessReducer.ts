import { types } from "store/types";
import { Action, Business } from "types/store";

const initialState = {
  data: [],
  isLoading: false,
  withError: false,
  currentBusiness: null,
};

export const businessReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.loadBusinesses:
      return {
        ...state,
        data: action.payload,
      };

    case types.updateBusiness:
      return {
        ...state,
        data: [...state.data.filter((business: Business) => business.id !== action.payload.id), action.payload],
      };

    case types.updateLoadingBusinesses:
      return {
        ...state,
        isLoading: action.payload,
      };

    case types.setCurrentBusiness:
      return {
        ...state,
        currentBusiness: action.payload,
      };

    case types.removeBusiness:
      return {
        ...state,
        data: state.data.filter((business: Business) => business.id !== action.payload),
      };

    default:
      return state;
  }
};