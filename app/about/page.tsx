


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
//       <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden bg-gradient-to-b from-[#6ea7ee] to-black">
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
//             <h2 className="text-lg sm:text-xl text-gray-400 font-medium mb-4">ABOUT OUR COMPANY</h2>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
//               Pioneering the Future
//             </h1>
//             <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-6">
//               of Unified Operations
//             </h1>
//             <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
//               We deliver holistic observability and operational control across the world’s most complex hybrid and industrial ecosystems.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#212121]">
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
//          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//   {[
//     {
//       title: "Unified Observability",
//       desc: "Breaking down silos to provide complete, cross-domain visibility across IT, physical infrastructure, network, and OT environments from a single command center.",
//     },
//     {
//       title: "Intelligent Automation",
//       desc: "Embedding predictive analytics, machine learning, and automation into every layer to enable proactive detection, faster root-cause analysis, and streamlined workflows.",
//     },
//     {
//       title: "Operational Resilience",
//       desc: "Delivering enterprise-grade fault tolerance, scalability, and security posture across legacy and modern, multivendor, hybrid deployments.",
//     },
//   ].map((value, idx) => (
//     <div
//       key={idx}
//       className="bg-[#1a1f2e] border border-gray-800 rounded-xl p-8 h-full 
//                  hover:border-[#495f8f]/50 transition-all flex flex-col"
//       style={{
//         opacity: Math.max(0, Math.min(1, (scrollY - 400) / 250)),
//         transform: `translateY(${Math.max(-50, -50 + (scrollY - 400) / 10)}px)`,
//       }}
//     >
//       <div className="flex flex-col flex-grow">
//         <div className="w-12 h-12 bg-[#495f8f]/20 rounded-lg mb-4 flex items-center justify-center">
//           <div className="w-6 h-6 bg-[#495f8f] rounded-md"></div>
//         </div>

//         <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
//         <p className="text-gray-400 flex-grow">{value.desc}</p>
//       </div>
//     </div>
//   ))}
// </div>

//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#212121] border-t border-gray-800">
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

//           {/* FIXED FULLY RESPONSIVE GRID + PERFECT ALIGNMENT */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[1, 2, 3, 4].map((member) => (
//               <div
//                 key={member}
//                 className="bg-[#1a1f2e] border border-gray-800 rounded-xl overflow-hidden 
//                            hover:border-[#495f8f]/50 transition-all h-full flex flex-col"
//                 style={{
//                   opacity: Math.max(0, Math.min(1, (scrollY - 700 - member * 60) / 250)),
//                   transform: `translateY(${Math.max(
//                     -40,
//                     -40 + (scrollY - 700 - member * 60) / 12
//                   )}px)`,
//                 }}
//               >
//                 <div className="h-40 bg-gradient-to-br from-[#495f8f]/20 to-[#495f8f]/10"></div>

//                 <div className="p-6 flex-1 flex flex-col">
//                   <h3 className="text-lg font-bold text-white mb-1">Team Member {member}</h3>
//                   <p className="text-[#495f8f] text-sm mb-4 font-medium">Role & Title</p>

