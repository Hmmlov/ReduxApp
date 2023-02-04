/* Exportación redux */
import { useSelector, useDispatch } from 'react-redux'

/* Exportación de terceros */
import reactLogo from './assets/react.svg'
import './App.css'

/* Exportación desde stare/slices/counter */
import { increment, decrement, incrementByAmount } from './store/slices/counter/index';

function App() {

  const {counter} = useSelector( state => state.counter )
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {counter}</h1>
      <div className="card">
        <button type="button" onClick={ () => dispatch(increment())}>
          Increment
        </button>
        <button type="button" onClick={ () => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={ () => dispatch(incrementByAmount(2))}>
          IncrementbyAmount
        </button>
      </div>
    </div>
  )
}

export default App
