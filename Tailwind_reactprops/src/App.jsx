import React from 'react'
import Card from './Components/Card'
const App = () => {
  return (
    <div>
      <Card username="John Doe" age={30} location="New York" />
      <Card username="Jane Smith" age={25} location="Los Angeles" />

    </div>
  )
}

export default App
 