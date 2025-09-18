import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePages/HomePage'
import JoinMovementPage from '../pages/HomePages/JoinMovementPage'
import AboutUsPage from '../pages/HomePages/AboutUsPage'
import NewsPage from '../pages/HomePages/NewsPage'
import ProductPage from '../pages/HomePages/ProductPage'
import CartDrawer from '../components/ReuseAbleComponent/CartDrawer'
import NewsDetail from '../components/HomePageComponents/NewsComponents/NewsDetail'
import ProductDetail from '../components/ProShopComponent/ProductDetails/ProductDetail'
import CoachDetail from '../components/HomePageComponents/CoachesComponent/CoachDetail'
import Navbar from '../components/ReuseAbleComponent/Navbar'
import Footer from '../components/ReuseAbleComponent/Footer'


function HomeRoutes() {
  return (
<div>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/join-our-movement' element={<JoinMovementPage />} />
      <Route path='/about-us' element={<AboutUsPage/>} />
      <Route path='/news' element={<NewsPage />} />
       <Route path="/news/:id" element={<NewsDetail />} />
       <Route path="/all-product" element={<ProductPage />} />
       <Route path="/product_detail" element={<ProductDetail />} />
       <Route path="/cart" element={<CartDrawer />} />
       <Route path="/coach-detail" element={<CoachDetail />} />
    </Routes>
 <Footer/>
</div>
  )
}

export default HomeRoutes