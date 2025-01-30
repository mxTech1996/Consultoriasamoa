'use client';

import { useInformation } from '@/store/useInformation';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function References() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { dataSite } = useInformation();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dataSite.references.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + dataSite.references.length) % dataSite.references.length
    );
  };

  return (
    <section className='bg-[#FFF7EE] py-16 px-8 text-center'>
      <h2 className='text-4xl font-bold mb-10'>Client References</h2>

      <div className='relative max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-teal-400'>
        <h3 className='text-2xl font-semibold'>
          {dataSite.references[currentIndex]?.name}
        </h3>
        <p className='mt-4 text-gray-700'>
          {dataSite.references[currentIndex]?.description}
        </p>
      </div>

      <div className='flex justify-center gap-4 mt-6'>
        <button
          onClick={prevSlide}
          className='bg-teal-400 text-white p-3 rounded-full'
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className='bg-teal-400 text-white p-3 rounded-full'
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
