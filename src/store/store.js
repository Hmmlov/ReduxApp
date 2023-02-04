import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from './slices/counter/index'
import { pokemonSlice } from './slices/pokemon'
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer
  },
})