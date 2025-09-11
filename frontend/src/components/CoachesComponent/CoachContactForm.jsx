 function CoachContactForm() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <h1 className="text-white text-2xl font-semibold text-center mb-8 leading-tight">
          Private Lesson Request
          <br />
          for Matt Baker
        </h1>

        <form className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-600 text-white pb-2 focus:border-gray-400 focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-600 text-white pb-2 focus:border-gray-400 focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-600 text-white pb-2 focus:border-gray-400 focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">
              <span className="inline-flex items-center gap-2">
                🇺🇸 Phone <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="tel"
              className="w-full bg-transparent border-b border-gray-600 text-white pb-2 focus:border-gray-400 focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-4">
              Select a Location: <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <label className="flex items-center text-white cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-transparent border border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="ml-3">Zoom Lesson</span>
              </label>
              <label className="flex items-center text-white cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-transparent border border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="ml-3">In Person Lesson</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">
              Request a Date and Time <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-600 text-white pb-2 focus:border-gray-400 focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Additional Comments or Questions for Brian</label>
            <textarea
              rows="4"
              className="w-full bg-transparent border-b border-gray-600 text-white pb-2 focus:border-gray-400 focus:outline-none transition-colors resize-none"
              placeholder=""
            />
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-200 border border-gray-300 rounded p-4 flex items-center gap-3">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-gray-700 text-sm">I'm not a robot</span>
              <div className="text-xs text-gray-500">
                <div>reCAPTCHA</div>
                <div>Privacy - Terms</div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition-colors duration-200"
          >
            SEND REQUEST
          </button>
        </form>
      </div>
    </div>
  )
}


export default CoachContactForm
