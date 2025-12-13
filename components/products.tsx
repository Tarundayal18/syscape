

// import Image from "next/image"
// import { Zap, Shield, Layers, Globe } from "lucide-react"

// export default function Products() {
//   return (
//     <section className="min-h-screen bg-[#212121] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Background glow effects */}
//       <div className="absolute inset-0 opacity-20 sm:opacity-30">
//         <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse"></div>
//         <div
//           className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-500 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse"
//           style={{ animationDelay: "1s" }}
//         ></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-12 sm:mb-16 md:mb-20">
//           <p className="text-[10px] sm:text-xs md:text-sm tracking-widest text-purple-400 uppercase mb-3 sm:mb-4 animate-pulse">
//             The Syscape Core
//           </p>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent px-4">
//             Four Pillars of Control
//           </h2>
//           <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
//             Transforming IT, Infra, Network, and OT operations by uniting best-in-class monitoring and workflow into
//             distinct, yet tightly coupled, modules.
//           </p>
//         </div>

//         {/* Main Container */}
//         <div className="relative max-w-6xl mx-auto">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
//             <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52">
//               {/* Outer glow rings */}
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-5 blur-lg animate-pulse"></div>
//               <div
//                 className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-8 blur-md animate-pulse"
//                 style={{ animationDelay: "0.5s" }}
//               ></div>

//               {/* Border Circle with reduced glow */}
//               <div className="absolute inset-0 border border-purple-500 sm:border-2 rounded-full overflow-hidden shadow-[0_0_10px_rgba(168,85,247,0.3)]">
//                 {/* Patch Image */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
//                     <Image src="/products/patch.png" alt="Patch" fill className="object-cover rounded-full" />
//                   </div>
//                 </div>
//               </div>

//               {/* Logo Image in center with reduced glow */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="relative ">
//                   <Image
//                     src="/logo011.png"
//                     alt="Main Logo"
//                     width={60}
//                     height={60}
//                     className="rounded-lg sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
//             {/* Horizontal line - left with glow */}
//             <div
//               className="absolute top-1/2 left-0 right-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.8)]"
//               style={{ width: "calc(50% - 4rem)", ["--tw-translate-x" as any]: "0" }}
//             ></div>
//             {/* Horizontal line - right with glow */}
//             <div
//               className="absolute top-1/2 left-1/2 right-0 h-0.5 bg-gradient-to-l from-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]"
//               style={{ width: "calc(50% - 4rem)", marginLeft: "4rem" }}
//             ></div>

//             {/* Vertical line - top with glow */}
//             <div
//               className="absolute top-0 bottom-1/2 left-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.8)]"
//               style={{ height: "calc(50% - 4rem)" }}
//             ></div>
//             {/* Vertical line - bottom with glow */}
//             <div
//               className="absolute top-1/2 bottom-0 left-1/2 w-0.5 bg-gradient-to-t from-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]"
//               style={{ height: "calc(50% - 4rem)", marginTop: "4rem" }}
//             ></div>
//           </div>

//           <div className="grid grid-cols-2 gap-x-16 gap-y-16 sm:gap-x-24 sm:gap-y-24 md:gap-x-32 md:gap-y-32 lg:gap-x-40 lg:gap-y-40 py-16 sm:py-20 md:py-24 lg:py-32">
//             {/* Top Left */}
//             <div className="flex flex-col items-center text-center justify-end group">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border border-purple-500 sm:border-2 rounded-lg flex items-center justify-center text-purple-400 mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] group-hover:scale-110 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
//                 <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
//               </div>
//               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 transition-colors group-hover:text-purple-400">
//                 OrchestraFlow
//               </h3>
//               <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-[140px] sm:max-w-xs group-hover:text-gray-300 transition-colors">
//                 AI-driven backbone for asset tracking, incident, and change management.
//               </p>
//             </div>

//             {/* Top Right */}
//             <div className="flex flex-col items-center text-center justify-end group">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border border-cyan-500 sm:border-2 rounded-lg flex items-center justify-center text-cyan-400 mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] group-hover:scale-110 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
//                 <Layers className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
//               </div>
//               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 transition-colors group-hover:text-cyan-400">
//                 NetScope Vision
//               </h3>
//               <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-[140px] sm:max-w-xs group-hover:text-gray-300 transition-colors">
//                 Full network visibility, traffic monitoring, and cross-domain correlation.
//               </p>
//             </div>

//             {/* Bottom Left */}
//             <div className="flex flex-col items-center text-center group">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border border-cyan-500 sm:border-2 rounded-lg flex items-center justify-center text-cyan-400 mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] group-hover:scale-110 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
//                 <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
//               </div>
//               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 transition-colors group-hover:text-cyan-400">
//                 InfraCore Pulse
//               </h3>
//               <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-[140px] sm:max-w-xs group-hover:text-gray-300 transition-colors">
//                 Predictive capacity, power management, and physical infrastructure health monitoring.
//               </p>
//             </div>

//             {/* Bottom Right */}
//             <div className="flex flex-col items-center text-center group">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border border-purple-500 sm:border-2 rounded-lg flex items-center justify-center text-purple-400 mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] group-hover:scale-110 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
//                 <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
//               </div>
//               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 transition-colors group-hover:text-purple-400">
//                 ThreatGuard OT
//               </h3>
//               <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-[140px] sm:max-w-xs group-hover:text-gray-300 transition-colors">
//                 Deep visibility, threat detection, and security posture for industrial assets.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import Image from "next/image"
import { Zap, Shield, Layers, Globe } from "lucide-react"