//                   <p className="text-gray-500 text-sm mt-auto">
//                     Passionate about building great products
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Impact Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#212121] border-t border-gray-800">
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

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-black min-h-screen">
      <Header />

      {/* Hero Section with Animated Bubbles */}

  <section className="relative min-h-screen flex items-center bg-gradient-to-b from-[#6ea7ee] justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 overflow-hidden hero-fade">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about/Hero Banner.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d3e54]/80 via-[#1e2a3a]/70 to-[#0a0e15]/90"></div>
      </div>

      {/* Floating particles - Hidden on mobile for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 hidden sm:block">
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
        <div className="absolute top-20 sm:top-32 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#495f8f]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-32 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#495f8f]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Center - Text content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4">
        <div
          className="mb-6 sm:mb-8"
          style={{
            opacity: Math.max(0, Math.min(1, 1 - scrollY / 300)),
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
       <h2 className="text-base sm:text-lg md:text-xl text-gray-300 font-medium mb-4 animate-fade-in">
              ABOUT OUR COMPANY
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up">
              Pioneering the Future
            </h1>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              of Unified Operations
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We deliver holistic observability and operational control across the world's most complex hybrid and
              industrial ecosystems.
            </p>
        </div>
      </div>

              <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 sm:h-10 bg-gradient-to-t from-[#212121] via-[#212121]/80 to-transparent z-20" />

    </section>


      {/* Mission Section */}
      <section id="mission" data-section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#212121]">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
              visibleSections.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed px-4">
              To empower enterprises with AI-driven intelligence, transforming fragmented data into unified insight and
              automated action for unparalleled operational resilience.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Unified Observability",
                desc: "Breaking down silos to provide complete, cross-domain visibility across IT, physical infrastructure, network, and OT environments from a single command center.",
                icon: "/about/ICons-01.svg"
              },
              {
                title: "Intelligent Automation",
                desc: "Embedding predictive analytics, machine learning, and automation into every layer to enable proactive detection, faster root-cause analysis, and streamlined workflows.",
                icon: "/about/ICons-02.svg"
              },
              {
                title: "Operational Resilience",
                desc: "Delivering enterprise-grade fault tolerance, scalability, and security posture across legacy and modern, multivendor, hybrid deployments.",
                icon: "/about/ICons-03.svg"
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className={`bg-[#1a1f2e] border border-gray-800 rounded-xl p-6 sm:p-8 h-full 
                           hover:border-[#495f8f]/50 hover:shadow-lg hover:shadow-[#495f8f]/10 
                           transition-all duration-700 flex flex-col ${
                             visibleSections.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                           }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col flex-grow">
                  <div className="w-12 h-12 bg-[#495f8f]/20 rounded-lg mb-4 flex items-center justify-center">
  <img
    src={value.icon}
    alt="icon"
    className="w-6 h-6 object-contain"
  />
</div>


                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 flex-grow leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        data-section
        className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#212121] border-t border-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
              visibleSections.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Meet Our Team</h2>
            <p className="text-base sm:text-lg text-gray-400">Talented individuals united by a common vision</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member, idx) => (
              <div
                key={member}
                className={`bg-[#1a1f2e] border border-gray-800 rounded-xl overflow-hidden 
                           hover:border-[#495f8f]/50 hover:shadow-lg hover:shadow-[#495f8f]/10 
                           transition-all duration-700 h-full flex flex-col ${
                             visibleSections.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                           }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-[#495f8f]/20 to-[#495f8f]/10"></div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">Team Member {member}</h3>
                  <p className="text-[#495f8f] text-sm mb-4 font-medium">Role & Title</p>

                  <p className="text-gray-500 text-xs sm:text-sm mt-auto">Passionate about building great products</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        id="impact"
        data-section
        className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#212121] border-t border-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
              visibleSections.impact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Our Impact</h2>
            <p className="text-base sm:text-lg text-gray-400">Making a difference worldwide</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: "10K+", label: "Companies Trust Us" },
              { metric: "50M+", label: "Deals Managed" },
              { metric: "180+", label: "Countries Served" },
              { metric: "99.9%", label: "Uptime Guaranteed" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`bg-[#1a1f2e] border border-[#495f8f]/20 rounded-xl p-6 sm:p-8 text-center 
                           hover:border-[#495f8f]/50 hover:shadow-lg hover:shadow-[#495f8f]/10 
                           transition-all duration-700 ${
                             visibleSections.impact ? "opacity-100 scale-100" : "opacity-0 scale-95"
                           }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#495f8f] mb-2 sm:mb-3">{stat.metric}</p>
                <p className="text-sm sm:text-base text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(5px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </main>
  )
}
