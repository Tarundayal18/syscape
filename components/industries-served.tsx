

// "use client"

// export default function IndustriesServed() {
//   return (
//     <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       <style jsx>{`
//         @keyframes scrollLeft {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes scrollRight {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(50%); }
//         }
//         .scroll-left {
//           animation: scrollLeft 20s linear infinite;
//         }
//         .scroll-right {
//           animation: scrollRight 20s linear infinite;
//         }
//       `}</style>

//       <div className="max-w-full mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wider uppercase">Industries Served</h2>
//         </div>

//         <div className="mb-4 overflow-hidden">
//           <div className="flex gap-16 scroll-left w-max">
//             {[0, 1].map((set) => (
//               <div key={set} className="flex gap-16">
//                 {/* Guardian Care Insurance */}
//                 <div className="flex flex-col items-center gap-2 flex-shrink-0">
//                   <div className="w-34 h-34 flex items-center justify-center">
//                     <svg viewBox="0 0 48 48" className="w-full h-full">
//                       <path
//                         d="M12 12 L24 24 L12 36 L24 24 L36 36 L24 24 L36 12 L24 24 Z"
//                         fill="none"
//                         stroke="white"
//                         strokeWidth="2"
//                         strokeLinejoin="round"
//                       />
//                       <rect x="8" y="10" width="6" height="28" fill="white" />
//                     </svg>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-xs font-bold text-white">Guardian Care</p>
//                     <p className="text-xs text-gray-500">INSURANCE</p>
//                   </div>
//                 </div>

//                 {/* Landscaping */}
//                 <div className="flex flex-col items-center gap-2 flex-shrink-0">
//                   <div className="w-34 h-34 flex items-center justify-center">
//                     <svg viewBox="0 0 48 48" className="w-full h-full">
//                       <line x1="10" y1="30" x2="38" y2="30" stroke="white" strokeWidth="2" />
//                       <line x1="10" y1="26" x2="38" y2="26" stroke="white" strokeWidth="2" />
//                       <line x1="10" y1="22" x2="38" y2="22" stroke="white" strokeWidth="2" />
//                       <line x1="10" y1="18" x2="38" y2="18" stroke="white" strokeWidth="2" />
//                     </svg>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-xs font-bold text-white">Landscaping</p>
//                   </div>
//                 </div>

//                 {/* Company */}
//                 <div className="flex flex-col items-center gap-2 flex-shrink-0">
//                   <div className="w-34 h-34 flex items-center justify-center">
//                     <svg viewBox="0 0 48 48" className="w-full h-full">
//                       <line x1="12" y1="12" x2="12" y2="36" stroke="white" strokeWidth="2" />
//                       <line x1="18" y1="12" x2="18" y2="36" stroke="white" strokeWidth="2" />
//                       <line x1="24" y1="12" x2="24" y2="36" stroke="white" strokeWidth="2" />
//                       <line x1="30" y1="12" x2="30" y2="36" stroke="white" strokeWidth="2" />
//                       <line x1="36" y1="12" x2="36" y2="36" stroke="white" strokeWidth="2" />
//                     </svg>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-xs font-bold text-white">company</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="overflow-hidden">
//           <div className="flex gap-16 scroll-right w-max">
//             {[0, 1].map((set) => (
//               <div key={set} className="flex gap-16">
//                 {/* Landscaping */}
//                 <div className="flex flex-col items-center gap-2 flex-shrink-0">
//                   <div className="w-34 h-34 flex items-center justify-center">
//                     <svg viewBox="0 0 48 48" className="w-full h-full">
//                       <line x1="10" y1="30" x2="38" y2="30" stroke="white" strokeWidth="2" />
//                       <line x1="10" y1="26" x2="38" y2="26" stroke="white" strokeWidth="2" />
//                       <line x1="10" y1="22" x2="38" y2="22" stroke="white" strokeWidth="2" />
//                       <line x1="10" y1="18" x2="38" y2="18" stroke="white" strokeWidth="2" />
//                     </svg>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-xs font-bold text-white">Landscaping</p>
//                   </div>
//                 </div>

