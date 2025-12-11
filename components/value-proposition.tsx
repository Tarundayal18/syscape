import Image from "next/image";

export default function ValueProposition() {
  return (
    <section className="min-h-screen bg-black py-60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-4">Value Proposition</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            What is Lorem Ipsum?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto text-balance">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="w-full bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-3xl p-10 mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT SIDE */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">LOREM</p>

              <h3 className="text-3xl font-bold text-white mb-4">
                Lorem Ipsum is simply dummy text of the printing
              </h3>

              <p className="text-gray-400 text-base mb-8 max-w-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <button className="border border-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition flex items-center gap-2">
                learn more <span>›</span>
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="border border-gray-700 rounded-2xl p-6 bg-black/40">
              <h3 className="text-2xl font-bold text-white mb-6">Recent Activity Logs</h3>

              <div className="space-y-6">

                {/* Header Row */}
                <div className="grid grid-cols-3 gap-4 pb-4 border-b border-gray-700">
                  <p className="text-xs text-gray-500 uppercase">Timestamp</p>
                  <p className="text-xs text-gray-500 uppercase">Status</p>
                  <p className="text-xs text-gray-500 uppercase">Source</p>
                </div>

                {/* Data Rows */}
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 gap-4 text-sm py-2 border-b border-gray-800 last:border-none"
                  >
                    <p className="text-gray-400">2025-05-03 10:24</p>
                    <p className="text-gray-400">Lorem</p>
                    <p className="text-gray-400">Lorem</p>
                  </div>
                ))}

              </div>
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

    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">LOREM IPSUM</p>
    <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">
      Contrary to popular belief, Lorem Ipsum
    </h3>
    <p className="text-gray-400 text-sm text-center mb-6">
      is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
    </p>

    <button className="border border-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition flex items-center gap-2">
      learn more <span>›</span>
    </button>
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

    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">LOREM IPSUM</p>
    <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">
      Contrary to popular belief, Lorem Ipsum
    </h3>
    <p className="text-gray-400 text-sm text-center mb-6">
      is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
    </p>

    <button className="border border-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition flex items-center gap-2">
      learn more <span>›</span>
    </button>
  </div>
</div>

      </div>
    </section>
  )
}
