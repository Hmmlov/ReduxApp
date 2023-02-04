import { pokemonApi } from "../../../api/PokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export  const getPokemons = ( page = 0 ) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingPokemons() );
        //Todo: realizar petición http

        /* Forma con Axios */
        const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page*10}`)

        /* Otra forma con fecth */
       /* const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`);
       const data = await resp.json();
       console.log(data); */
        //data-pokemons 

        dispatch(setPokemons({pokemons: data.results, page: page + 1 }) );
    } /* https://pokeapi.co/api/v2/pokemon?limit=10&offset=0 */
}
