import React from 'react'

const Card = ({ username, age, location }) => {
  return (
    <div className='max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center p-4 mt-4 transition duration-300 hover:shadow-xl'>
      <img className='w-full h-48 object-cover' src="https://images.unsplash.com/photo-1752451453007-1bdb81af5b76?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder" srcset="" />
        <h2 className='text-2xl font-bold'>{username}</h2>
        <p className='text-gray-600'>Age: {age}</p>
        <p className='text-gray-600'>Location: {location}</p>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Click Me</button>

    </div>
  )
}

export default Card
