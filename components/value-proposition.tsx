import Image from "next/image";

export default function ValueProposition() {
  return (
    <section className="min-h-screen bg-[#212121] py-60 px-4 sm:px-6 lg:px-8">
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

    <div>
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
        src="/home/Holistic .webp" 
        alt="System Activity Dashboard"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Pie Chart Card */}
         {/* Pie Chart Card */}
<div className="border border-gray-700 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
  <Image
    src="/home/Predictive.webp"
    alt="Predictive Automation & AI"
    width={400}
    height={400}
    className="w-full h-full object-cover"
  />
</div>

{/* Bar Graph Card */}
<div className="border border-gray-700 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
  <Image
    src="/home/Seamless.webp"
    alt="Seamless Workflow Integration"
    width={400}
    height={400}
    className="w-full h-full object-cover"
  />
</div>
        </div>

      </div>
    </section>
  )
}
