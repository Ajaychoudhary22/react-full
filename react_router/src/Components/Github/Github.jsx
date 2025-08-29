import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()
//  const [data, setData] = useState([])

// useEffect(() => {
// fetch("https://api.github.com/users/Ajaychoudhary22")
// .then(response =>response.json())
// .then(data => setData(data))
// console.log(data)
// }, [])

  return (
    <div className='justify-center items-center h-23 text-center bg-orange-200'>
      github followers: {data.followers}
      <img src={data.avatar_url} width={200} />
    </div>
  )
}

export default Github


export const githubInfoLoader =async()=>{
    const response = await fetch("https://api.github.com/users/Ajaychoudhary22")
    return response.json()
}