//                 {/* Company */}
//                 <div className="flex flex-col items-center gap-2 flex-shrink-0">
//                   <div className="w-34 h-34 flex items-center justify-center">
//                     <svg viewBox="0 0 48 48" className="w-full h-full">
//                       <line x1="12" y1="12" x2="12" y2="36" stroke="white" strokeWidth="2" />
//                       <line x1="18" y1="12" x2="18" y2="36" stroke="white" strokeWidth="2" />
//                       <line x1="24" y1="12" x2="24" y2="36" stroke="white" strokeWidth="2" />
//                       <line x1="30" y1="12" x2="30" y2="36" stroke="white" strokeWidth="2" />
//                       <line x1="36" y1="12" x2="36" y2="36" stroke="white" strokeWidth="2" />
//                     </svg>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-xs font-bold text-white">company</p>
//                   </div>
//                 </div>

//                 {/* Guardian Care Insurance */}
//                 <div className="flex flex-col items-center gap-2 flex-shrink-0">
//                   <div className="w-34 h-34 flex items-center justify-center">
//                     <svg viewBox="0 0 48 48" className="w-full h-full">
//                       <path
//                         d="M12 12 L24 24 L12 36 L24 24 L36 36 L24 24 L36 12 L24 24 Z"
//                         fill="none"
//                         stroke="white"
//                         strokeWidth="2"
//                         strokeLinejoin="round"
//                       />
//                       <rect x="8" y="10" width="6" height="28" fill="white" />
//                     </svg>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-xs font-bold text-white">Guardian Care</p>
//                     <p className="text-xs text-gray-500">INSURANCE</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

