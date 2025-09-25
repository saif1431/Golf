import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please fill email and password.')
      return
    }
    // TODO: call API / login
    console.log('login', { email, password })
    navigate('/member') // adjust redirect as needed
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Sign in</h2>

        {error && <div className="text-red-600 text-sm mb-3">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError('') }}
              placeholder="Email"
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError('') }}
              placeholder="Password"
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition">
            Sign in
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          New here?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}