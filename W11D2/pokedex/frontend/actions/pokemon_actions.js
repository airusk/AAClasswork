import * as pokemonAPIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON, 
  pokemon
});

export const requestAllPokemon = () => dispatch => {
  return pokemonAPIUtil.fetchAllPokemon()
  .then(pokemon => {
    dispatch(receiveAllPokemon(pokemon));
  });
};

// export const requestAllPokemon = () => (dispatch) => (
//   APIUtil.fetchAllPokemon()
//     .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
// )
