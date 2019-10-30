import { combineReducers } from "redux";
import { entitiesReducer } from "./entitiesReducer";

export const rootReducer = combineReducers({
  entities: entitiesReducer
});
