import { types } from "store/types";

export const updateCurrentView = (view: number) => ({
  type: types.updateCurrentView,
  payload: view,
});
