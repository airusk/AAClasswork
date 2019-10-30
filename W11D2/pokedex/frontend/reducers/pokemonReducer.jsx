import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";
import { requestAllPokemon } from "../actions/pokemon_actions";

// import { bindActionCreators } from "redux";

export const pokemonReducer = (state ={}, action) => {
  let nextState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = Object.assign({}, state);
      Object.values(action.pokemon).forEach((poke) => nextState[poke.id] = poke);
      return nextState;
    default:
      return state;
  }
};