export default function IndustriesServed() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
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
          <h2 className="text-2xl sm:text-3xl font-normal text-gray-400 tracking-wide">
            Relied upon by the world's best product teams
          </h2>
        </div>

        <div className="space-y-8">
          {/* First row - scrolling left */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="flex gap-24 scroll-left w-max">
              {[0, 1].map((set) => (
                <div key={set} className="flex gap-24">
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <circle cx="24" cy="24" r="3" fill="white" />
                        <path d="M14 14 Q24 24 14 34" fill="none" stroke="white" strokeWidth="2" />
                        <path d="M34 14 Q24 24 34 34" fill="none" stroke="white" strokeWidth="2" />
                        <path d="M10 10 Q24 24 10 38" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
                        <path d="M38 10 Q24 24 38 38" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
                      </svg>
                    </div>
                    <p className="text-2xl font-medium text-white whitespace-nowrap">Telecommunications</p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <circle cx="24" cy="24" r="12" fill="none" stroke="white" strokeWidth="2" />
                        <circle cx="24" cy="24" r="3" fill="white" />
                        <line x1="24" y1="12" x2="24" y2="18" stroke="white" strokeWidth="2" />
                        <line x1="24" y1="30" x2="24" y2="36" stroke="white" strokeWidth="2" />
                        <line x1="12" y1="24" x2="18" y2="24" stroke="white" strokeWidth="2" />
                        <line x1="30" y1="24" x2="36" y2="24" stroke="white" strokeWidth="2" />
                        <line x1="16.5" y1="16.5" x2="20.5" y2="20.5" stroke="white" strokeWidth="2" />
                        <line x1="27.5" y1="27.5" x2="31.5" y2="31.5" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-2xl font-medium text-white whitespace-nowrap">Manufacturing & Industrial</p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <rect x="10" y="18" width="28" height="18" fill="none" stroke="white" strokeWidth="2" />
                        <polygon points="10,18 24,8 38,18" fill="none" stroke="white" strokeWidth="2" />
                        <line x1="16" y1="24" x2="16" y2="32" stroke="white" strokeWidth="2" />
                        <line x1="24" y1="24" x2="24" y2="32" stroke="white" strokeWidth="2" />
                        <line x1="32" y1="24" x2="32" y2="32" stroke="white" strokeWidth="2" />
                        <line x1="8" y1="38" x2="40" y2="38" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-2xl font-medium text-white whitespace-nowrap">Finance & Banking</p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <path d="M28 8 L16 24 L24 24 L20 40 L32 24 L24 24 Z" fill="white" />
                      </svg>
                    </div>
                    <p className="text-2xl font-medium text-white whitespace-nowrap">Energy & Utilities</p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <rect x="12" y="12" width="24" height="6" fill="none" stroke="white" strokeWidth="2" />
                        <rect x="12" y="21" width="24" height="6" fill="none" stroke="white" strokeWidth="2" />
                        <rect x="12" y="30" width="24" height="6" fill="none" stroke="white" strokeWidth="2" />
                        <circle cx="16" cy="15" r="1" fill="white" />
                        <circle cx="20" cy="15" r="1" fill="white" />
                        <circle cx="16" cy="24" r="1" fill="white" />
                        <circle cx="20" cy="24" r="1" fill="white" />
                        <circle cx="16" cy="33" r="1" fill="white" />
                        <circle cx="20" cy="33" r="1" fill="white" />
                      </svg>
                    </div>
                    <p className="text-2xl font-medium text-white whitespace-nowrap">Data Center</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - scrolling right */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="flex gap-24 scroll-right w-max">
              {[0, 1].map((set) => (
                <div key={set} className="flex gap-24">
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <circle cx="24" cy="24" r="3" fill="white" />
                        <path d="M14 14 Q24 24 14 34" fill="none" stroke="white" strokeWidth="2" />
                        <path d="M34 14 Q24 24 34 34" fill="none" stroke="white" strokeWidth="2" />
                        <path d="M10 10 Q24 24 10 38" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
                        <path d="M38 10 Q24 24 38 38" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
                      </svg>
                    </div>
                    <p className="text-2xl font-medium text-white whitespace-nowrap">Telecommunications</p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <circle cx="24" cy="24" r="12" fill="none" stroke="white" strokeWidth="2" />
                        <circle cx="24" cy="24" r="3" fill="white" />
                        <line x1="24" y1="12" x2="24" y2="18" stroke="white" strokeWidth="2" />
                        <line x1="24" y1="30" x2="24" y2="36" stroke="white" strokeWidth="2" />
                        <line x1="12" y1="24" x2="18" y2="24" stroke="white" strokeWidth="2" />
                        <line x1="30" y1="24" x2="36" y2="24" stroke="white" strokeWidth="2" />
                        <line x1="16.5" y1="16.5" x2="20.5" y2="20.5" stroke="white" strokeWidth="2" />
                        <line x1="27.5" y1="27.5" x2="31.5" y2="31.5" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-2xl font-medium text-white whitespace-nowrap">Manufacturing & Industrial</p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <rect x="10" y="18" width="28" height="18" fill="none" stroke="white" strokeWidth="2" />
                        <polygon points="10,18 24,8 38,18" fill="none" stroke="white" strokeWidth="2" />
                        <line x1="16" y1="24" x2="16" y2="32" stroke="white" strokeWidth="2" />
                        <line x1="24" y1="24" x2="24" y2="32" stroke="white" strokeWidth="2" />
                        <line x1="32" y1="24" x2="32" y2="32" stroke="white" strokeWidth="2" />
                        <line x1="8" y1="38" x2="40" y2="38" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-2xl font-medium text-white whitespace-nowrap">Finance & Banking</p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <path d="M28 8 L16 24 L24 24 L20 40 L32 24 L24 24 Z" fill="white" />
                      </svg>
                    </div>
                    <p className="text-2xl font-medium text-white whitespace-nowrap">Energy & Utilities</p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <rect x="12" y="12" width="24" height="6" fill="none" stroke="white" strokeWidth="2" />
                        <rect x="12" y="21" width="24" height="6" fill="none" stroke="white" strokeWidth="2" />
                        <rect x="12" y="30" width="24" height="6" fill="none" stroke="white" strokeWidth="2" />
                        <circle cx="16" cy="15" r="1" fill="white" />
                        <circle cx="20" cy="15" r="1" fill="white" />
                        <circle cx="16" cy="24" r="1" fill="white" />
                        <circle cx="20" cy="24" r="1" fill="white" />
                        <circle cx="16" cy="33" r="1" fill="white" />
                        <circle cx="20" cy="33" r="1" fill="white" />
                      </svg>
                    </div>
                    <p className="text-2xl font-medium text-white whitespace-nowrap">Data Center</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
