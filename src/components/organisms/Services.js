"use client";

import { useInformation } from "@/store/useInformation";

export default function Services() {
  const { dataSite } = useInformation();

  return (
    <section id="services" className="bg-[#FFF7EE] py-16 px-8 text-center">
      {/* Title and Description */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="flex justify-center gap-4 text-lg font-semibold">
          <span className="border border-teal-400 rounded-full px-4 py-2">
            Expertise
          </span>
          <span className="border border-teal-400 rounded-full px-4 py-2">
            Innovation
          </span>
          <span className="border border-teal-400 rounded-full px-4 py-2">
            Support
          </span>
        </div>
        <p className="mt-4 text-gray-700 text-lg">
          Our team brings expertise, innovative solutions, and unwavering
          support to your business challenges.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataSite.services.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-teal-400 group cursor-pointer"
          >
            <img
              src={item.image}
              alt="Service"
              className="w-full h-96 object-cover"
            />

            {/* Description on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <p className="text-white text-lg font-semibold">
                {item.description}{" "}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-teal-500 text-white text-center">
              <button className="w-full py-2 text-lg font-semibold">
                {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="mt-10">
        <button
          onClick={() => (window.location.href = "/#courses")}
          className="bg-teal-400 text-white px-6 py-3 rounded-full text-lg"
        >
          Explore More
        </button>
      </div>
    </section>
  );
}
