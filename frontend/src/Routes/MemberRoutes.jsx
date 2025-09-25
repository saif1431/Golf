import React from 'react'
import MemberNavbar from '../components/ReuseAbleComponent/MemberNavbar'
import MemberHome from '../pages/MemberPages/MemberHome'
import { Route, Routes } from 'react-router-dom'
import RegisterForm from '../pages/RegisterForm'
import LoginForm from '../pages/LoginForm'

function MemberRoutes() {
  return (
    <div>
      <MemberNavbar /> {/* render navbar outside Routes */}
      <Routes>
        {/* index renders at /member/ */}
        <Route index element={<MemberHome />} />
        {/* /member/home */}
        <Route path="home" element={<MemberHome />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default MemberRoutes
