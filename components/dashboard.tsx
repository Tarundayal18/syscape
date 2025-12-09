// "use client"

// import Image from "next/image"

// export default function Dashboard() {
//   return (
//     <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-black">
//       <div className="max-w-6xl mx-auto">
//         {/* Dashboard Image Container */}
//         <div className="relative">
//           {/* Outer glow effect */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>

//           {/* Inner border glow */}
//           <div className="relative bg-gradient-to-b from-[#2a3548]/50 to-[#1a1f2e]/50 backdrop-blur-md border border-gray-700/50 rounded-2xl overflow-hidden p-4 sm:p-6">
//             <Image
//               src="/admin.jpg"
//               alt="Syscape Dashboard Control Panel"
//               width={900}
//               height={600}
//               className="w-full h-auto rounded-lg"
//               priority
//             />
//           </div>
//         </div>

//         {/* Additional info below dashboard */}
//         <div className="text-center mt-12 sm:mt-16">
//           <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Powerful Dashboard Features</h3>
//           <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
//             Access comprehensive analytics, real-time data visualization, and actionable insights all in one intuitive
//             interface.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }




// "use client"

// import Image from "next/image"

// interface DashboardProps {
//   scale: number
// }

// export default function Dashboard({ scale }: DashboardProps) {
//   return (
//     <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-black min-h-screen flex items-center justify-center">
//       <div className="max-w-6xl mx-auto w-full">
//         {/* Dashboard Image Container */}
//         <div className="relative flex justify-center">
//           {/* Outer glow effect */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>

//           {/* Inner border glow with zoom effect */}
//           <div
//             className="relative bg-gradient-to-b from-[#2a3548]/50 to-[#1a1f2e]/50 
//              backdrop-blur-md border border-gray-700/50 rounded-2xl 
//              overflow-hidden p-4 sm:p-6 transition-transform duration-75"
//             style={{
//               transform: `scale(${scale})`,
//               transformOrigin: "center top",
//               width: `calc(120vw)`,
//             }}
//           >
//             <Image
//               src="/admin.jpg"
//               alt="Syscape Dashboard Control Panel"
//               width={1200}
//               height={900}
//               className="w-full rounded-lg max-h-[100vh] object-cover"
//               priority
//             />
//           </div>

//         </div>

//         {/* Additional info below dashboard */}
//         <div className="text-center mt-12 sm:mt-16 relative z-10">
//           <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Powerful Dashboard Features</h3>
//           <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
//             Access comprehensive analytics, real-time data visualization, and actionable insights all in one intuitive
//             interface.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import Image from "next/image"

interface DashboardProps {
  scale: number
}

export default function Dashboard({ scale }: DashboardProps) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Dashboard Image Container */}
        <div className="relative flex justify-center">
          {/* Outer glow effect */}
          <div className="absolute inset-0 rounded-2xl blur-xl"></div>

          {/* Inner border glow with zoom effect */}
          <div
            className="relative bg-gradient-to-b from-[#2a3548]/50 to-[#1a1f2e]/50 
             backdrop-blur-md border border-gray-700/50 rounded-2xl 
             overflow-hidden p-4 sm:p-6 transition-none"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center top",
              willChange: "transform",
              width: "70vw",
              height: "100vh",
            }}
          >
            <Image
              src="/admin.jpg"
              alt="Syscape Dashboard Control Panel"
              width={1200}
              height={900}
              className="w-full h-full rounded-lg object-cover"
              priority
            />
          </div>
        </div>

       
      </div>
    </section>
  )
}
