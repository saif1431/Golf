import React from 'react'
import MemberNavbar from '../components/ReuseAbleComponent/MemberNavbar'
import MemberHome from '../pages/MemberPages/MemberHome'
import { Route, Routes, useLocation } from 'react-router-dom'
import RegisterForm from '../pages/RegisterForm'
import LoginForm from '../pages/LoginForm'

function MemberRoutes() {
  const location = useLocation()
  const hideNavbar = ['/member/register', '/member/login'].includes(location.pathname)

  return (
    <div>
      {!hideNavbar && <MemberNavbar />}
      <Routes>
        <Route index element={<MemberHome />} />
        <Route path="home" element={<MemberHome />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default MemberRoutes