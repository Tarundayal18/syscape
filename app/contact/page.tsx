
// "use client"

// import { useEffect, useState } from "react"
// import Header from "@/components/header"
// import Footer from "@/components/footer"

// export default function ContactPage() {
//   const [scrollY, setScrollY] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY)
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <main className="bg-black min-h-screen">
//       <Header />

//       {/* Hero Section with Gradient */}
//       <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden bg-gradient-to-b from-[#495f8f] via-[#495f8f]/50 to-black">
        
//         {/* Animated background orbs */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-32 left-1/4 w-96 h-96 bg-[#495f8f]/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-[#495f8f]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>

//         <div className="relative z-10 max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
//               Get in Touch Directly
//             </h1>
//             <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-balance">
//               Easily track and manage your sales pipeline with real-time updates, visual deal stages to keep your sales
//               flow seamless.
//             </p>
//           </div>

//           {/* Contact Cards */}
//           <div className="grid md:grid-cols-2 gap-8 mt-20">

//             {/* Email Card */}
//             <div
//               className="bg-[#1a1a2e]/80 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm hover:border-[#495f8f]/50 transition-all duration-300"
//               style={{
//                 transform: `translateY(${Math.min(scrollY * 0.2, 50)}px)`,
//                 opacity: 1 - Math.max(0, (scrollY - 300) / 500),
//               }}
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#495f8f] to-[#495f8f] rounded-lg flex items-center justify-center">
//                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-white">support@datacore.com</h3>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 Reach out for product help, billing questions, or account support. We typically respond within 1
//                 business day.
//               </p>
//             </div>

//             {/* Phone Card */}
//             <div
//               className="bg-[#1a1a2e]/80 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm hover:border-[#495f8f]/50 transition-all duration-300"
//               style={{
//                 transform: `translateY(${Math.min(scrollY * 0.2, 50)}px)`,
//                 opacity: 1 - Math.max(0, (scrollY - 300) / 500),
//               }}
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#495f8f] to-[#495f8f] rounded-lg flex items-center justify-center">
//                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M17.707 12.293l-5.293-5.293a1 1 0 0 0-1.414 1.414L15.586 12l-4.586 4.586a1 1 0 1 0 1.414 1.414l5.293-5.293a1 1 0 0 0 0-1.414zM6.707 12.293l5.293-5.293a1 1 0 0 0 1.414 1.414L8.414 12l4.586 4.586a1 1 0 1 0-1.414 1.414l-5.293-5.293a1 1 0 0 0 0-1.414z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-white">+1 (800) 456-CORE</h3>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 We are available from Monday to Friday, 9am–6pm (EST) for urgent issues or enterprise inquiries or
//                 account support.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Form Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">

//             {/* Left Column */}
//             <div
//               className="space-y-8"
//               style={{
//                 opacity: Math.max(0, Math.min(1, (scrollY - 200) / 300)),
//                 transform: `translateX(${Math.max(-50, -50 + (scrollY - 200) / 12)}px)`,
//               }}
//             >
//               <div>
//                 <p className="text-gray-500 text-sm font-semibold mb-2">OUR FEATURES</p>
//                 <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Send us your message</h2>
//                 <p className="text-gray-400 text-lg">
//                   Whether you have questions about our services, need technical or want to explore how we can help your
//                   business thrive, we're here to assist you.
//                 </p>
//               </div>

//               {/* Trust Indicators */}
//               <div className="border-t border-gray-800 pt-8">
//                 <p className="text-white font-semibold text-lg mb-2">Trusted by 1000+ award-winning companies</p>
//                 <p className="text-gray-500 text-xs mb-4">RELIED UPON BY THE WORLD'S BEST PRODUCT TEAMS</p>
//                 <div className="flex items-center gap-3">
//                   <span className="text-4xl font-bold text-white">4.8</span>
//                   <div className="flex flex-col">
//                     <div className="flex gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <svg key={i} className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 24 24">
//                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                         </svg>
//                       ))}
//                     </div>
//                     <p className="text-gray-400 text-sm mt-1">Product Hunt</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Form */}
//             <div
//               className="bg-[#1a1a2e] border border-gray-800 rounded-2xl p-8"
//               style={{
//                 opacity: Math.max(0, Math.min(1, (scrollY - 200) / 300)),
//                 transform: `translateX(${Math.min(50, 50 - (scrollY - 200) / 12)}px)`,
//               }}
//             >
//               <form className="space-y-6">

//                 {/* Name Fields */}
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-white font-medium mb-2 text-sm">Name</label>
//                     <input
//                       type="text"
//                       placeholder="First name"
//                       className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#495f8f] transition-colors"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-white font-medium mb-2 text-sm">Last name</label>
//                     <input
//                       type="text"
//                       placeholder="Last name"
//                       className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#495f8f] transition-colors"
//                     />
//                   </div>
//                 </div>

//                 {/* Email & Phone */}
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-white font-medium mb-2 text-sm">Email</label>
//                     <input
//                       type="email"
//                       placeholder="Enter your email"
//                       className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#495f8f] transition-colors"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-white font-medium mb-2 text-sm">Phone number</label>
//                     <input
//                       type="tel"
//                       placeholder="US (+1) Phone number"
//                       className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#495f8f] transition-colors"
//                     />
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="block text-white font-medium mb-2 text-sm">Message</label>
//                   <textarea
//                     placeholder="Type your message here"
//                     rows={4}
//                     className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#495f8f] transition-colors resize-none"
//                   ></textarea>
//                 </div>

