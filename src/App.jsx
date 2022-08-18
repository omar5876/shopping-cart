import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart'

import { ShoopingCartProvider } from './context/ShoppingCartContext'

function App() {


  return (
    <>

      <BrowserRouter>
        <ShoopingCartProvider>

          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='ShoppingCart' element={<ShoppingCart />} />
          </Routes>
        </ShoopingCartProvider>

      </BrowserRouter>
    </>
  )
}

export default App
