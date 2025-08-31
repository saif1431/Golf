import React, { useState } from 'react';
import { Menu, X, ChevronDown, Play, BookOpen, Users, Calendar, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-black text-white relative z-50">
      {/* Top bar with contact info */}
      <div className="bg-gray-900 text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-orange-500" />
              Call: (555) 123-4567
            </span>
            <span>📧 info@golfinstruction.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Us:</span>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-orange-500 transition-colors">FB</a>
              <a href="#" className="hover:text-orange-500 transition-colors">IG</a>
              <a href="#" className="hover:text-orange-500 transition-colors">YT</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex w-20">
           <img src="/logo.png" alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="hover:text-orange-500 transition-colors font-medium">
              HOME
            </a>
            
            {/* Lessons Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center hover:text-orange-500 transition-colors font-medium"
                onMouseEnter={() => setActiveDropdown('lessons')}
              >
                LESSONS
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {activeDropdown === 'lessons' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    <a href="#" className="block px-4 py-3 hover:bg-gray-800 hover:text-orange-500 transition-colors">
                      <div className="flex items-center">
                        <Play className="w-4 h-4 mr-3 text-orange-500" />
                        <div>
                          <div className="font-medium">Private Lessons</div>
                          <div className="text-sm text-gray-400">One-on-one instruction</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 hover:bg-gray-800 hover:text-orange-500 transition-colors">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-3 text-orange-500" />
                        <div>
                          <div className="font-medium">Group Lessons</div>
                          <div className="text-sm text-gray-400">Learn with friends</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 hover:bg-gray-800 hover:text-orange-500 transition-colors">
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-3 text-orange-500" />
                        <div>
                          <div className="font-medium">Online Course</div>
                          <div className="text-sm text-gray-400">Digital instruction</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center hover:text-orange-500 transition-colors font-medium"
                onMouseEnter={() => setActiveDropdown('programs')}
              >
                PROGRAMS
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {activeDropdown === 'programs' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    <a href="#" className="block px-4 py-3 hover:bg-gray-800 hover:text-orange-500 transition-colors">
                      Beginner Program
                    </a>
                    <a href="#" className="block px-4 py-3 hover:bg-gray-800 hover:text-orange-500 transition-colors">
                      Intermediate Program
                    </a>
                    <a href="#" className="block px-4 py-3 hover:bg-gray-800 hover:text-orange-500 transition-colors">
                      Advanced Program
                    </a>
                    <a href="#" className="block px-4 py-3 hover:bg-gray-800 hover:text-orange-500 transition-colors">
                      Junior Golf
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-orange-500 transition-colors font-medium">
              ABOUT
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors font-medium">
              TESTIMONIALS
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors font-medium">
              CONTACT
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              BOOK LESSON
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-orange-500 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-700">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-white hover:text-orange-500 transition-colors py-2 border-b border-gray-700">
                HOME
              </a>
              
              <div>
                <button 
                  onClick={() => handleDropdown('mobile-lessons')}
                  className="flex items-center justify-between w-full text-white hover:text-orange-500 transition-colors py-2 border-b border-gray-700"
                >
                  LESSONS
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-lessons' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-lessons' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors py-1">
                      Private Lessons
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors py-1">
                      Group Lessons
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors py-1">
                      Online Course
                    </a>
                  </div>
                )}
              </div>

              <div>
                <button 
                  onClick={() => handleDropdown('mobile-programs')}
                  className="flex items-center justify-between w-full text-white hover:text-orange-500 transition-colors py-2 border-b border-gray-700"
                >
                  PROGRAMS
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-programs' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-programs' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors py-1">
                      Beginner Program
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors py-1">
                      Intermediate Program
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors py-1">
                      Advanced Program
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors py-1">
                      Junior Golf
                    </a>
                  </div>
                )}
              </div>

              <a href="#" className="block text-white hover:text-orange-500 transition-colors py-2 border-b border-gray-700">
                ABOUT
              </a>
              <a href="#" className="block text-white hover:text-orange-500 transition-colors py-2 border-b border-gray-700">
                TESTIMONIALS
              </a>
              <a href="#" className="block text-white hover:text-orange-500 transition-colors py-2 border-b border-gray-700">
                CONTACT
              </a>
              
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center mt-4">
                <Calendar className="w-4 h-4 mr-2" />
                BOOK LESSON
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;