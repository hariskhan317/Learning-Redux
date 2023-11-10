import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addby, selectCount } from './features/counterSlice';
function App() {
  const counter = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div>
        <div></div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(addby(10))}>Decrement</button>
      </div>
    </div>
  );
}

export default App;

