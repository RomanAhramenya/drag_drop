import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='App'>
        <header>
            <NavLink to='/'>Главная</NavLink>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout