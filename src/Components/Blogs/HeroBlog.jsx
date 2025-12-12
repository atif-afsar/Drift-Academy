import React from 'react'

const HeroBlog = () => {
  const handleReadNow = () => {
    const blogsSection = document.querySelector('[data-blogs-grid]')
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: window.scrollY + 800, behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full bg-gradient-to-b from-[#0A2540] to-[#1a1a1a] py-12 md:py-20 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/images/jee.jpg"
              alt="Master Your Board Exams"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Master Your Board <br />
              <span className="text-[#f6821c]">Exams: 5 Proven</span>
              <br /> Study Strategies
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Discover the techniques our top performers use to excel. Cut through the noise and focus on what matters most for your exam preparation.
            </p>
            <button 
              onClick={handleReadNow}
              className="bg-[#f6821c] hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Read Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBlog
