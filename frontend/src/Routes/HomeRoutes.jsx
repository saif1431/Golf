import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Navbar from '../components/ReuseAbleComponent/Navbar'
import JoinMovementPage from '../pages/JoinMovementPage'
import AboutUsPage from '../pages/AboutUsPage'
import NewsPage from '../pages/NewsPage'
import NewsDetail from '../components/NewsComponents/NewsDetail'

function HomeRoutes() {
  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/join-our-movement' element={<JoinMovementPage />} />
      <Route path='/about-us' element={<AboutUsPage/>} />
      <Route path='/news' element={<NewsPage />} />
       <Route path="/news/:id" element={<NewsDetail />} />
      {/* Add more routes here if needed */}
    </Routes>
  )
}

export default HomeRoutes