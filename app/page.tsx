




// "use client"

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
//   const [scale, setScale] = useState(0.5)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!dashboardRef.current) return

//       const dashboardRect = dashboardRef.current.getBoundingClientRect()
//       const viewportHeight = window.innerHeight

//       // Dashboard shows at 80vh (20% visible), zoom starts from scroll position 0
//       const triggerStart = viewportHeight * 0.8
//       const triggerEnd = viewportHeight * -1

//       let newScale = 0.5

//       if (dashboardRect.top <= triggerStart) {
//         // Calculate progress from dashboard appearing to fully in view
//         const progress = (triggerStart - dashboardRect.top) / (triggerStart - triggerEnd)
//         newScale = Math.min(1, 0.5 + Math.max(0, progress) * 0.5)
//       }

//       setScale(newScale)
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <main>
//       <section className="h-[80vh] bg-gradient-to-b from-[#3d4a62] via-[#1a1f2e] to-[#000000]">
//         <Header />
//         <Hero />
//       </section>
//       <div ref={dashboardRef}>
//         <Dashboard scale={scale} />
//         <ValueProposition />
//       <Products />
//       <IndustriesServed />
//       <VideoSection />
//       <Features />
//       <Statistics />
//       <Contact />
//       <Footer />
//       </div>
//     </main>
//   )
// }




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
  const [scale, setScale] = useState(0.7)

  useEffect(() => {
    const handleScroll = () => {
      if (!dashboardRef.current) return

      const dashboardRect = dashboardRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Dashboard shows at 80vh (20% visible), zoom starts from scroll position 0
      const triggerStart = viewportHeight * 0.8
      const triggerEnd = viewportHeight * -1

      let newScale = 0.7
      if (dashboardRect.top <= triggerStart) {
        // Calculate progress from dashboard appearing to fully in view
        const progress = (triggerStart - dashboardRect.top) / (triggerStart - triggerEnd)
        newScale = Math.min(1.43, 0.7 + Math.max(0, progress) * 0.73)
      }

      setScale(newScale)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main>
      <section className="h-[80vh] bg-gradient-to-b from-[#3d4a62] via-[#1a1f2e] to-[#000000]">
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
