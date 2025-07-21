import React, { useState } from 'react'

const App = () => {
  
const [counter, setCounter] = useState(0)
    const addvalue = () => {
    setCounter(counter + 1)
    }

    const removevalue =()=>{
      if(counter >0)
      setCounter(counter -1)
    }
  return (
    <div>
      <h1>Hello World {counter}</h1>
      <button type="button" onClick={addvalue}>Click Me</button>
      <button type ="button" onClick={removevalue}>remove</button>
    </div>
  )
}

export default App
