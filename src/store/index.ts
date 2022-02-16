import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "@reducers/rootReducer";

interface WindowExtended extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
}

const composeEnhancers = (typeof window !== "undefined" && (window as WindowExtended).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
