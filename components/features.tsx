export default function Features() {
  return (
    <section className="w-full bg-black py-20 px-4 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side content */}
          <div>
            <p className="text-sm md:text-base text-gray-400 mb-6 tracking-wide">THE PRODUCTS/PLATFORMS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What is Lorem Ipsum?</h2>
            <p className="text-gray-300 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-4 pb-6 border-b border-gray-700 last:border-b-0 last:pb-0">
                  <div className="w-3 h-3 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side chart */}
          <div className="border border-gray-700 rounded-3xl p-8 md:p-10 bg-black/50">
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl md:text-3xl font-bold text-white">450</span>
                <span className="text-gray-400">Title</span>
                <span className="text-xs text-gray-500">Lorem Ipsum</span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 md:px-4 md:py-2 bg-gray-900 text-white text-xs md:text-sm rounded border border-gray-700 hover:border-gray-600 transition-colors">
                  OP1
                </button>
                <button className="px-3 py-1 md:px-4 md:py-2 bg-black text-white text-xs md:text-sm rounded border border-gray-700 hover:border-gray-600 transition-colors">
                  OP2
                </button>
              </div>
            </div>

            {/* Chart placeholder */}
            <div className="h-64 md:h-80 bg-gradient-to-b from-gray-900 to-black rounded-xl flex items-center justify-center border border-gray-800">
              <svg viewBox="0 0 400 200" className="w-full h-full p-6" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line x1="50" y1="30" x2="50" y2="170" stroke="#334155" strokeWidth="1" />
                <line x1="50" y1="170" x2="380" y2="170" stroke="#334155" strokeWidth="1" />
                {/* Horizontal grid */}
                {[30, 70, 110, 150].map((y) => (
                  <line key={y} x1="50" y1={y} x2="380" y2={y} stroke="#1e293b" strokeWidth="1" />
                ))}
                {/* Chart area */}
                <path
                  d="M 80 120 Q 140 60, 200 80 T 320 50 L 320 170 Q 200 180, 80 170 Z"
                  fill="url(#chartGradient)"
                  stroke="none"
                />
                {/* Chart line */}
                <polyline
                  points="80,120 140,60 200,80 260,100 320,50"
                  fill="none"
                  stroke="#00d4ff"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Data points */}
                {[80, 140, 200, 260, 320].map((x, i) => {
                  const yValues = [120, 60, 80, 100, 50]
                  return (
                    <circle key={x} cx={x} cy={yValues[i]} r="4" fill="#00d4ff" vectorEffect="non-scaling-stroke" />
                  )
                })}
                {/* Labels */}
                <text x="80" y="190" fontSize="12" fill="#64748b" textAnchor="middle">
                  JAN
                </text>
                <text x="140" y="190" fontSize="12" fill="#64748b" textAnchor="middle">
                  FEB
                </text>
                <text x="200" y="190" fontSize="12" fill="#64748b" textAnchor="middle">
                  MAR
                </text>
                <text x="260" y="190" fontSize="12" fill="#64748b" textAnchor="middle">
                  APR
                </text>
                <text x="320" y="190" fontSize="12" fill="#64748b" textAnchor="middle">
                  MAY
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
