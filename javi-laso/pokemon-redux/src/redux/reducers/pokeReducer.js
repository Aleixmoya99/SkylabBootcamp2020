import actionTypes from '../actions/actionTypes';

export default function pokeReducer(state = {}, action) {
	switch (action.type) {
		case actionTypes.LOAD_POKEMONS:
			const coso = { ...state, pokemonList: action.pokemonList };
			return coso;
		case actionTypes.LOAD_POKEMONS_ERROR:
		default:
			return state;
	}
}
