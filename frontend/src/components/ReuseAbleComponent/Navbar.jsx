"use client"

import { useState } from "react"
import { Instagram, Twitter, Youtube, Facebook, Linkedin, ChevronDown, Search, ShoppingCart, Menu } from "lucide-react"
import CartDrawer from "./CartDrawer"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [coachingDropdownOpen, setCoachingDropdownOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <nav className="w-full bg-white">
        {/* Top Bar */}
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10 text-sm">
              {/* Left - Member Login & News */}
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-900 hover:text-black relative group transition-colors duration-200">
                  MEMBER LOGIN
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="text-gray-900 hover:text-black relative group transition-colors duration-200">
                  NEWS
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>

              {/* Center - Social Icons */}
              <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-black group transition-colors duration-200">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  {/* <Pinterest className="w-4 h-4" /> */}
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              {/* Right - Country Selector */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 text-gray-700">
                  <span className="text-lg">🇺🇸</span>
                  <span className="hidden sm:inline">United States (USD $)</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-black">
          <div className=" px-4 md:px-20">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link to="/" className="w-20 flex-shrink-0">
                <img src="/logo.png" alt="" />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex text-lg items-center space-x-8">
                <Link
                  className="text-white hover:text-gray-300 font-medium relative group transition-colors duration-200"
                  to="/join-our-movement"
                >
                  Join
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>

                <Link to='/news' className="text-gray-300 hover:text-white font-medium relative group transition-colors duration-200">
                  News
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-white font-medium relative group transition-colors duration-200 flex items-center"
                  onMouseEnter={() => setCoachingDropdownOpen(true)}
                  onMouseLeave={() => setCoachingDropdownOpen(false)}
                >
                  Coaching
                  <ChevronDown className="w-4 h-4 ml-1" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  {/* Dropdown */}
                  {coachingDropdownOpen && (
                    <div
                      className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg py-8 px-8 min-w-[500px] flex gap-18 z-50"
                      onMouseEnter={() => setCoachingDropdownOpen(true)}
                      onMouseLeave={() => setCoachingDropdownOpen(false)}
                    >
                      <div className="px-4  space-y-4">
                        <h5 className="text-black">USA</h5>
                        <div className="text-gray-500 space-y-2">
                          <Link href="#">MIKE MALASKA -AZ</Link>
                          <Link href="#">MIKE MALASKA -AZ</Link>
                        </div>
                      </div>
                      <div className="text-black space-y-4">
                        <h5 className="text-black">INTERNATIONAL</h5>
                        <div className="space-y-2 text-gray-500">
                          <Link href="#">MATT BAKER -UK</Link>
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
                <Link
                  className="text-gray-300 hover:text-white font-medium relative group transition-colors duration-200 border-b-2 border-black"
                  to="/about-us"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white font-medium relative group transition-colors duration-200"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white font-medium relative group transition-colors duration-200"
                >
                  Member
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              <Link to='/all-product' className="text-white font-medium">
                  Pro Shop
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>

              {/* Right Icons */}
              <div className="flex items-center space-x-4">
                <button className="text-gray-300 hover:text-gray-500 transition-colors duration-200">
                  <Search className="w-5 h-5" />
                </button>
            <div 
             onClick={() => setCartOpen(true)}
            className=" relative">
                  <button
                 
                  className="text-gray-300 hover:text-gray-500 transition-colors duration-200"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <span className="text-gray-300 top-3 left-3 text-center  absolute text-xs bg-[#C51518] w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </div>

                {/* Mobile menu button */}
                <button
                  className="md:hidden text-gray-600 hover:text-black transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Open Menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black px-4 pb-4">
              <div className="flex flex-col space-y-4 mt-2">
                <Link href="/join-our-movement" className="text-white font-medium">
                  Join
                </Link>
                <a href="#" className="text-white font-medium">
                  News
                </a>
                <a href="#" className="text-white font-medium">
                  Coaching
                </a>
                <Link href="/about-us" className="text-white font-medium">
                  About
                </Link>
                <a href="#" className="text-white font-medium">
                  Contact
                </a>
                <a href="#" className="text-white font-medium">
                  Member
                </a>
                <Link to='/all-product' className="text-white font-medium">
                  Pro Shop
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
