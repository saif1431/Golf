// ...existing code...
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaAnglesLeft } from "react-icons/fa6";


function LoginForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: '',
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

    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black  flex-col gap-6 py-10 px-4">
      <div>
        <img className='w-32' src="/logo.png" alt="" />
      </div>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg py-8 lg:px-12 px-4">
        <h2 className="text-3xl  text-center mt-4">Sign in to your account</h2>

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
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="*******"
              className="border border-gray-300 rounded px-4 py-3 w-full"
            />
          </div>
        


          <button
          style={{width: "100%"}}
            type="submit"
            className="btn-primary"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
         Don't have an account?{' '}
          <Link to="/member/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm