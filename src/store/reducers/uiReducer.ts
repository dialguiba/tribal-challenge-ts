import { types } from "store/types";
import { Action } from "types/store";

const initialState = {
  currentView: 0,
};

export const uiReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.updateCurrentView:
      return {
        ...state,
        currentView: action.payload,
      };
    default:
      return state;
  }
};
