
import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15; 

  const addValue = () =>{
    setCounter((prevCounter )=> prevCounter + 1)
    setCounter((prevCounter )=> prevCounter + 1)
  
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }


  return (
   <>
  <h1>Hey Hiii. I am Vishal and I am a web Developer {counter}</h1>
  <h2>Counter Value: {counter} </h2>
  <button onClick={addValue}>Add Value</button> {" "}
  <button onClick={removeValue}>Remove Value</button>
  <p>Footer : {counter}</p>
  
   </>
  )
}

export default App
