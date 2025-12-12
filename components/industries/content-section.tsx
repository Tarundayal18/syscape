// import Image from "next/image";

// export default function ContentSection() {
//   return (
//     <section className="relative w-full bg-black py-20 md:py-32 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="mb-16 md:mb-24">
//           <h2 className="text-lg md:text-xl tracking-wider uppercase text-white mb-4 font-light">Lorem Ipsum</h2>
//           <div className="w-full h-px bg-gradient-to-r from-gray-600 to-transparent" />
//         </div>

//         {/* Main heading */}
//         <h3 className="text-3xl md:text-5xl font-bold text-white mb-16 md:mb-20 leading-tight text-center md:text-left">
//           Lorem Ipsum is simply dummy text of the printing
//         </h3>

//         {/* Content Grid - Two columns on desktop, one on mobile */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
//           {/* Left Column with Icon */}
//           <div className="flex flex-col justify-start">
//             <div className="w-32 h-32 md:w-40 md:h-40 mb-8">
//               {/* Stylized S icon */}
//              {/* Left Column with Icon */}
// <div className="flex flex-col justify-start h-full">
//   <div className="w-full h-full flex items-start">
//     <Image
//       src="/Syscape/iconlogo02.png"
//       alt="Logo"
//       width={400}
//       height={400}
//       className="h-full w-auto object-contain"
//     />
//   </div>
// </div>

//             </div>
//           </div>

//           {/* Right Column with Text */}
//           <div className="flex flex-col justify-start gap-6 md:gap-8">
//             <p className="text-gray-300 text-base md:text-lg leading-relaxed">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//               industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
//               scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
//               electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
//               of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
//               like Aldus PageMaker including versions of Lorem Ipsum.
//             </p>
//             <p className="text-gray-300 text-base md:text-lg leading-relaxed">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//               industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
//               scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
//               electronic typesetting, remaining essentially unchanged.
//             </p>
//           </div>
//         </div>

       
//       </div>
//     </section>
//   )
// }

"use client"
import Image from "next/image"

export default function ContentSection() {
  return (
    <section className="relative w-full bg-black py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-lg md:text-xl tracking-wider uppercase text-white mb-4 font-light">
            Industries we Serve
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-gray-600 to-transparent" />
        </div>
        
        {/* Main heading */}
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-16 md:mb-20 leading-tight text-center md:text-left">
          How We Work with Industries
        </h3>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN - Image */}
          <div className="relative w-full h-full min-h-[400px]">
            <Image
              src="/Syscape/iconlogo02.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          
          {/* RIGHT COLUMN - Text */}
          <div className="flex flex-col justify-start gap-6 md:gap-8">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Syscape’s strength lies in transcending the traditional silos that plague modern enterprises. In high-stakes sectors like Banking and Finance, our integrated platform ensures maximum uptime and compliance. NetScope Vision and InfraCore Pulse guarantee the performance and physical security of data centers, while OrchestraFlow streamlines IT service delivery for rapid incident response, protecting against reputational and financial risk.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              For infrastructure-heavy sectors like Telecommunications and Manufacturing, we bridge the divide between IT and operational environments. ThreatGuard OT provides critical security and visibility into industrial control systems and network assets, preventing disruptions that can lead to physical damage or utility outages. By unifying monitoring, security, and service management, Syscape enables predictive maintenance and AI-assisted automation, ensuring continuous service delivery and reduced operational overhead across complex, hybrid ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}