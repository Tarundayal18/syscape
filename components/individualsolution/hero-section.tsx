
"use client"

import { useEffect, useState } from "react"

export default function IndiSolutionHeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/individualsolution/main.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d3e54]/80 via-[#1e2a3a]/70 to-[#0a0e15]/90"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-32 right-1/4 w-1 h-1 rounded-full bg-white opacity-60 animate-pulse" />
        <div className="absolute top-40 right-1/3 w-1 h-1 rounded-full bg-cyan-300 opacity-40 animate-pulse" style={{ animationDelay: '0.15s' }} />
        <div className="absolute top-1/3 right-20 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-50 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-blue-300 opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-white opacity-40 animate-pulse" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Left side particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-white opacity-50 animate-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-40 animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-blue-300 opacity-50 animate-pulse" style={{ animationDelay: '0.8s' }} />
      </div>

      {/* Animated blur circles */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-[#495f8f]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-[#495f8f]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Center - Text content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <div
          className="mb-8"
          style={{
            opacity: Math.max(0, Math.min(1, 1 - scrollY / 300)),
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <h2 className="text-lg sm:text-xl text-gray-300 font-medium mb-4 text-balance tracking-wider">
            WHAT IS
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance tracking-tight text-white drop-shadow-2xl">
            LOREM IPSUM?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200/90 max-w-2xl mx-auto text-balance leading-relaxed px-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-12 px-4">
          <button className="w-full sm:w-auto px-8 py-3 bg-[#495f8f] hover:bg-[#556a9d] text-white rounded-lg transition-all transform hover:scale-105 font-medium shadow-lg">
            Learn More
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-gray-400 hover:border-gray-200 text-white rounded-lg transition-colors flex items-center justify-center gap-2 font-medium">
            <span className="text-lg">▶</span>
            Our Story
          </button>
        </div>
      </div>
    </section>
  )
}