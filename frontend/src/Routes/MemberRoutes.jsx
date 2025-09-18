import React from 'react'
import MemberNavbar from '../components/ReuseAbleComponent/MemberNavbar'
import MemberHome from '../pages/MemberPages/MemberHome'
import { Route, Routes } from 'react-router-dom'

function MemberRoutes() {
  return (
  <div>
    <MemberNavbar/>
      <Routes>
        <Route path='/member-home/*' element={<MemberHome />} />
      </Routes>
  </div>
  )
}

export default MemberRoutes
