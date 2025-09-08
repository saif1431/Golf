"use client"

import { useState } from "react"
import { X, ChevronUp, ChevronDown } from "lucide-react"

function FilterDrawer({ isOpen, onClose }) {
  const [availabilityExpanded, setAvailabilityExpanded] = useState(true)
  const [priceExpanded, setPriceExpanded] = useState(true)
  const [filters, setFilters] = useState({
    inStock: false,
    outOfStock: false,
    minPrice: 0,
    maxPrice: 899,
  })

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-opacity-50 z-40" onClick={onClose} />}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold tracking-wider">FILTER</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Filter Content */}
        <div className="p-6 space-y-6">
          {/* Availability Section */}
          <div>
            <button
              onClick={() => setAvailabilityExpanded(!availabilityExpanded)}
              className="flex justify-between items-center w-full text-left mb-4"
            >
              <h3 className="text-sm font-semibold tracking-wider">AVAILABILITY</h3>
              {availabilityExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {availabilityExpanded && (
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange("inStock", e.target.checked)}
                    className="w-4 h-4 bg-transparent border border-gray-400 rounded focus:ring-2 focus:ring-white"
                  />
                  <span className="text-sm">In stock (26)</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.outOfStock}
                    onChange={(e) => handleFilterChange("outOfStock", e.target.checked)}
                    className="w-4 h-4 bg-transparent border border-gray-400 rounded focus:ring-2 focus:ring-white"
                  />
                  <span className="text-sm">Out of stock (3)</span>
                </label>
              </div>
            )}
          </div>

          {/* Price Section */}
          <div className="border-t border-gray-700 pt-6">
            <button
              onClick={() => setPriceExpanded(!priceExpanded)}
              className="flex justify-between items-center w-full text-left mb-4"
            >
              <h3 className="text-sm font-semibold tracking-wider">PRICE</h3>
              {priceExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {priceExpanded && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="priceRange"
                      className="w-4 h-4 text-white bg-transparent border border-gray-400 focus:ring-2 focus:ring-white"
                    />
                    <span className="text-lg font-medium">${filters.minPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-medium">${filters.maxPrice.toFixed(2)}</span>
                    <input
                      type="radio"
                      name="priceRange"
                      className="w-4 h-4 text-white bg-transparent border border-gray-400 focus:ring-2 focus:ring-white"
                    />
                  </div>
                </div>

                {/* Price Range Slider */}
                <div className="mt-4">
                  <input
                    type="range"
                    min="0"
                    max="899"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange("maxPrice", Number.parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterDrawer
