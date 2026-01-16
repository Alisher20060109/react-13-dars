import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import FilterPage from './pages/FilterPage'
import RegisterPage from './pages/RegisterPage'
import FavoritiPage from './pages/FavoritiPage'
import Layout from './components/Layout'  
import SingelPage from './pages/SingelPage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage/>} />
          <Route path='/favoriti' element={<FavoritiPage />} />
          <Route path='/cart/:id' element={<CartPage />} />
          <Route path='/filter' element={<FilterPage />} />
          <Route path='/register' element={<RegisterPage />} />
           <Route path='/single/:id' element={<SingelPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
