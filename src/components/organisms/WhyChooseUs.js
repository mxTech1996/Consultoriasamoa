"use client";

import { useInformation } from "@/store/useInformation";

export default function WhyChooseUs() {
  const { dataSite } = useInformation();
  return (
    <section className="bg-[#FFF7EE] py-16 px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Text Section */}
      <div className="bg-teal-400 text-black p-10 rounded-3xl w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <ul className="text-lg">
          <li className="mb-2">
            <strong>1.</strong> Expert Consultants
          </li>
          <li className="mb-2">
            <strong>2.</strong> Tailored Solutions
          </li>
          <li className="mb-2">
            <strong>3.</strong> Proven Success
          </li>
          <li className="mb-2">
            <strong>4.</strong> Innovative Strategies
          </li>
          <li className="mb-2">
            <strong>5.</strong> Client-Centric Approach
          </li>
        </ul>
        <button
          onClick={() => {
            window.location.href = "/more-information";
          }}
          className="mt-6 bg-red-500 text-white px-6 py-3 rounded-full text-lg"
        >
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={dataSite.image_hero2}
          alt="Consultant"
          className="w-full h-auto rounded-3xl"
        />
      </div>
    </section>
  );
}
