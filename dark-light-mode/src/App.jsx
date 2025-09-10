import React, { useEffect } from 'react'
import Card from './Components/Card'
import Theme from './Components/Theme'
import { ThemeProvider } from './Components/contexts/theme' 


const App = () => {
  const [themeMode, setThemeMode] = React.useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className='flex flex-wrap min-h-screen items-center   '>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>

            <Theme />
          </div>
          <div className='w-full max-w-sm mx-auto'>
            <Card />
          </div>

        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
