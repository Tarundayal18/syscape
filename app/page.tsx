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
// import MainCaseStudies from "@/components/maincasestudy"

// export default function Home() {
//   const dashboardRef = useRef<HTMLDivElement>(null)
//   const [scale, setScale] = useState(0.7)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!dashboardRef.current) return

//       const dashboardRect = dashboardRef.current.getBoundingClientRect()
//       const viewportHeight = window.innerHeight

//       const triggerStart = viewportHeight * 0.8
//       const triggerEnd = viewportHeight * -1

//       let newScale = 0.7
//       if (dashboardRect.top <= triggerStart) {
//         const progress = (triggerStart - dashboardRect.top) / (triggerStart - triggerEnd)
//         newScale = Math.min(1.43, 0.7 + Math.max(0, progress) * 0.73)
//       }

//       setScale(newScale)
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <main>
//       {/* UPDATED GRADIENT WITH #304866 */}
//       <section className="h-[80vh] bg-gradient-to-b from-[#6ea7ee] via-[#22304a] to-black">
//         <Header />
//         <Hero />
//       </section>

//       <div ref={dashboardRef}>
//         <Dashboard scale={scale} />
//       </div>

//       <ValueProposition />
//       <Products />
//       <IndustriesServed />
//       <VideoSection />
//       <Features />
//       <MainCaseStudies />
//       <Statistics />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }







// "use client"

// import { useEffect, useRef, useState } from "react"
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
// import MainCaseStudies from "@/components/maincasestudy"

// export default function Home() {
//   const dashboardRef = useRef<HTMLDivElement>(null)
//   const [scale, setScale] = useState(0.5)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!dashboardRef.current) return

//       const dashboardTop = dashboardRef.current.offsetTop
//       const scrollPosition = window.scrollY
//       const windowHeight = window.innerHeight

//       // Start scaling when dashboard section comes into view
//       const triggerPoint = dashboardTop - windowHeight
//       const endPoint = dashboardTop - windowHeight / 2

//       if (scrollPosition < triggerPoint) {
//         setScale(0.5)
//       } else if (scrollPosition >= triggerPoint && scrollPosition <= endPoint) {
//         // Interpolate scale from 0.5 to 1.0 as user scrolls
//         const progress = (scrollPosition - triggerPoint) / (endPoint - triggerPoint)
//         const newScale = 0.5 + progress * 0.5
//         setScale(Math.min(newScale, 1.0))
//       } else {
//         setScale(1.0)
//       }
//     }

//     handleScroll()
//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <main className="min-h-screen">
//       <section className="h-[80vh] bg-gradient-to-b from-[#6ea7ee] via-[#22304a] to-black">
//         <Header />
//         <Hero />
//       </section>
//       <div ref={dashboardRef}>
//         <Dashboard scale={scale} />
//       </div>

//         <ValueProposition />
//       <Products />
//       <IndustriesServed />
//       <VideoSection />
//       <Features />
//       <MainCaseStudies />
//       <Statistics />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }





"use client"

import { useEffect, useRef, useState } from "react"
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
import MainCaseStudies from "@/components/maincasestudy"

export default function Home() {
  const dashboardRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.5)

  useEffect(() => {
    const handleScroll = () => {
      if (!dashboardRef.current) return

      const dashboardTop = dashboardRef.current.offsetTop
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Start scaling when dashboard section comes into view
      const triggerPoint = dashboardTop - windowHeight
      const endPoint = dashboardTop - windowHeight / 2

      if (scrollPosition < triggerPoint) {
        setScale(0.5)
      } else if (scrollPosition >= triggerPoint && scrollPosition <= endPoint) {
        // Interpolate scale from 0.5 to 1.0 as user scrolls
        const progress = (scrollPosition - triggerPoint) / (endPoint - triggerPoint)
        const newScale = 0.5 + progress * 0.5
        setScale(Math.min(newScale, 1.0))
      } else {
        setScale(1.0)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <section className="h-[50vh] md:h-[80vh] bg-gradient-to-b from-[#6ea7ee] via-[#22304a] to-black">
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
      <MainCaseStudies />
      <Statistics />
      <Contact />
      <Footer />
    </main>
  )
}
