
"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* <h2 className="text-base sm:text-lg text-gray-400 font-medium mb-4 text-balance">WHAT IS</h2> */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">Unified Platforms for Your Technology World</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto text-balance">
            Holistic observability, security, and operational control for your entire technology estate.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <button className="px-8 py-3 bg-[#4a5f8f] hover:bg-[#556a9d] text-white rounded-lg transition-all transform hover:scale-105 font-medium text-sm sm:text-base">
            Book a Free Demo
          </button>
          <button className="px-8 py-3 bg-transparent border border-gray-600 hover:border-gray-400 text-white rounded-lg transition-colors flex items-center gap-2 font-medium text-sm sm:text-base">
            <span className="text-lg">▶</span>
            Watch Video
          </button>
        </div>
      </div>
    </section>
  )
}
