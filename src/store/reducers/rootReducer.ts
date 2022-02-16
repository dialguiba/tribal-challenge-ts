import { combineReducers } from "redux";
import { businessReducer } from "@reducers/businessReducer";
import { uiReducer } from "./uiReducer";
import { personReducer } from "./personReducer";

export const rootReducer = combineReducers({
  /* api: apiDataReducer, */
  businesses: businessReducer,
  ui: uiReducer,
  persons: personReducer,
  // TODO: CAlendarReducer
});
