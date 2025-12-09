// export default function IndustriesServed() {
//   const logos = ["Guardian Care", "Landscaping", "Company", "Guardian Care", "Landscaping", "Company"]

//   return (
//     <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-8">Industries Served</p>
//         </div>

//         {/* Logo carousel */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-20 items-center justify-items-center">
//           {logos.map((logo, i) => (
//             <div
//               key={i}
//               className="w-20 h-20 border border-gray-700 rounded-lg flex items-center justify-center bg-gray-900 text-gray-400 text-xs text-center p-2 hover:border-gray-500 transition"
//             >
//               {logo}
//             </div>
//           ))}
//         </div>

//         {/* Video section */}
//         <div className="border border-gray-700 rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-gray-900 to-black">
//           <div className="text-center mb-8">
//             <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-4">The Products/Platforms</p>
//             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What is Lorem Ipsum?</h2>
//             <p className="text-gray-300 max-w-xl mx-auto">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//             </p>
//           </div>

//           <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center border border-gray-700">
//             <button className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-gray-700 flex items-center justify-center hover:scale-110 transition">
//               <svg className="w-8 h-8 text-white fill-white" viewBox="0 0 24 24">
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

export default function IndustriesServed() {
  return (
    <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .scroll-left {
          animation: scrollLeft 20s linear infinite;
        }
        .scroll-right {
          animation: scrollRight 20s linear infinite;
        }
      `}</style>

      <div className="max-w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wider uppercase">Industries Served</h2>
        </div>

        <div className="mb-4 overflow-hidden">
          <div className="flex gap-16 scroll-left w-max">
            {[0, 1].map((set) => (
              <div key={set} className="flex gap-16">
                {/* Guardian Care Insurance */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-34 h-34 flex items-center justify-center">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <path
                        d="M12 12 L24 24 L12 36 L24 24 L36 36 L24 24 L36 12 L24 24 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <rect x="8" y="10" width="6" height="28" fill="white" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-white">Guardian Care</p>
                    <p className="text-xs text-gray-500">INSURANCE</p>
                  </div>
                </div>

                {/* Landscaping */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-34 h-34 flex items-center justify-center">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <line x1="10" y1="30" x2="38" y2="30" stroke="white" strokeWidth="2" />
                      <line x1="10" y1="26" x2="38" y2="26" stroke="white" strokeWidth="2" />
                      <line x1="10" y1="22" x2="38" y2="22" stroke="white" strokeWidth="2" />
                      <line x1="10" y1="18" x2="38" y2="18" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-white">Landscaping</p>
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-34 h-34 flex items-center justify-center">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <line x1="12" y1="12" x2="12" y2="36" stroke="white" strokeWidth="2" />
                      <line x1="18" y1="12" x2="18" y2="36" stroke="white" strokeWidth="2" />
                      <line x1="24" y1="12" x2="24" y2="36" stroke="white" strokeWidth="2" />
                      <line x1="30" y1="12" x2="30" y2="36" stroke="white" strokeWidth="2" />
                      <line x1="36" y1="12" x2="36" y2="36" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-white">company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-16 scroll-right w-max">
            {[0, 1].map((set) => (
              <div key={set} className="flex gap-16">
                {/* Landscaping */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-34 h-34 flex items-center justify-center">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <line x1="10" y1="30" x2="38" y2="30" stroke="white" strokeWidth="2" />
                      <line x1="10" y1="26" x2="38" y2="26" stroke="white" strokeWidth="2" />
                      <line x1="10" y1="22" x2="38" y2="22" stroke="white" strokeWidth="2" />
                      <line x1="10" y1="18" x2="38" y2="18" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-white">Landscaping</p>
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-34 h-34 flex items-center justify-center">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <line x1="12" y1="12" x2="12" y2="36" stroke="white" strokeWidth="2" />
                      <line x1="18" y1="12" x2="18" y2="36" stroke="white" strokeWidth="2" />
                      <line x1="24" y1="12" x2="24" y2="36" stroke="white" strokeWidth="2" />
                      <line x1="30" y1="12" x2="30" y2="36" stroke="white" strokeWidth="2" />
                      <line x1="36" y1="12" x2="36" y2="36" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-white">company</p>
                  </div>
                </div>

                {/* Guardian Care Insurance */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-34 h-34 flex items-center justify-center">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <path
                        d="M12 12 L24 24 L12 36 L24 24 L36 36 L24 24 L36 12 L24 24 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <rect x="8" y="10" width="6" height="28" fill="white" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-white">Guardian Care</p>
                    <p className="text-xs text-gray-500">INSURANCE</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
