import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { userid } = useParams()
  return (
    <div className='justify-center items-center h-23 text-center bg-orange-200'>
      <h2>User ID: {userid}</h2>
    </div>
  )
}

export default User
