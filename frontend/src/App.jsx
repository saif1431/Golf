import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeRoutes from './Routes/HomeRoutes'
import MemberRoutes from './Routes/MemberRoutes'


function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/*' element={<HomeRoutes />} />
        <Route path='/member-home' element={<MemberRoutes />} />
      </Routes>
     
    </div>
  )
}

export default App