import React, { useCallback, useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast' 


const App = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charallowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numberAllowed) str += '0123456789'
    if (charallowed) str += '!@#$%^&*()_+[]{}|;:,.<>?'

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charallowed])

  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password)
      toast.success('Password copied to clipboard!')
    } else {
      toast.error('No password to copy.')
    }
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charallowed, generatePassword])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-white'>
      <h1 className='text-white text-center my-3 text-2xl font-bold'>Password Generator</h1>

      <div className='flex rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full px-3 py-2 bg-white text-black'
          placeholder='Password'
          readOnly
        />
        <button
          onClick={copyPassword}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600'>
          Copy
        </button>
      </div>

      <div className='flex flex-col gap-y-2 text-sm'>
        <div className='flex items-center gap-x-2'>
          <input
            type='range'
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            id='length'
          />
          <label htmlFor='length'>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input
            type='checkbox'
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            id='number'
          />
          <label htmlFor='number'>Include Numbers</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input
            type='checkbox'
            checked={charallowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            id='characters'
          />
          <label htmlFor='characters'>Include Special Characters</label>
        </div>
      </div>

      {/* Toast UI Component */}
      <Toaster position='top-center' />
    </div>
  )
}

export default App
