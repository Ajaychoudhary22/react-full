import React, { useState } from 'react'

const App = () => {
  const [bgColor, setBgColor] = useState('olive')

  return (
    <div
      className="min-h-screen duration-200 flex items-center justify-center text-white"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center items-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setBgColor('red')}
            className="outline-none bg-white text-black px-4 py-1 rounded-full shadow-lg"
          >
            Red
          </button>
          <button
            onClick={() => setBgColor('blue')}
            className="outline-none bg-white text-black px-4 py-1 rounded-full shadow-lg"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
