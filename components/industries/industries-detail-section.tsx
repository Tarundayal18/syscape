"use client"

import Image from "next/image"

export default function IndustriesDetailSection() {
  const industries = [
    {
      icon: "/industry-icon-1.png",
      title: "LOREM IPSUM",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
    {
      icon: "/industry-icon-2.png",
      title: "LOREM IPSUM",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
    {
      icon: "/industry-icon-3.png",
      title: "LOREM IPSUM",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
  ]

  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-white text-lg md:text-xl font-bold tracking-wide mb-4">LOREM IPSUM</h2>
          <div className="w-full h-px bg-gradient-to-r from-white/50 to-transparent"></div>
        </div>

        {/* Description Text */}
        <p className="text-white text-base md:text-lg leading-relaxed mb-16 max-w-6xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>

        {/* Industries Grid */}
        <div className="space-y-8">
          {industries.map((industry, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                {/* Icon/Image */}
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <Image
                      src={industry.icon || "/placeholder.svg"}
                      alt={industry.title}
                      width={128}
                      height={128}
                      className="w-16 h-16 md:w-24 md:h-24 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide mb-3 md:mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{industry.description}</p>
                </div>
              </div>

              {/* Divider */}
              {index < industries.length - 1 && (
                <div className="mt-8 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
