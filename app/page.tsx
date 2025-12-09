"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Dashboard from "@/components/dashboard"
import ValueProposition from "@/components/value-proposition"
import Products from "@/components/products"
import IndustriesServed from "@/components/industries-served"
import Footer from "@/components/footer"
import Statistics from "@/components/statistics"
import Features from "@/components/features"
import Contact from "@/components/contact"
import VideoSection from "@/components/videosection"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const dashboardRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.3)

  useEffect(() => {
    const handleScroll = () => {
      if (!dashboardRef.current) return

      const dashboardRect = dashboardRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // When dashboard top is at 80% of viewport, start scaling from 0.3
      // When dashboard top reaches 0, scale should be 1 (100vh)
      const triggerStart = viewportHeight * 0.8
      const triggerEnd = -viewportHeight * 0.2

      let newScale = 0.3

      if (dashboardRect.top < triggerStart) {
        // Calculate progress smoothly from 0 to 1
        const progress = (triggerStart - dashboardRect.top) / (triggerStart - triggerEnd)
        newScale = Math.min(1, 0.3 + Math.max(0, progress) * 0.7)
      }

      setScale(newScale)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main>
      <section className="min-h-screen bg-gradient-to-b from-[#3d4a62] via-[#1a1f2e] to-[#000000]">
        <Header />
        <Hero />
      </section>
      <div ref={dashboardRef}>
        <Dashboard scale={scale} />
      </div>
      <ValueProposition />
      <Products />
      <IndustriesServed />
      <VideoSection />
      <Features />
      <Statistics />
      <Contact />
      <Footer />
    </main>
  )
}





// "use client"

// import type React from "react"

// import Header from "@/components/header"
// import Hero from "@/components/hero"
// import Dashboard from "@/components/dashboard"
// import ValueProposition from "@/components/value-proposition"
// import Products from "@/components/products"
// import IndustriesServed from "@/components/industries-served"
// import Footer from "@/components/footer"
// import Statistics from "@/components/statistics"
// import Features from "@/components/features"
// import Contact from "@/components/contact"
// import VideoSection from "@/components/videosection"
// import { useEffect, useRef, useState } from "react"

// export default function Home() {
//   const dashboardRef = useRef<HTMLDivElement>(null)
//   const [scale, setScale] = useState(1)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!dashboardRef.current) return

//       // Get dashboard section position relative to viewport
//       const dashboardRect = dashboardRef.current.getBoundingClientRect()
//       const viewportHeight = window.innerHeight

//       // Calculate when dashboard starts entering and fully enters
//       // Start scaling when dashboard is 80% from top (hero section)
//       // End scaling when dashboard reaches top of viewport
//       const dashboardTop = dashboardRect.top
//       const triggerPoint = viewportHeight * 0.8 // Start when dashboard is 80% down
//       const endPoint = 0 // End when dashboard reaches top

//       if (dashboardTop <= triggerPoint && dashboardTop > endPoint) {
//         // Calculate progress (0 to 1)
//         const progress = (triggerPoint - dashboardTop) / (triggerPoint - endPoint)

//         // Start scale at 0.3 and end at 1
//         const newScale = 0.3 + progress * 0.7
//         setScale(newScale)
//       } else if (dashboardTop <= endPoint) {
//         setScale(1)
//       } else {
//         setScale(0.3)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <main>
//       <section className="min-h-screen bg-gradient-to-b from-[#3d4a62] via-[#1a1f2e] to-[#000000]">
//         <Header />
//         <Hero />
//       </section>
//       <div ref={dashboardRef} style={{ "--zoom-scale": scale } as React.CSSProperties & { "--zoom-scale": number }}>
//         <Dashboard scale={scale} />
//       </div>
//        <ValueProposition />
//       <Products />
//       <IndustriesServed />
//       <VideoSection />
//       <Features />
//       <Statistics />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }
