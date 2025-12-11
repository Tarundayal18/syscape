// "use client"

// import { useEffect, useState } from "react"

// export default function HeroSection() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [scrollY, setScrollY] = useState(0)

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }

//     const handleScroll = () => {
//       setScrollY(window.scrollY)
//     }

//     window.addEventListener("mousemove", handleMouseMove)
//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove)
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden bg-gradient-to-b from-[#3d4a62] to-black">
//       {/* Floating dots and particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-32 right-1/4 w-1 h-1 rounded-full bg-white opacity-60 animate-pulse" />
//         <div className="absolute top-40 right-1/3 w-1 h-1 rounded-full bg-cyan-300 opacity-40 animate-pulse delay-150" />
//         <div className="absolute top-1/3 right-20 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-50 animate-pulse delay-300" />
//         <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-blue-300 opacity-30 animate-pulse delay-500" />
//         <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-white opacity-40 animate-pulse delay-700" />
//         <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 opacity-30 animate-pulse delay-1000" />
//       </div>

//       {/* Animated blur circles */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-32 left-1/4 w-96 h-96 bg-[#495f8f]/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-[#495f8f]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto text-center">
//         <div
//           className="mb-8"
//           style={{
//             opacity: Math.max(0, Math.min(1, 1 - scrollY / 300)),
//             transform: `translateY(${scrollY * 0.3}px)`,
//           }}
//         >
//           <h2 className="text-lg sm:text-xl text-gray-400 font-medium mb-4 text-balance">WHAT IS</h2>
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance" style={{ color: "#212c3b" }}>
//             INDUSTRIES?
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-balance">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//           </p>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
//           <button className="px-8 py-3 bg-[#495f8f] hover:bg-[#556a9d] text-white rounded-lg transition-all transform hover:scale-105 font-medium">
//             Learn More
//           </button>
//           <button className="px-8 py-3 bg-transparent border border-gray-600 hover:border-gray-400 text-white rounded-lg transition-colors flex items-center gap-2 font-medium">
//             <span className="text-lg">▶</span>
//             Our Story
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden bg-gradient-to-b from-[#3d4a62] to-black hero-fade">
      {/* Floating dots and particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-1/4 w-1 h-1 rounded-full bg-white opacity-60 animate-pulse" />
        <div className="absolute top-40 right-1/3 w-1 h-1 rounded-full bg-cyan-300 opacity-40 animate-pulse delay-150" />
        <div className="absolute top-1/3 right-20 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-50 animate-pulse delay-300" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-blue-300 opacity-30 animate-pulse delay-500" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-white opacity-40 animate-pulse delay-700" />
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-300 opacity-30 animate-pulse delay-1000" />
      </div>

      {/* Animated blur circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-[#495f8f]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-[#495f8f]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Right side - Image (Absolutely positioned) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-end pointer-events-none">
        <div
          className="relative w-full max-w-xl xl:max-w-3xl top-24"
         
        >
          <img
            src="/industries/main.png"
            alt="Tech visualization"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />

          {/* Updated gradient glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#3d4a62]/40 to-black/40 blur-3xl"></div>
        </div>


      </div>

      {/* Center - Text content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center -translate-y-25">
        <div
          className="mb-8"
          style={{
            opacity: Math.max(0, Math.min(1, 1 - scrollY / 300)),
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
            WHAT IS
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
            LOREM IPSUM?
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-balance">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>


      {/* Mobile - Image at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden w-104 sm:w-120">
        <img
          src="/industries/main.png"
          alt="Tech visualization"
          className="w-full h-auto object-contain drop-shadow-2xl opacity-80"
        />
      </div>
    </section>
  )
}