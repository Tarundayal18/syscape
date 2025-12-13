
// "use client"

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
//       {/* Animated background gradient orbs */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto text-center">
//         <div className="mb-8">
//           {/* <h2 className="text-base sm:text-lg text-gray-400 font-medium mb-4 text-balance">WHAT IS</h2> */}
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">Unified Platforms for Your Technology World</h1>
//           <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto text-balance">
//             Holistic observability, security, and operational control for your entire technology estate.
//           </p>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
//           <button className="px-8 py-3 bg-[#4a5f8f] hover:bg-[#556a9d] text-white rounded-lg transition-all transform hover:scale-105 font-medium text-sm sm:text-base">
//             Book a Free Demo
//           </button>
//           <button className="px-8 py-3 bg-transparent border border-gray-600 hover:border-gray-400 text-white rounded-lg transition-colors flex items-center gap-2 font-medium text-sm sm:text-base">
//             <span className="text-lg">▶</span>
//             Watch Video
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let scrollTimeout: any

    const handleScroll = () => {
      setIsScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden ${
        isScrolling ? "pause-animations" : ""
      }`}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Floating circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm animate-float"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0 animate-gridMove"
          style={{
            backgroundImage:
              "linear-gradient(rgba(110,167,238,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(110,167,238,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-16 h-16 md:w-24 md:h-24 border-2 border-blue-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-[15%] w-20 h-20 md:w-32 md:h-32 border-2 border-cyan-400/20 rounded-full animate-pulse"></div>
        <div
          className="absolute top-[60%] left-[20%] w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500/10 to-transparent rotate-12 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-[30%] right-[25%] w-24 h-24 md:w-32 md:h-32 border border-blue-300/20 animate-spin-slow"
          style={{ animationDelay: "2s", animationDuration: "25s" }}
        ></div>
      </div>

      {/* Light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-shimmer"></div>
        <div
          className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-shimmer"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300/20 to-transparent animate-shimmer"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Particle stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Unified Platforms for Your Technology World
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Holistic observability, security, and operational control for your entire technology estate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="px-8 py-3 bg-[#4a5f8f] hover:bg-[#556a9d] text-white rounded-lg transition-transform hover:scale-105">
            Book a Free Demo
          </button>
          <button className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:border-gray-400">
            ▶ Watch Video
          </button>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .pause-animations * {
          animation-play-state: paused !important;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-20px, 10px); }
          66% { transform: translate(20px, -10px); }
        }

        @keyframes gridMove {
          from { transform: translateY(0); }
          to { transform: translateY(50px); }
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 4s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-gridMove {
          animation: gridMove 20s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
