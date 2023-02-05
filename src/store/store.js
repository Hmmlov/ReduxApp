import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { todosApi } from './apis'
import {counterSlice} from './slices/counter/index'
import { pokemonSlice } from './slices/pokemon'
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todosApi.middleware)
})