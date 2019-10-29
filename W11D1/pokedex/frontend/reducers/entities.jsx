// @pokemon.each do | poke |
//   json.set! poke.id do
//   json.extract! poke, : id, : name
// json.image_url asset_path(poke.image_url)
// end
// end

import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";

const entities = combineReducers({
  pokemon: pokemonReducer
});

export default entities;