import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
/* store/store */
import { store } from './store/index';
import { Provider } from 'react-redux';
import { PokemonApp } from './PokemonApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     {/*  <App /> */}
      <PokemonApp />
    </Provider>
  </React.StrictMode>
)
