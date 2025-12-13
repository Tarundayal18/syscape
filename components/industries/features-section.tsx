export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      image: "/industries/cloud.jpg",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      image: "/industries/cloud.jpg",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      image: "/industries/cloud.jpg",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]

  return (
    <section className="relative w-full bg-[#212121] py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-lg md:text-xl tracking-wider uppercase text-white mb-4 font-light">Lorem Ipsum</h2>
          <div className="w-full h-px bg-gradient-to-r from-gray-600 to-transparent" />
        </div>

        {/* Section Title */}
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-12 md:mb-16">
          Lorem Ipsum is simply dummy text of the printing
        </h3>

        {/* Features Grid - 3 columns responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col">
              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-2xl h-48 md:h-56">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <p className="text-white text-base md:text-lg leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
