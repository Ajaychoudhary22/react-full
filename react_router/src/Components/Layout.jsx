import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* yaha child routes render honge */}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