export default function Products() {
  return (
    <section className="min-h-screen bg-[#212121] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#b7b7b7] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#304866] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-widest text-[#b7b7b7] uppercase mb-3 sm:mb-4 animate-pulse">
            The Syscape Core
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-[#b7b7b7] via-[#304866] to-[#b7b7b7] bg-clip-text text-transparent px-4">
            Four Pillars of Control
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Transforming IT, Infra, Network, and OT operations by uniting best-in-class monitoring and workflow into
            distinct, yet tightly coupled, modules.
          </p>
        </div>

        {/* Main Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b7b7b7] to-[#304866] opacity-5 blur-lg animate-pulse"></div>
              <div
                className="absolute inset-2 rounded-full bg-gradient-to-r from-[#304866] to-[#b7b7b7] opacity-8 blur-md animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Border Circle with reduced glow */}
              <div className="absolute inset-0 border border-[#b7b7b7] sm:border-2 rounded-full overflow-hidden shadow-[0_0_10px_rgba(183,183,183,0.3)]">
                {/* Patch Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                    <Image src="/products/patch.png" alt="Patch" fill className="object-cover rounded-full" />
                  </div>
                </div>
              </div>

              {/* Logo Image in center with reduced glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
                  <Image src="/logo011.png" alt="Main Logo" fill className="rounded-lg object-contain" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            {/* Horizontal line - left with glow */}
            <div
              className="absolute top-1/2 left-0 right-1/2 h-0.5 bg-gradient-to-r from-[#b7b7b7] to-transparent shadow-[0_0_10px_rgba(183,183,183,0.8)]"
              style={{ width: "calc(50% - 3.5rem)", ["--tw-translate-x" as any]: "0" }}
            ></div>
            {/* Horizontal line - right with glow */}
            <div
              className="absolute top-1/2 left-1/2 right-0 h-0.5 bg-gradient-to-l from-[#304866] to-transparent shadow-[0_0_10px_rgba(48,72,102,0.8)]"
              style={{ width: "calc(50% - 3.5rem)", marginLeft: "3.5rem" }}
            ></div>

            {/* Vertical line - top with glow */}
            <div
              className="absolute top-0 bottom-1/2 left-1/2 w-0.5 bg-gradient-to-b from-[#b7b7b7] to-transparent shadow-[0_0_10px_rgba(183,183,183,0.8)]"
              style={{ height: "calc(50% - 3.5rem)" }}
            ></div>
            {/* Vertical line - bottom with glow */}
            <div
              className="absolute top-1/2 bottom-0 left-1/2 w-0.5 bg-gradient-to-t from-[#304866] to-transparent shadow-[0_0_10px_rgba(48,72,102,0.8)]"
              style={{ height: "calc(50% - 3.5rem)", marginTop: "3.5rem" }}
            ></div>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-12 sm:gap-x-20 sm:gap-y-20 md:gap-x-28 md:gap-y-28 lg:gap-x-36 lg:gap-y-36 py-14 sm:py-18 md:py-22 lg:py-28 px-2 sm:px-4">
            {/* Top Left */}
            <div className="flex flex-col items-center text-center justify-end group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 border border-[#b7b7b7] sm:border-2 rounded-lg flex items-center justify-center text-[#b7b7b7] mb-3 sm:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(183,183,183,0.8)] group-hover:scale-110 shadow-[0_0_15px_rgba(183,183,183,0.4)]">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2 transition-colors group-hover:text-[#b7b7b7]">
                OrchestraFlow
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 max-w-[120px] sm:max-w-[160px] md:max-w-[180px] group-hover:text-gray-300 transition-colors leading-relaxed">
                AI-driven backbone for asset tracking, incident, and change management.
              </p>
            </div>

            {/* Top Right */}
            <div className="flex flex-col items-center text-center justify-end group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 border border-[#304866] sm:border-2 rounded-lg flex items-center justify-center text-[#304866] mb-3 sm:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(48,72,102,0.8)] group-hover:scale-110 shadow-[0_0_15px_rgba(48,72,102,0.4)]">
                <Layers className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2 transition-colors group-hover:text-[#304866]">
                NetScope Vision
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 max-w-[120px] sm:max-w-[160px] md:max-w-[180px] group-hover:text-gray-300 transition-colors leading-relaxed">
                Full network visibility, traffic monitoring, and cross-domain correlation.
              </p>
            </div>

            {/* Bottom Left */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 border border-[#304866] sm:border-2 rounded-lg flex items-center justify-center text-[#304866] mb-3 sm:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(48,72,102,0.8)] group-hover:scale-110 shadow-[0_0_15px_rgba(48,72,102,0.4)]">
                <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2 transition-colors group-hover:text-[#304866]">
                InfraCore Pulse
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 max-w-[120px] sm:max-w-[160px] md:max-w-[180px] group-hover:text-gray-300 transition-colors leading-relaxed">
                Predictive capacity, power management, and physical infrastructure health monitoring.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 border border-[#b7b7b7] sm:border-2 rounded-lg flex items-center justify-center text-[#b7b7b7] mb-3 sm:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(183,183,183,0.8)] group-hover:scale-110 shadow-[0_0_15px_rgba(183,183,183,0.4)]">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2 transition-colors group-hover:text-[#b7b7b7]">
                ThreatGuard OT
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 max-w-[120px] sm:max-w-[160px] md:max-w-[180px] group-hover:text-gray-300 transition-colors leading-relaxed">
                Deep visibility, threat detection, and security posture for industrial assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
