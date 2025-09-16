export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-6 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <a href="mailto:info@malaskagolf.com" className="block text-white hover:text-gray-300 underline">
             defyeliteathletics@gmail.com
            </a>
            <div>
              <span className="text-gray-300">TEL: </span>
              <a href="tel:888.899.4397" className="text-white hover:text-gray-300 underline">
              (telephone number TBD)
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg tracking-wider mb-6">LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Pro Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                Coaching Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                inside would have nutrition counseling
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
               swing analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
              remote coaching
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          {/* <div>
            <h3 className="text-white font-bold text-lg tracking-wider mb-6">POLICIES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  TERMS OF SERVICE
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  CANCELATION POLICY
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  REFUND POLICY
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  DO NOT SELL MY PERSONAL INFORMATION
                </a>
              </li>
            </ul>
          </div> */}

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-white font-bold text-lg tracking-wider mb-6">
           My socials
           
            </h3>
            <p className="text-gray-300 mb-6">Subscribe to find out about special offers and promotions.</p>
            <div className="flex mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white"
              />
              <button className="ml-4 text-white hover:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          {/* Country/Currency selector */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-6 h-4 bg-red-600 relative">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-red-600"></div>
                  <div className="w-1/2 bg-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600"></div>
                  </div>
                </div>
              </div>
              <span>United States (USD $)</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Payment methods */}
          <div className="flex gap-3 lg:gap-0 justify-center items-center space-x-4 mb-8 flex-wrap">
            <div className="bg-white rounded px-2 py-1">
              <span className="text-black font-bold text-sm">amazon</span>
            </div>
            <div className="bg-blue-600 rounded px-2 py-1">
              <span className="text-white font-bold text-xs">AMERICAN EXPRESS</span>
            </div>
            <div className="bg-black rounded px-2 py-1">
              <span className="text-white font-bold text-sm">Apple Pay</span>
            </div>
            <div className="bg-blue-500 rounded px-2 py-1">
              <span className="text-white font-bold text-xs">Diners Club</span>
            </div>
            <div className="bg-orange-500 rounded px-2 py-1">
              <span className="text-white font-bold text-xs">DISCOVER</span>
            </div>
            <div className="bg-white rounded px-2 py-1">
              <span className="text-blue-600 font-bold text-sm">G Pay</span>
            </div>
            <div className="bg-red-600 rounded px-2 py-1">
              <span className="text-white font-bold text-xs">Mastercard</span>
            </div>
            <div className="bg-blue-600 rounded px-2 py-1">
              <span className="text-white font-bold text-xs">PayPal</span>
            </div>
            <div className="bg-purple-600 rounded px-2 py-1">
              <span className="text-white font-bold text-xs">Shop Pay</span>
            </div>
            <div className="bg-blue-800 rounded px-2 py-1">
              <span className="text-white font-bold text-xs">VISA</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p>© 2025 Malaska Golf</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
