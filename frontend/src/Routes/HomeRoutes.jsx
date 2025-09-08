import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Navbar from '../components/ReuseAbleComponent/Navbar'
import JoinMovementPage from '../pages/JoinMovementPage'
import AboutUsPage from '../pages/AboutUsPage'
import NewsPage from '../pages/NewsPage'
import NewsDetail from '../components/NewsComponents/NewsDetail'
import ProductDetail from '../components/ProShopComponent/ProductDetails/ProductDetail'
import ProductPage from '../pages/ProductPage'
import Cart from '../components/ProShopComponent/ProductDetails/Cart'

function HomeRoutes() {
  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/join-our-movement' element={<JoinMovementPage />} />
      <Route path='/about-us' element={<AboutUsPage/>} />
      <Route path='/news' element={<NewsPage />} />
       <Route path="/news/:id" element={<NewsDetail />} />
       <Route path="/all-product" element={<ProductPage />} />
       <Route path="/product_detail" element={<ProductDetail />} />
       <Route path="/cart" element={<Cart />} />

    </Routes>
  )
}

export default HomeRoutes