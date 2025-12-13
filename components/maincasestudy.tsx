export default function MainCaseStudies() {
  const caseStudies = [
    {
      company: "TechFlow",
      metric: "40%",
      description: "reduction in downtime",
      quote:
        "Their expertise in telecommunications transformed our network infrastructure, delivering unprecedented reliability.",
      author: "Sarah Chen",
      role: "CTO, TechFlow Networks",
    },
    {
      company: "PowerGrid Solutions",
      metric: "3x",
      description: "faster deployment",
      quote: "The energy sector solutions provided exceptional scalability and real-time monitoring capabilities.",
      author: "Michael Rodriguez",
      role: "Director of Operations",
    },
    {
      company: "DataVault Systems",
      metric: "99.99%",
      description: "uptime achieved",
      quote: "Our data center efficiency improved dramatically with their innovative infrastructure solutions.",
      author: "Emily Watson",
      role: "VP of Infrastructure",
    },
    {
      company: "FinanceCore",
      metric: "60%",
      description: "cost savings",
      quote: "Banking operations are now seamless and secure. The implementation exceeded all our expectations.",
      author: "David Park",
      role: "Head of Technology",
    },
  ]

  return (
    <section className="bg-[#212c3b] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Case Study.</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering transformative results across industries with cutting-edge solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-900/50"
            >
              {/* Company Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">{study.company}</span>
              </div>

              {/* Metric */}
              <div className="mb-6">
                <div className="text-6xl font-bold text-white mb-2 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                  {study.metric}
                </div>
                <div className="text-zinc-400 text-lg">{study.description}</div>
              </div>

              {/* Quote */}
              <blockquote className="mb-6 text-zinc-300 text-base leading-relaxed italic border-l-2 border-zinc-700 pl-4">
                "{study.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div>
                  <div className="text-white font-medium text-sm">{study.author}</div>
                  <div className="text-zinc-500 text-xs">{study.role}</div>
                </div>
                <button className="text-zinc-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 via-zinc-800/0 to-zinc-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
