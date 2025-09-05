"use client"

import React from "react"
import { X, Plus, Minus } from "lucide-react"

export default function CartDrawer({ isOpen, onClose }) {
  const [quantity, setQuantity] = React.useState(2)
  const [orderNote, setOrderNote] = React.useState("")
  const [agreeTerms, setAgreeTerms] = React.useState(false)

  const price = 49.9
  const subtotal = price * quantity

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change)
    setQuantity(newQuantity)
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0  bg-opacity-50 z-40" onClick={onClose} />}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-fit max-w-md bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold tracking-wider">CART</h2>
            <button onClick={onClose} className="text-white hover:text-gray-300 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Product Item */}
            <div>
                  <div className="flex gap-4 mb-8">
              <div className="w-20 h-28 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                <img
                  src="https://malaskagolf.com/cdn/shop/files/ProductListingImage.png?v=1707946820&width=540"
                  alt="I Feel Your Pain - eBook"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium mb-4">I Feel Your Pain - eBook</h3>

                <div className="flex items-center justify-between">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-600 rounded">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-700 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-700 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Price */}
                  <span className="text-xl font-medium">${price.toFixed(2)}</span>
                </div>
              </div>
            </div>
                  <div className="flex gap-4 mb-8">
              <div className="w-20 h-28 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                <img
                  src="https://malaskagolf.com/cdn/shop/files/ProductListingImage.png?v=1707946820&width=540"
                  alt="I Feel Your Pain - eBook"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium mb-4">I Feel Your Pain - eBook</h3>

                <div className="flex items-center justify-between">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-600 rounded">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-700 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-700 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Price */}
                  <span className="text-xl font-medium">${price.toFixed(2)}</span>
                </div>
              </div>
            </div>
                  <div className="flex gap-4 mb-8">
              <div className="w-20 h-28 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                <img
                  src="https://malaskagolf.com/cdn/shop/files/ProductListingImage.png?v=1707946820&width=540"
                  alt="I Feel Your Pain - eBook"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium mb-4">I Feel Your Pain - eBook</h3>

                <div className="flex items-center justify-between">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-600 rounded">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-700 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-700 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Price */}
                  <span className="text-xl font-medium">${price.toFixed(2)}</span>
                </div>
              </div>
            </div>
                  <div className="flex gap-4 mb-8">
              <div className="w-20 h-28 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                <img
                  src="https://malaskagolf.com/cdn/shop/files/ProductListingImage.png?v=1707946820&width=540"
                  alt="I Feel Your Pain - eBook"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium mb-4">I Feel Your Pain - eBook</h3>

                <div className="flex items-center justify-between">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-600 rounded">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-700 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-700 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Price */}
                  <span className="text-xl font-medium">${price.toFixed(2)}</span>
                </div>
              </div>
            </div>
                  <div className="flex gap-4 mb-8">
              <div className="w-20 h-28 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                <img
                  src="https://malaskagolf.com/cdn/shop/files/ProductListingImage.png?v=1707946820&width=540"
                  alt="I Feel Your Pain - eBook"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium mb-4">I Feel Your Pain - eBook</h3>

                <div className="flex items-center justify-between">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-600 rounded">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-700 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-700 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Price */}
                  <span className="text-xl font-medium">${price.toFixed(2)}</span>
                </div>
              </div>
            </div>
                  <div className="flex gap-4 mb-8">
              <div className="w-20 h-28 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                <img
                  src="https://malaskagolf.com/cdn/shop/files/ProductListingImage.png?v=1707946820&width=540"
                  alt="I Feel Your Pain - eBook"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium mb-4">I Feel Your Pain - eBook</h3>

                <div className="flex items-center justify-between">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-600 rounded">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-700 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-700 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Price */}
                  <span className="text-xl font-medium">${price.toFixed(2)}</span>
                </div>
              </div>
            </div>
            </div>

            {/* Order Note */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3 tracking-wider">ORDER NOTE</label>
              <textarea
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                className="w-full h-24 bg-transparent border border-gray-600 rounded p-3 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-gray-400 transition-colors"
                placeholder="Add a note to your order..."
              />
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-700 p-6">
            {/* Subtotal */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium tracking-wider">SUBTOTAL</span>
              <span className="text-xl font-medium">${subtotal.toFixed(2)}</span>
            </div>

            <p className="text-sm text-gray-400 mb-6">Shipping, taxes, and discount codes calculated at checkout.</p>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 w-4 h-4 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <label htmlFor="terms" className="text-sm text-gray-300 leading-relaxed">
                I AGREE WITH THE TERMS AND CONDITIONS
              </label>
            </div>

            {/* Checkout Button */}
            <button
              disabled={!agreeTerms}
              className={`w-full py-4 rounded font-medium tracking-wider transition-colors ${
                agreeTerms
                  ? "bg-amber-600 hover:bg-amber-700 text-white"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
            >
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
