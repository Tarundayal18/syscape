

// "use client"

// import Image from "next/image"

// export default function IndustriesDetailSection() {
//   const industries = [
//     {
//       icon: "/Syscape/iconlogo02.png",
//       title: "LOREM IPSUM",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
//     },
//     {
//       icon: "/Syscape/iconlogo02.png",
//       title: "LOREM IPSUM",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
//     },
//     {
//       icon: "/Syscape/iconlogo02.png",
//       title: "LOREM IPSUM",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
//     },
//   ]

//   return (
//     <section className="bg-black py-20 px-6 md:px-12 lg:px-24">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="mb-16">
//           <h2 className="text-white text-lg md:text-xl font-bold tracking-wide mb-4">LOREM IPSUM</h2>
//           <div className="w-full h-px bg-white/30"></div>
//         </div>

//         {/* Main Description */}
//         <p className="text-white text-base md:text-lg leading-relaxed mb-20 max-w-5xl">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//           industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
//           into electronic typesetting, remaining essentially unchanged.
//         </p>

//         {/* Items Listing */}
//         <div className="space-y-16">
//           {industries.map((industry, index) => (
//             <div key={index}>
//               <div className="flex items-center gap-10">
//                 {/* Left part: Icon + Title */}
//                 <div className="flex items-center gap-6 w-[320px]">
//                   <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-[#1F2A44] to-[#0F1624] rounded-xl flex items-center justify-center">
//                     <Image
//                       src={industry.icon}
//                       alt={industry.title}
//                       width={80}
//                       height={80}
//                       className="w-16 h-16 md:w-20 md:h-20 object-contain"
//                     />
//                   </div>

//                   <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide">{industry.title}</h3>
//                 </div>

//                 {/* Right part: Description */}
//                 <p className="flex-1 text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl">
//                   {industry.description}
//                 </p>
//               </div>

//               {/* Divider */}
//               {index < industries.length - 1 && (
//                 <div className="mt-12 h-px bg-white/20 w-full"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import Image from "next/image"

export default function IndustriesDetailSection() {
  const industries = [
    {
      icon: "/Syscape/iconlogo02.png",
      title: "Telecommunications",
      description:
        "We enable Telcos to maintain peak network quality and rapidly onboard new services. By correlating network performance (NetScope Vision) with physical infra health (InfraCore Pulse) and automated service workflows (OrchestraFlow), Syscape guarantees continuous service uptime and accelerates 5G monetization strategies.",
    },
    {
      icon: "/Syscape/iconlogo02.png",
      title: "Manufacturing & Industrial",
      description:
        "Securing the production floor is paramount. ThreatGuard OT gives deep, non-intrusive visibility into ICS/SCADA systems, preventing lateral attacks. We integrate these security events directly into OrchestraFlow for immediate, auditable incident response, ensuring uninterrupted physical processes and operational safety.",
    },
    {
      icon: "/Syscape/iconlogo02.png",
      title: "Finance & Banking",
      description:
        "Compliance and zero downtime are non-negotiable. Our platform unifies data center power/cooling management (InfraCore Pulse) with enterprise-wide security posture (ThreatGuard OT), while OrchestraFlow's robust change management simplifies complex audits and maintains regulatory integrity across all service delivery.",
    },
    {
      icon: "/Syscape/iconlogo02.png",
      title: "Energy & Utilities",
      description:
        "Managing geographically distributed and critical infrastructure demands holistic control. We monitor remote power grids and substations (InfraCore Pulse) and secure the underlying operational technology (ThreatGuard OT), providing early-warning anomaly detection to prevent catastrophic failures and ensure public safety.",
    },
    {
      icon: "/Syscape/iconlogo02.png",
      title: "Data Center & Colocation Providers",
      description:
        "Maximizing capacity and guaranteeing SLAs drive profitability. InfraCore Pulse provides predictive planning and real-time power/thermal monitoring, while OrchestraFlow handles client-facing service requests and asset lifecycle tracking, delivering audit-ready efficiency and risk reduction.",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-white text-lg md:text-xl font-bold tracking-wide mb-4">How We Serve</h2>
          <div className="w-full h-px bg-white/30"></div>
        </div>

        {/* List Section */}
        <div className="space-y-16">
          {industries.map((industry, index) => (
            <div key={index} className="w-full">
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">

                {/* Left : Icon + Title */}
                <div className="flex items-center gap-5 md:gap-6 w-full md:w-[330px]">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-[#1F2A44] to-[#0F1624] rounded-xl flex items-center justify-center">
                    <Image
                      src={industry.icon}
                      alt={industry.title}
                      width={80}
                      height={80}
                      className="w-12 h-12 md:w-20 md:h-20 object-contain"
                    />
                  </div>

                  <h3 className="text-white text-lg md:text-2xl font-bold tracking-wide">
                    {industry.title}
                  </h3>
                </div>

                {/* Right : Description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed w-full md:flex-1 max-w-3xl">
                  {industry.description}
                </p>
              </div>

              {/* Divider */}
              {index < industries.length - 1 && (
                <div className="mt-10 md:mt-12 h-px bg-white/20 w-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
