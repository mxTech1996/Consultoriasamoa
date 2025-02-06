"use client";

import { useInformation } from "@/store/useInformation";
import { useCart } from "ecommerce-mxtech";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleServices = 3;
  const { dataSite } = useInformation();
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dataSite.products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + dataSite.products.length) % dataSite.products.length
    );
  };

  return (
    <section id="courses" className="bg-[#FFF7EE] py-16 px-8 text-center">
      <h2 className="text-4xl font-bold mb-10">SERVICES</h2>

      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-300"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / visibleServices)
            }%)`,
          }}
        >
          {dataSite.products.map((service, index) => {
            const isAdded = validateProductInCart(service.id);
            return (
              <div
                key={index}
                className="min-w-[calc(100%/3)] bg-white rounded-2xl overflow-hidden shadow-lg border border-teal-400 p-6"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-lg font-bold text-gray-700">
                  {service.price}
                </p>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <button
                  onClick={() => handleAddOrRemoveProduct(service.id)}
                  className="mt-4 bg-teal-400 text-white px-6 py-3 rounded-full text-lg"
                >
                  {isAdded ? "Remove" : "Buy now"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="bg-teal-400 text-white p-3 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-teal-400 text-white p-3 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
