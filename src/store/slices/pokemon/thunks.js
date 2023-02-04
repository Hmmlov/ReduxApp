import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export  const getPokemons = ( page = 0 ) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingPokemons() );

        //data-pokemons 
        /* dispatch(setPokemons() ); */
    } /* https://pokeapi.co/api/v2/pokemon?limit=10&offset=0 */
}
