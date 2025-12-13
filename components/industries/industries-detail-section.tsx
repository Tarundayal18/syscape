

// "use client"

// import Image from "next/image"

// export default function IndustriesDetailSection() {
//   const industries = [
//     {
//       icon: "/Syscape/iconlogo02.png",
//       title: "Telecommunications",
//       description:
//         "We enable Telcos to maintain peak network quality and rapidly onboard new services. By correlating network performance (NetScope Vision) with physical infra health (InfraCore Pulse) and automated service workflows (OrchestraFlow), Syscape guarantees continuous service uptime and accelerates 5G monetization strategies.",
//     },
//     {
//       icon: "/Syscape/iconlogo02.png",
//       title: "Manufacturing & Industrial",
//       description:
//         "Securing the production floor is paramount. ThreatGuard OT gives deep, non-intrusive visibility into ICS/SCADA systems, preventing lateral attacks. We integrate these security events directly into OrchestraFlow for immediate, auditable incident response, ensuring uninterrupted physical processes and operational safety.",
//     },
//     {
//       icon: "/Syscape/iconlogo02.png",
//       title: "Finance & Banking",
//       description:
//         "Compliance and zero downtime are non-negotiable. Our platform unifies data center power/cooling management (InfraCore Pulse) with enterprise-wide security posture (ThreatGuard OT), while OrchestraFlow's robust change management simplifies complex audits and maintains regulatory integrity across all service delivery.",
//     },
//     {
//       icon: "/Syscape/iconlogo02.png",
//       title: "Energy & Utilities",
//       description:
//         "Managing geographically distributed and critical infrastructure demands holistic control. We monitor remote power grids and substations (InfraCore Pulse) and secure the underlying operational technology (ThreatGuard OT), providing early-warning anomaly detection to prevent catastrophic failures and ensure public safety.",
//     },
//     {
//       icon: "/Syscape/iconlogo02.png",
//       title: "Data Center & Colocation Providers",
//       description:
//         "Maximizing capacity and guaranteeing SLAs drive profitability. InfraCore Pulse provides predictive planning and real-time power/thermal monitoring, while OrchestraFlow handles client-facing service requests and asset lifecycle tracking, delivering audit-ready efficiency and risk reduction.",
//     },
//   ]

//   return (
//     <section className="bg-[#212c3b] py-16 md:py-20 px-6 md:px-12 lg:px-24">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-12 md:mb-16">
//           <h2 className="text-white text-lg md:text-xl font-bold tracking-wide mb-4">How We Serve</h2>
//           <div className="w-full h-px bg-white/30"></div>
//         </div>

//         {/* List Section */}
//         <div className="space-y-16">
//           {industries.map((industry, index) => (
//             <div key={index} className="w-full">
//               <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">

//                 {/* Left : Icon + Title */}
//                 <div className="flex items-center gap-5 md:gap-6 w-full md:w-[330px]">
//                   <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-[#1F2A44] to-[#0F1624] rounded-xl flex items-center justify-center">
//                     <Image
//                       src={industry.icon}
//                       alt={industry.title}
//                       width={80}
//                       height={80}
//                       className="w-12 h-12 md:w-20 md:h-20 object-contain"
//                     />
//                   </div>

//                   <h3 className="text-white text-lg md:text-2xl font-bold tracking-wide">
//                     {industry.title}
//                   </h3>
//                 </div>

//                 {/* Right : Description */}
//                 <p className="text-gray-300 text-sm md:text-base leading-relaxed w-full md:flex-1 max-w-3xl">
//                   {industry.description}
//                 </p>
//               </div>

//               {/* Divider */}
//               {index < industries.length - 1 && (
//                 <div className="mt-10 md:mt-12 h-px bg-white/20 w-full"></div>
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
      icon: "/industries/Icon 1.svg",
      title: "Telecommunications",
      description:
        "We enable Telcos to maintain peak network quality and rapidly onboard new services. By correlating network performance (NetScope Vision) with physical infra health (InfraCore Pulse) and automated service workflows (OrchestraFlow), Syscape guarantees continuous service uptime and accelerates 5G monetization strategies.",
    },
    {
      icon: "/industries/Icon 2.svg",
      title: "Manufacturing & Industrial",
      description:
        "Securing the production floor is paramount. ThreatGuard OT gives deep, non-intrusive visibility into ICS/SCADA systems, preventing lateral attacks. We integrate these security events directly into OrchestraFlow for immediate, auditable incident response, ensuring uninterrupted physical processes and operational safety.",
    },
    {
      icon: "/industries/Icon 3.svg",
      title: "Finance & Banking",
      description:
        "Compliance and zero downtime are non-negotiable. Our platform unifies data center power/cooling management (InfraCore Pulse) with enterprise-wide security posture (ThreatGuard OT), while OrchestraFlow's robust change management simplifies complex audits and maintains regulatory integrity across all service delivery.",
    },
    {
      icon: "/industries/Icon 4.svg",
      title: "Energy & Utilities",
      description:
        "Managing geographically distributed and critical infrastructure demands holistic control. We monitor remote power grids and substations (InfraCore Pulse) and secure the underlying operational technology (ThreatGuard OT), providing early-warning anomaly detection to prevent catastrophic failures and ensure public safety.",
    },
    {
      icon: "/industries/Icon 5.svg",
      title: "Data Center & Colocation Providers",
      description:
        "Maximizing capacity and guaranteeing SLAs drive profitability. InfraCore Pulse provides predictive planning and real-time power/thermal monitoring, while OrchestraFlow handles client-facing service requests and asset lifecycle tracking, delivering audit-ready efficiency and risk reduction.",
    },
  ]

  return (
    <section className="bg-[#212c3b] py-16 md:py-20 px-6 md:px-12 lg:px-24">
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
              <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start lg:items-center">

                {/* Left : Icon + Title */}
                <div className="flex items-center gap-5 md:gap-6 min-w-0 lg:w-[380px]">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-[#1F2A44] to-[#0F1624] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Image
                      src={industry.icon}
                      alt={industry.title}
                      width={100}
                      height={100}
                      className="w-16 h-16 md:w-24 md:h-24 object-contain"
                    />
                  </div>

                  <h3 className="text-white text-base md:text-xl font-bold tracking-wide min-w-0 break-words">
                    {industry.title}
                  </h3>
                </div>

                {/* Right : Description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed min-w-0">
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