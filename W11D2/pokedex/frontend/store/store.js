import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunkMiddleware from "../middleware/thunk";
import logger from "redux-logger";

export const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer, 
    preloadedState,
    applyMiddleware(thunkMiddleware, logger)
  );
};

