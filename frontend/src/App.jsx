import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeRoutes from './Routes/HomeRoutes'
import MemberRoutes from './Routes/MemberRoutes'
import MemberHome from './pages/MemberPages/MemberHome'


function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/*' element={<HomeRoutes />} />
     
        <Route path='/member/*' element={<MemberRoutes />} />
      </Routes>
     
    </div>
  )
}

export default App