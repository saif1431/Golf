"use client"

import { FilterIcon } from "lucide-react"
import { useState } from "react"
import FilterDrawer from "./FilterDrawer"


function FilterProduct() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="">
      <h1 className="lg:text-5xl text-3xl text-center font-bold archivo-black-regular">ALL PRODUCTS</h1>
      <div className="flex justify-between items-center space-x-8 mt-8">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center border border-black px-6 py-2 mt-4 ml-4 hover:bg-black hover:text-white transition-colors"
        >
          <FilterIcon className="w-4 h-4 mr-2" />
          Filter
        </button>
        <p>
          <span>22</span>
          Product
        </p>
        <select className="border border-gray-300 rounded-md py-2 w-56 mt-2" name="filter" id="">
          <option value="all">All</option>
          <option value="category1">Featured</option>
          <option value="category1">Sort</option>
          <option value="">Best Selling</option>
          <option value="">Alphabetically A-Z</option>
          <option value="">Alphabetically Z-A</option>
          <option value="">Price Low to High</option>
          <option value="">Price High to Low </option>
          <option value="">Date old to New </option>
          <option value="">Date new to Old </option>
    
        </select>
      </div>

      <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
  )
}

export default FilterProduct
