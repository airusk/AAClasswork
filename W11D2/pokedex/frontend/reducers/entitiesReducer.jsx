import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemonReducer";

// export const entitiesReducer = (state = {}, action) => {
//   Object.freeze(state);
//   let nextState = {};

//   switch (action.type) {
//     default:
//       return state;
//   }
// };

export const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
});

// export default entitiesReducer;


