import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Collection from './pages/Collection'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => (

  <div className='px-4 ms:px-[5vw] md:px-[7vw] lg:-[9vw] '>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:productId' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/place-order' element={<PlaceOrder />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/about' element={<About />} />
      <Route path='/collection' element={<Collection />} />
    </Routes>
    <Footer/>
  </div>
)

export default App