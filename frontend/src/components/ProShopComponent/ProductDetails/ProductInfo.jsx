"use client"

import { useState } from "react"

export default function ProductInfo() {
//   const [quantity, setQuantity] = useState(1)
  const [showShipping, setShowShipping] = useState(false)
  const [showQuestion, setShowQuestion] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="space-y-6">
      {/* Product Title and Price */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">I FEEL YOUR PAIN - EBOOK</h1>
        <p className="text-2xl text-red-600 font-semibold">$24.95</p>
      </div>

      {/* Shipping and Stock Info */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          Free shipping in the U.S.
        </div>
        <div className="flex items-center gap-2 text-sm text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          In stock, ready to ship
        </div>
      </div>

      {/* Product Description */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">I FEEL YOUR PAIN</h2>
        <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <p>
            <strong>GolfWeek's Editor calls it "among the best instructional books I've seen in my career."</strong>
          </p>
          <p>
            Mike Malaska, the 2011 PGA Teacher of the Year and current Worldwide Director of Jack Nicklaus Golf
            Academies, delivers uncomplicated golf instruction.
          </p>
          <p>
            This highly-regarded professional has collected his highly successful approach to helping anyone, at any
            skill level, develop a far better game. With hundreds of pictures and captions, Mike doesn't just explain
            the game – he shows it to you, in step-by-step four color photographs, and a few simple words.
          </p>
          <p>
            The foreword by Jack Nicklaus highlights Mike's approach: "He poses the rare ability to motivate people and
            put them at ease during what can be a stressful process. He takes the technical out of technique."
          </p>
        </div>
      </div>

      {/* Add to Cart Section */}
      <div className="space-y-4">
        <button className="w-full bg-white border-2 border-gray-300 text-gray-900 py-3 px-6 rounded font-medium hover:bg-gray-50 transition-colors">
          ADD TO CART
        </button>
        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded font-medium hover:bg-blue-700 transition-colors">
          Buy with Shop Pay
        </button>
        <p className="text-center text-sm text-gray-600">More payment options</p>
        <p className="text-center text-xs text-gray-500">
          Pay over time for orders over <strong>$35.00</strong> with Shop Pay Learn more
        </p>
      </div>

      {/* Shipping Information */}
      <div className="border border-gray-200 rounded">
        <button
          onClick={() => setShowShipping(!showShipping)}
          className="w-full flex items-center justify-between p-4 text-left"
        >
          <span className="font-medium text-gray-900">SHIPPING INFORMATION</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${showShipping ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showShipping && (
          <div className="px-4 pb-4 text-sm text-gray-600">
            We try to ship items in 2-3 days however some items may require additional lead time, especially during
            holidays or sales.
          </div>
        )}
      </div>

      {/* Ask a Question */}
      <div className="border border-gray-200 rounded">
        <button
          onClick={() => setShowQuestion(!showQuestion)}
          className="w-full flex items-center justify-between p-4 text-left"
        >
          <span className="font-medium text-gray-900">ASK A QUESTION</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${showQuestion ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showQuestion && (
          <div className="px-4 pb-4 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary text-white px-6 py-2 rounded font-medium hover:bg-red-700 transition-colors"
              >
                SEND
              </button>
            </form>
            <p className="text-xs text-gray-500">
              This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.
            </p>
          </div>
        )}
      </div>

      {/* Social Share */}
      <div className="flex items-center gap-4 pt-4">
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
          Share
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
          Tweet
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.188 4.72C13.935 14.16 12.358 14.8 10.5 14.8c-.638 0-1.276-.069-1.914-.207-.638-.138-1.207-.345-1.707-.621l.828-.828c.414.207.862.345 1.345.414.483.069.966.069 1.449 0 .966-.138 1.793-.552 2.483-1.242.69-.69 1.104-1.517 1.242-2.483.069-.483.069-.966 0-1.449-.069-.483-.207-.931-.414-1.345l.828-.828c.276.5.483 1.069.621 1.707.138.638.207 1.276.207 1.914z" />
          </svg>
          Pin it
        </button>
      </div>
    </div>
  )
}
