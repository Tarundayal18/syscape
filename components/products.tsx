
// import Image from "next/image";
// import { Zap, Shield, Layers, Globe } from 'lucide-react';

// export default function Products() {
//   return (
//     <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-20">
//           <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-4">
//             The Products/Platforms
//           </p>
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
//             What is Lorem Ipsum?
//           </h2>
//           <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//           </p>
//         </div>

//         {/* Main Container */}
//         <div className="relative max-w-4xl mx-auto">

//           {/* Center Circle with Patch + Logo */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
//             <div className="relative w-32 h-32 sm:w-40 sm:h-40">

//               {/* Border Circle */}
//               <div className="absolute inset-0 border-2 border-gray-600 rounded-full overflow-hidden">

//                 {/* Patch Image (full cover inside circle) */}
//                 <Image
//                   src="/products/patch.png"
//                   alt="Patch"
//                   fill
//                   className="object-cover rounded-full"
//                 />
//               </div>

//               {/* Logo Image in center */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <Image
//                   src="/products/logo.png"
//                   alt="Main Logo"
//                   width={60}
//                   height={60}
//                   className="rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Connection Lines */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
//             <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-600"></div>
//             <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-600"></div>
//           </div>

//           {/* Product Boxes */}
//           <div className="grid grid-cols-2 gap-x-32 gap-y-32 sm:gap-x-40 sm:gap-y-40 md:gap-x-48 md:gap-y-48 py-24 sm:py-32">

//             {/* Top Left */}
//             <div className="flex flex-col items-center text-center justify-end">
//               <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
//                 <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lorem Ipsum?</h3>
//               <p className="text-sm sm:text-base text-gray-400 max-w-xs">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </p>
//             </div>

//             {/* Top Right */}
//             <div className="flex flex-col items-center text-center justify-end">
//               <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
//                 <Layers className="w-6 h-6 sm:w-8 sm:h-8" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lorem Ipsum?</h3>
//               <p className="text-sm sm:text-base text-gray-400 max-w-xs">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </p>
//             </div>

//             {/* Bottom Left */}
//             <div className="flex flex-col items-center text-center">
//               <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
//                 <Globe className="w-6 h-6 sm:w-8 sm:h-8" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lorem Ipsum?</h3>
//               <p className="text-sm sm:text-base text-gray-400 max-w-xs">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </p>
//             </div>

//             {/* Bottom Right */}
//             <div className="flex flex-col items-center text-center">
//               <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
//                 <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lorem Ipsum?</h3>
//               <p className="text-sm sm:text-base text-gray-400 max-w-xs">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image"
import { Zap, Shield, Layers, Globe } from "lucide-react"

export default function Products() {
  return (
    <section className="min-h-screen bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-500 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-[10px] sm:text-xs md:text-sm tracking-widest text-purple-400 uppercase mb-3 sm:mb-4 animate-pulse">
            The Syscape Core
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent px-4">
            Four Pillars of Control
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Transforming IT, Infra, Network, and OT operations by uniting best-in-class monitoring and workflow into
            distinct, yet tightly coupled, modules.
          </p>
        </div>

        {/* Main Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-5 blur-lg animate-pulse"></div>
              <div
                className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-8 blur-md animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Border Circle with reduced glow */}
              <div className="absolute inset-0 border border-purple-500 sm:border-2 rounded-full overflow-hidden shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                {/* Patch Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                    <Image src="/products/patch.png" alt="Patch" fill className="object-cover rounded-full" />
                  </div>
                </div>
              </div>

              {/* Logo Image in center with reduced glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative shadow-[0_0_6px_rgba(168,85,247,0.4)]">
                  <Image
                    src="/products/logo.png"
                    alt="Main Logo"
                    width={40}
                    height={40}
                    className="rounded-lg sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            {/* Horizontal line - left with glow */}
            <div
              className="absolute top-1/2 left-0 right-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              style={{ width: "calc(50% - 4rem)", ["--tw-translate-x" as any]: "0" }}
            ></div>
            {/* Horizontal line - right with glow */}
            <div
              className="absolute top-1/2 left-1/2 right-0 h-0.5 bg-gradient-to-l from-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              style={{ width: "calc(50% - 4rem)", marginLeft: "4rem" }}
            ></div>

            {/* Vertical line - top with glow */}
            <div
              className="absolute top-0 bottom-1/2 left-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              style={{ height: "calc(50% - 4rem)" }}
            ></div>
            {/* Vertical line - bottom with glow */}
            <div
              className="absolute top-1/2 bottom-0 left-1/2 w-0.5 bg-gradient-to-t from-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              style={{ height: "calc(50% - 4rem)", marginTop: "4rem" }}
            ></div>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-16 sm:gap-x-24 sm:gap-y-24 md:gap-x-32 md:gap-y-32 lg:gap-x-40 lg:gap-y-40 py-16 sm:py-20 md:py-24 lg:py-32">
            {/* Top Left */}
            <div className="flex flex-col items-center text-center justify-end group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border border-purple-500 sm:border-2 rounded-lg flex items-center justify-center text-purple-400 mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] group-hover:scale-110 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 transition-colors group-hover:text-purple-400">
                OrchestraFlow
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-[140px] sm:max-w-xs group-hover:text-gray-300 transition-colors">
                AI-driven backbone for asset tracking, incident, and change management.
              </p>
            </div>

            {/* Top Right */}
            <div className="flex flex-col items-center text-center justify-end group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border border-cyan-500 sm:border-2 rounded-lg flex items-center justify-center text-cyan-400 mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] group-hover:scale-110 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 transition-colors group-hover:text-cyan-400">
                NetScope Vision
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-[140px] sm:max-w-xs group-hover:text-gray-300 transition-colors">
                Full network visibility, traffic monitoring, and cross-domain correlation.
              </p>
            </div>

            {/* Bottom Left */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border border-cyan-500 sm:border-2 rounded-lg flex items-center justify-center text-cyan-400 mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] group-hover:scale-110 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 transition-colors group-hover:text-cyan-400">
                InfraCore Pulse
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-[140px] sm:max-w-xs group-hover:text-gray-300 transition-colors">
                Predictive capacity, power management, and physical infrastructure health monitoring.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border border-purple-500 sm:border-2 rounded-lg flex items-center justify-center text-purple-400 mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] group-hover:scale-110 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 transition-colors group-hover:text-purple-400">
                ThreatGuard OT
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-[140px] sm:max-w-xs group-hover:text-gray-300 transition-colors">
                Deep visibility, threat detection, and security posture for industrial assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
