import React, { useState } from "react";
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Facebook, 
  // Pinterest, 
  Linkedin, 
  ChevronDown, 
  Search, 
  ShoppingCart, 
  Menu 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to='/' className="w-20 flex-shrink-0">
              <img src="/logo.png" alt="" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link className="text-white hover:text-gray-300 font-medium relative group transition-colors duration-200" to='/join-our-movement'>
              Join
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            
              <a
                href="#"
                className="text-gray-300 hover:text-white font-medium relative group transition-colors duration-200"
              >
                News
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white font-medium relative group transition-colors duration-200"
              >
                Coaching
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
              <Link className="text-gray-300 hover:text-white font-medium relative group transition-colors duration-200 border-b-2 border-black" to='/about-us'>
              About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span></Link>
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
              <a
                href="#"
                className="text-gray-300 hover:text-white font-medium relative group transition-colors duration-200"
              >
                Pro Shop
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-gray-500 transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-gray-300 hover:text-gray-500 transition-colors duration-200">
                <ShoppingCart className="w-5 h-5" />
              </button>

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
              <a href="#" className="text-white font-medium">Join</a>
              <a href="#" className="text-white font-medium">News</a>
              <a href="#" className="text-white font-medium">Coaching</a>
              <a href="#" className="text-white font-medium">About</a>
              <a href="#" className="text-white font-medium">Contact</a>
              <a href="#" className="text-white font-medium">Member</a>
              <a href="#" className="text-white font-medium">Pro Shop</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}