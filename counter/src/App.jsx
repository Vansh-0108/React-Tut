import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//comment

function App() {

  // let counter = 15;

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    counter = counter+1;
    console.log('Value Added', counter);
    setCounter(counter);
  }

  const subValue = () => {
    counter = counter-1;
    console.log('Value Subtracted', counter);
    setCounter(counter);
  }

  return (
    <>
      <h1>Hooks Padhenge</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subValue}>Subtract Value</button>
    </>
  )
}

export default App
