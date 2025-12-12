
// "use client"

// import { useEffect, useState } from "react"
// import Header from "@/components/header"
// import Footer from "@/components/footer"

// export default function AboutPage() {
//   const [scrollY, setScrollY] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY)
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <main className="bg-black min-h-screen">
//       <Header />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden bg-gradient-to-b from-[#3d4a62] to-black">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-32 left-1/4 w-96 h-96 bg-[#495f8f]/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-[#495f8f]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto text-center">
//           <div
//             className="mb-8"
//             style={{
//               opacity: Math.max(0, Math.min(1, 1 - scrollY / 300)),
//               transform: `translateY(${scrollY * 0.3}px)`,
//             }}
//           >
//             <h2 className="text-lg sm:text-xl text-gray-400 font-medium mb-4 text-balance">ABOUT OUR COMPANY</h2>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
//               Pioneering the Future
//             </h1>
//             <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-6 text-balance">of Unified Operations</h1>
//             <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-balance">
//               We deliver holistic observability and operational control across the world’s most complex hybrid and industrial ecosystems.
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
//             <button className="px-8 py-3 bg-[#495f8f] hover:bg-[#556a9d] text-white rounded-lg transition-all transform hover:scale-105 font-medium">
//               Learn More
//             </button>
//             <button className="px-8 py-3 bg-transparent border border-gray-600 hover:border-gray-400 text-white rounded-lg transition-colors flex items-center gap-2 font-medium">
//               <span className="text-lg">▶</span>
//               Our Story
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
//         <div className="max-w-4xl mx-auto">
//           <div
//             className="text-center mb-16"
//             style={{
//               opacity: Math.max(0, Math.min(1, (scrollY - 200) / 250)),
//               transform: `translateY(${Math.max(-50, -50 + (scrollY - 200) / 10)}px)`,
//             }}
//           >
//             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Mission</h2>
//             <p className="text-lg text-gray-400 leading-relaxed">
//               To empower enterprises with AI-driven intelligence, transforming fragmented data into unified insight and automated action for unparalleled operational resilience. 
//             </p>
//           </div>

