import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Header from './Component/layoutes/Header'
import Footer from './Component/layoutes/Footer'
import Shop from './Component/Shop'
import ShopDetails from './Component/ShopDetails'
import Cart from './Component/Cart'
import ProductDetails from './Component/Product/ProductDetails'


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopdetails" element={<ShopDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />}/>

         
        </Routes>
      <Footer />

    </>

  )
}

export default App