//                 {/* Checkbox */}
//                 <div className="flex items-start gap-2">
//                   <input type="checkbox" id="privacy" className="mt-1 w-5 h-5 accent-[#495f8f] cursor-pointer" />
//                   <label htmlFor="privacy" className="text-gray-400 text-sm cursor-pointer">
//                     By reaching out to us, you agree to our Privacy Policy.
//                   </label>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full py-3 bg-gradient-to-r from-[#495f8f] to-[#495f8f] hover:from-[#495f8f] hover:to-[#495f8f] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
//                 >
//                   Create Free Account
//                 </button>

//               </form>
//             </div>
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

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-black min-h-screen">
      <Header />

      {/* Hero Section with Gradient */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-8 pt-16 sm:pt-20 overflow-hidden bg-gradient-to-b from-[#6ea7ee] via-[#495f8f]/50 to-black">
        {/* Animated background orbs - smaller on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 sm:top-32 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#495f8f]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 sm:bottom-32 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#495f8f]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight">
              Get in Touch Directly
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-balance px-2">
              Easily track and manage your sales pipeline with real-time updates, visual deal stages to keep your sales
              flow seamless.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20">
            {/* Email Card */}
            <div
              className="bg-[#1a1a2e]/80 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-[#495f8f]/50 transition-all duration-300"
              style={{
                transform: isMobile ? `translateY(0)` : `translateY(${Math.min(scrollY * 0.2, 50)}px)`,
                opacity: 1 - Math.max(0, (scrollY - 300) / 500),
              }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#495f8f] to-[#495f8f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white break-all">support@datacore.com</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Reach out for product help, billing questions, or account support. We typically respond within 1
                business day.
              </p>
            </div>

            {/* Phone Card */}
            <div
              className="bg-[#1a1a2e]/80 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-[#495f8f]/50 transition-all duration-300"
              style={{
                transform: isMobile ? `translateY(0)` : `translateY(${Math.min(scrollY * 0.2, 50)}px)`,
                opacity: 1 - Math.max(0, (scrollY - 300) / 500),
              }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#495f8f] to-[#495f8f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.707 12.293l-5.293-5.293a1 1 0 0 0-1.414 1.414L15.586 12l-4.586 4.586a1 1 0 1 0 1.414 1.414l5.293-5.293a1 1 0 0 0 0-1.414zM6.707 12.293l5.293-5.293a1 1 0 0 0 1.414 1.414L8.414 12l4.586 4.586a1 1 0 1 0-1.414 1.414l-5.293-5.293a1 1 0 0 0 0-1.414z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">+1 (800) 456-CORE</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                We are available from Monday to Friday, 9am–6pm (EST) for urgent issues or enterprise inquiries or
                account support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column */}
            <div
              className="space-y-6 sm:space-y-8"
              style={{
                opacity: Math.max(0, Math.min(1, (scrollY - 200) / 300)),
                transform: isMobile ? `translateX(0)` : `translateX(${Math.max(-50, -50 + (scrollY - 200) / 12)}px)`,
              }}
            >
              <div>
                <p className="text-gray-500 text-xs sm:text-sm font-semibold mb-2 uppercase tracking-wide">
                  OUR FEATURES
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                  Send us your message
                </h2>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  Whether you have questions about our services, need technical or want to explore how we can help your
                  business thrive, we're here to assist you.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="border-t border-gray-800 pt-6 sm:pt-8">
                <p className="text-white font-semibold text-base sm:text-lg mb-2">
                  Trusted by 1000+ award-winning companies
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mb-4 uppercase tracking-wide">
                  RELIED UPON BY THE WORLD'S BEST PRODUCT TEAMS
                </p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-3xl sm:text-4xl font-bold text-white">4.8</span>
                  <div className="flex flex-col">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">Product Hunt</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div
              className="bg-[#1a1a2e] border border-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 mt-8 md:mt-0"
              style={{
                opacity: Math.max(0, Math.min(1, (scrollY - 200) / 300)),
                transform: isMobile ? `translateX(0)` : `translateX(${Math.min(50, 50 - (scrollY - 200) / 12)}px)`,
              }}
            >
              <form className="space-y-4 sm:space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2 text-xs sm:text-sm">Name</label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#495f8f] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2 text-xs sm:text-sm">Last name</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#495f8f] transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2 text-xs sm:text-sm">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#495f8f] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2 text-xs sm:text-sm">Phone number</label>
                    <input
                      type="tel"
                      placeholder="US (+1) Phone number"
                      className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#495f8f] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-medium mb-2 text-xs sm:text-sm">Message</label>
                  <textarea
                    placeholder="Type your message here"
                    rows={4}
                    className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#495f8f] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-4 sm:w-5 h-4 sm:h-5 accent-[#495f8f] cursor-pointer flex-shrink-0"
                  />
                  <label htmlFor="privacy" className="text-gray-400 text-xs sm:text-sm cursor-pointer leading-relaxed">
                    By reaching out to us, you agree to our Privacy Policy.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#495f8f] to-[#495f8f] hover:from-[#495f8f] hover:to-[#495f8f] text-white font-semibold text-sm sm:text-base rounded-lg transition-all transform hover:scale-105 active:scale-95"
                >
                  Create Free Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
