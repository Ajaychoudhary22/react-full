import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Layout from './Components/Layout.jsx' 
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import Github,{githubInfoLoader} from './Components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* default route */}
      <Route index element={<Home />} />    
      <Route path="about" element={<About />} />

      {/* User routes */}
      <Route path="user">
        <Route index element={<User />} /> {/* /user */}
        <Route path=":userid" element={<User />} /> {/* /user/123 */}
      </Route>
      <Route
        path='github'
        element={<Github />}
        loader={githubInfoLoader}
      />
      <Route path="*" element={<h2 className='text-center'>404 Page Not Found</h2>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
