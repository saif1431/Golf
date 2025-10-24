// ...existing code...
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaAnglesLeft } from "react-icons/fa6";
import { Eye, EyeOff } from 'lucide-react';


function RegisterForm() {
  const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password || !form.firstName || !form.lastName) {
      setError('Please complete all fields.')
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    console.log('register payload', form)
    navigate('login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black  flex-col gap-6 py-10 px-4">
      <div>
        <img className='w-32' src="/logo.png" alt="" />
      </div>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg py-8 lg:px-12 px-4">
        <p className='text-end text-gray-400'><sup className='text-red-400'>*</sup> Required fields</p>
        <h2 className="text-3xl  text-center mt-4">Register</h2>

        {error && <div className="text-red-600 text-sm mb-3">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4 mt-12 ">
          <div className='flex flex-col gap-1'>
            <label className=" text-black">Email<sup className='text-red-400'>*</sup> </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@gmail.com"
              className="border border-gray-300 rounded px-4 py-3 w-full"
            />
          </div>

           <div className='flex flex-col gap-1'>
            <label className="text-black">Password<sup className='text-red-400'>*</sup></label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="*******"
                className="border border-gray-300 rounded px-4 py-3 w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
            <div className='flex flex-col gap-1'>
            <label className="text-black">Confirm Password<sup className='text-red-400'>*</sup></label>
            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="*******"
                className="border border-gray-300 rounded px-4 py-3 w-full"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <label className="text-black">First Name<sup className='text-red-400'>*</sup></label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder='Your first Name'
              className="border border-gray-300 rounded px-4 py-3 w-full"
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className="text-black">Last Name<sup className='text-red-400'>*</sup></label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder='Your Last Name'
              className="border border-gray-300 rounded px-4 py-3 w-full"
            />
          </div>
          <Link to='/member/login' className='flex items-center gap-2'>
          <span className='flex'>
          <FaAnglesLeft className='text-xs'/>
          
          </span>
          Back to Login
          </Link>

          <button
          style={{width: "100%"}}
            type="submit"
            className="btn-primary"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/member/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm