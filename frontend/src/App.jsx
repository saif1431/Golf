import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeRoutes from './Routes/HomeRoutes'
import Navbar from './components/ReuseAbleComponent/Navbar'
import Footer from './components/ReuseAbleComponent/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/*' element={<HomeRoutes />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App