import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Navbar from '../components/ReuseAbleComponent/Navbar'
import JoinMovementPage from '../pages/JoinMovementPage'
import AboutUsPage from '../pages/AboutUsPage'

function HomeRoutes() {
  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/join-our-movement' element={<JoinMovementPage />} />
      <Route path='/about-us' element={<AboutUsPage/>} />
      {/* Add more routes here if needed */}
    </Routes>
  )
}

export default HomeRoutes