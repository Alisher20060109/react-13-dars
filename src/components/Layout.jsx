import React from 'react'
import { Outlet } from 'react-router-dom'
import Foters from './Foters'
import Headers from './Headers';

const Layout = () => {
  return (
    <>
     <Headers />
     <main className='mt-55'>
        <Outlet />
     </main>
     <Foters /> 
    </>
  )
}

export default Layout
