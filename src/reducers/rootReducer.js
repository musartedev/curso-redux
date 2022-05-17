import { combineReducers } from 'redux-immutable';
import { pokemonsReducer } from './pokemons';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});

export default rootReducer;