//           {/* Core Values */}
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { title: "Unified Observability", desc: "Breaking down silos to provide complete, cross-domain visibility across IT, physical infrastructure, network, and OT environments from a single command center." },
//               { title: "Intelligent Automation", desc: "Embedding predictive analytics, machine learning, and automation into every layer to enable proactive detection, faster root-cause analysis, and streamlined workflows." },
//               { title: "Operational Resilience", desc: "Delivering enterprise-grade fault tolerance, scalability, and security posture across legacy and modern, multivendor, hybrid deployments." },
//             ].map((value, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#1a1f2e] border border-gray-800 rounded-xl p-8 hover:border-[#495f8f]/50 transition-all"
//                 style={{
//                   opacity: Math.max(0, Math.min(1, (scrollY - 400 - idx * 60) / 250)),
//                   transform: `translateY(${Math.max(-50, -50 + (scrollY - 400 - idx * 60) / 10)}px)`,
//                 }}
//               >
//                 <div className="w-12 h-12 bg-[#495f8f]/20 rounded-lg mb-4 flex items-center justify-center">
//                   <div className="w-6 h-6 bg-[#495f8f] rounded-md"></div>
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
//                 <p className="text-gray-400">{value.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
//         <div className="max-w-6xl mx-auto">
//           <div
//             className="text-center mb-16"
//             style={{
//               opacity: Math.max(0, Math.min(1, (scrollY - 600) / 250)),
//               transform: `translateY(${Math.max(-50, -50 + (scrollY - 600) / 15)}px)`,
//             }}
//           >
//             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
//             <p className="text-lg text-gray-400">Talented individuals united by a common vision</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[1, 2, 3, 4].map((member) => (
//               <div
//                 key={member}
//                 className="bg-[#1a1f2e] border border-gray-800 rounded-xl overflow-hidden hover:border-[#495f8f]/50 transition-all"
//                 style={{
//                   opacity: Math.max(0, Math.min(1, (scrollY - 700 - member * 60) / 250)),
//                   transform: `translateY(${Math.max(-40, -40 + (scrollY - 700 - member * 60) / 12)}px)`,
//                 }}
//               >
//                 <div className="h-40 bg-gradient-to-br from-[#495f8f]/20 to-[#495f8f]/10"></div>
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-white mb-1">Team Member {member}</h3>
//                   <p className="text-[#495f8f] text-sm mb-4 font-medium">Role & Title</p>
//                   <p className="text-gray-500 text-sm">Passionate about building great products</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Impact Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#495f8f]/5 border-t border-gray-800">
//         <div className="max-w-6xl mx-auto">
//           <div
//             className="text-center mb-16"
//             style={{
//               opacity: Math.max(0, Math.min(1, (scrollY - 900) / 250)),
//               transform: `translateY(${Math.max(-50, -50 + (scrollY - 900) / 15)}px)`,
//             }}
//           >
//             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Impact</h2>
//             <p className="text-lg text-gray-400">Making a difference worldwide</p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               { metric: "10K+", label: "Companies Trust Us" },
//               { metric: "50M+", label: "Deals Managed" },
//               { metric: "180+", label: "Countries Served" },
//               { metric: "99.9%", label: "Uptime Guaranteed" },
//             ].map((stat, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#1a1f2e] border border-[#495f8f]/20 rounded-xl p-8 text-center hover:border-[#495f8f]/50 transition-all"
//                 style={{
//                   opacity: Math.max(0, Math.min(1, (scrollY - 1000 - idx * 50) / 250)),
//                   transform: `scale(${Math.max(0.9, Math.min(1, 0.9 + (scrollY - 1000 - idx * 50) / 2500))})`,
//                 }}
//               >
//                 <p className="text-4xl sm:text-5xl font-bold text-[#495f8f] mb-3">{stat.metric}</p>
//                 <p className="text-gray-400 font-medium">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-black min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden bg-gradient-to-b from-[#6ea7ee] to-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-1/4 w-96 h-96 bg-[#495f8f]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-[#495f8f]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="mb-8"
            style={{
              opacity: Math.max(0, Math.min(1, 1 - scrollY / 300)),
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <h2 className="text-lg sm:text-xl text-gray-400 font-medium mb-4">ABOUT OUR COMPANY</h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Pioneering the Future
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-6">
              of Unified Operations
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver holistic observability and operational control across the world’s most complex hybrid and industrial ecosystems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button className="px-8 py-3 bg-[#495f8f] hover:bg-[#556a9d] text-white rounded-lg transition-all transform hover:scale-105 font-medium">
              Learn More
            </button>
            <button className="px-8 py-3 bg-transparent border border-gray-600 hover:border-gray-400 text-white rounded-lg transition-colors flex items-center gap-2 font-medium">
              <span className="text-lg">▶</span>
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center mb-16"
            style={{
              opacity: Math.max(0, Math.min(1, (scrollY - 200) / 250)),
              transform: `translateY(${Math.max(-50, -50 + (scrollY - 200) / 10)}px)`,
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              To empower enterprises with AI-driven intelligence, transforming fragmented data into unified insight and automated action for unparalleled operational resilience. 
            </p>
          </div>

          {/* Core Values */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    {
      title: "Unified Observability",
      desc: "Breaking down silos to provide complete, cross-domain visibility across IT, physical infrastructure, network, and OT environments from a single command center.",
    },
    {
      title: "Intelligent Automation",
      desc: "Embedding predictive analytics, machine learning, and automation into every layer to enable proactive detection, faster root-cause analysis, and streamlined workflows.",
    },
    {
      title: "Operational Resilience",
      desc: "Delivering enterprise-grade fault tolerance, scalability, and security posture across legacy and modern, multivendor, hybrid deployments.",
    },
  ].map((value, idx) => (
    <div
      key={idx}
      className="bg-[#1a1f2e] border border-gray-800 rounded-xl p-8 h-full 
                 hover:border-[#495f8f]/50 transition-all flex flex-col"
      style={{
        opacity: Math.max(0, Math.min(1, (scrollY - 400) / 250)),
        transform: `translateY(${Math.max(-50, -50 + (scrollY - 400) / 10)}px)`,
      }}
    >
      <div className="flex flex-col flex-grow">
        <div className="w-12 h-12 bg-[#495f8f]/20 rounded-lg mb-4 flex items-center justify-center">
          <div className="w-6 h-6 bg-[#495f8f] rounded-md"></div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
        <p className="text-gray-400 flex-grow">{value.desc}</p>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div
            className="text-center mb-16"
            style={{
              opacity: Math.max(0, Math.min(1, (scrollY - 600) / 250)),
              transform: `translateY(${Math.max(-50, -50 + (scrollY - 600) / 15)}px)`,
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-400">Talented individuals united by a common vision</p>
          </div>

          {/* FIXED FULLY RESPONSIVE GRID + PERFECT ALIGNMENT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div
                key={member}
                className="bg-[#1a1f2e] border border-gray-800 rounded-xl overflow-hidden 
                           hover:border-[#495f8f]/50 transition-all h-full flex flex-col"
                style={{
                  opacity: Math.max(0, Math.min(1, (scrollY - 700 - member * 60) / 250)),
                  transform: `translateY(${Math.max(
                    -40,
                    -40 + (scrollY - 700 - member * 60) / 12
                  )}px)`,
                }}
              >
                <div className="h-40 bg-gradient-to-br from-[#495f8f]/20 to-[#495f8f]/10"></div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1">Team Member {member}</h3>
                  <p className="text-[#495f8f] text-sm mb-4 font-medium">Role & Title</p>

                  <p className="text-gray-500 text-sm mt-auto">
                    Passionate about building great products
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#495f8f]/5 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div
            className="text-center mb-16"
            style={{
              opacity: Math.max(0, Math.min(1, (scrollY - 900) / 250)),
              transform: `translateY(${Math.max(-50, -50 + (scrollY - 900) / 15)}px)`,
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-lg text-gray-400">Making a difference worldwide</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "10K+", label: "Companies Trust Us" },
              { metric: "50M+", label: "Deals Managed" },
              { metric: "180+", label: "Countries Served" },
              { metric: "99.9%", label: "Uptime Guaranteed" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#1a1f2e] border border-[#495f8f]/20 rounded-xl p-8 text-center hover:border-[#495f8f]/50 transition-all"
                style={{
                  opacity: Math.max(0, Math.min(1, (scrollY - 1000 - idx * 50) / 250)),
                  transform: `scale(${Math.max(0.9, Math.min(1, 0.9 + (scrollY - 1000 - idx * 50) / 2500))})`,
                }}
              >
                <p className="text-4xl sm:text-5xl font-bold text-[#495f8f] mb-3">{stat.metric}</p>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
