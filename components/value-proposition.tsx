import Image from "next/image";

export default function ValueProposition() {
  return (
    <section className="min-h-screen bg-[#212c3b] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-4">Value Proposition stays</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            360 Degree Operational Excellence
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto text-balance">
            Solve complexity and reduce downtime with a single, unified, intelligent platform.
          </p>
        </div>

       <div className="w-full bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-3xl p-10 mb-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

  {/* LEFT SIDE - Centered Content */}
  <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
    <h3 className="text-3xl font-bold text-white mb-4">
      Holistic System Visibility
    </h3>

    <p className="text-gray-400 text-base mb-8 max-w-md">
      Gain complete oversight across IT, infra, network, OT, and security layers.
    </p>
  </div>

  {/* RIGHT SIDE - Image */}
  <div className="border border-gray-700 rounded-2xl overflow-hidden bg-black/40">
    <img 
      src="/home/Holistic.png" 
      alt="System Activity Dashboard"
      className="w-full h-full object-cover"
    />
  </div>

</div>

</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Pie Chart Card */}
          <div className="border border-gray-700 rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">

            {/* Pie Chart Image */}
            <Image
              src="/pie.png"
              alt="Pie Chart"
              width={180}
              height={180}
              className="mb-8"
            />

            {/* <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">LOREM IPSUM</p> */}
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">
              Predictive Automation & AI
            </h3>
            <p className="text-gray-400 text-sm text-center mb-6">
Use AI-assisted insights for faster root-cause analysis and automated incident remediation. 
            </p>

            {/* <button className="border border-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition flex items-center gap-2">
              learn more <span>›</span>
            </button> */}
          </div>

          {/* Bar Graph Card */}
          <div className="border border-gray-700 rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">

            {/* Graph Image */}
            <Image
              src="/graph.png"
              alt="Graph"
              width={180}
              height={180}
              className="mb-8"
            />

            {/* <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Seamless Workflow Integration</p> */}
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">
Seamless Workflow Integration            </h3>
            <p className="text-gray-400 text-sm text-center mb-6">
Consolidate monitoring, security, and service management into unified, efficient workflows.            </p>

            {/* <button className="border border-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition flex items-center gap-2">
              learn more <span>›</span>
            </button> */}
          </div>
        </div>

      </div>
    </section>
  )
}