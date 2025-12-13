export default function VideoSection() {
  const logos = ["Guardian Care", "Landscaping", "Company", "Guardian Care", "Landscaping", "Company"]

  return (
    <section className="min-h-screen bg-[#212c3b] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-8">Industries Served</p>
        </div>

        {/* Video section */}
        <div className="border border-gray-700 rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-gray-900 to-black">
          <div className="text-center mb-8">
            <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-4">The Products/Platforms</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What is Lorem Ipsum?</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center border border-gray-700">
            <button className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-gray-700 flex items-center justify-center hover:scale-110 transition">
              <svg className="w-8 h-8 text-white fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
