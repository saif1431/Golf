"use client"

import { useState } from "react"
import { Instagram, Twitter, Youtube, Facebook, Linkedin, ChevronDown, Menu } from "lucide-react"
import CartDrawer from "./CartDrawer"
import { Link } from "react-router-dom"

export default function MemberNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [membershipOpen, setMembershipOpen] = useState(false)
  const [mSystemOpen, setMSystemOpen] = useState(false)
  const [playGameOpen, setPlayGameOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <nav className="w-full bg-white">
      

        {/* Main Navigation */}
        <div className="bg-black relative">
          <div className=" px-4 md:px-20">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link to="/" className="w-20 flex-shrink-0">
                <img src="/logo.png" alt="" />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex text-md items-center space-x-8">
                {/* MemberShip with dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setMembershipOpen(true)}
                  onMouseLeave={() => setMembershipOpen(false)}
                >
                  <Link
                    to="/join-our-movement"
                    className="text-white hover:text-gray-300 font-medium relative group transition-colors duration-200 flex items-center"
                  >
                    MemberShip
                    <ChevronDown className="w-4 h-4 ml-1" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>

                  {membershipOpen && (
                    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg py-4 rounded-md min-w-[220px] z-50">
                      <Link to="/membership/benefits" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Benefits</Link>
                      <Link to="/membership/pricing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Pricing</Link>
                      <Link to="/membership/faqs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">FAQs</Link>
                    </div>
                  )}
                </div>

                {/* M-System with dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setMSystemOpen(true)}
                  onMouseLeave={() => setMSystemOpen(false)}
                >
                  <Link
                    to="/m-system"
                    className="text-gray-300 hover:text-white font-medium relative group transition-colors duration-200 flex items-center"
                  >
                    M-System
                    <ChevronDown className="w-4 h-4 ml-1" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>

                  {mSystemOpen && (
                    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg py-4 rounded-md min-w-[220px] z-50">
                      <Link to="/m-system/overview" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Overview</Link>
                      <Link to="/m-system/courses" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Courses</Link>
                      <Link to="/m-system/videos" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Videos</Link>
                    </div>
                  )}
                </div>
<Link to='/all-product' className="text-white font-medium">
                Sports Connect
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* Play the Game with dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setPlayGameOpen(true)}
                  onMouseLeave={() => setPlayGameOpen(false)}
                >
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-white font-medium group transition-colors duration-200 flex items-center"
                  >
                    Play the Game
                    <ChevronDown className="w-4 h-4 ml-1" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>

                  {playGameOpen && (
                    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg py-4 rounded-md min-w-[220px] z-50">
                      <Link to="/play/competitions" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Competitions</Link>
                      <Link to="/play/scorecard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Scorecard</Link>
                      <Link to="/play/community" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Community</Link>
                    </div>
                  )}
                </div>

                <Link to='/all-product' className="text-white font-medium">
                  Pro Shop
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link to='/all-product' className="text-white font-medium">
                  Search
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>

              {/* Right Icons */}
              <div className="flex items-center space-x-4">
                <Link to='/member/register'>
                <button className="text-white">Sign in</button>
                </Link>

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
                <Link to="/join-our-movement" className="text-white font-medium">
                  MemberShip
                </Link>
                <Link to="/m-system" className="text-white font-medium">
                  M-System
                </Link>
                <Link to="/play" className="text-white font-medium">
                  Play the Game
                </Link>
                <Link to="/about-us" className="text-white font-medium">
                  About
                </Link>
                <a href="#" className="text-white font-medium">
                  Contact
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