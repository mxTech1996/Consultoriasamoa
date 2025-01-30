'use client';

import { useInformation } from '@/store/useInformation';
import {
  FaBriefcase,
  FaClipboardList,
  FaChartBar,
  FaUsers,
} from 'react-icons/fa';

export default function Hero() {
  const { dataSite } = useInformation();
  return (
    <section className='relative flex items-center justify-between min-h-screen bg-[#FFF7EE] px-16 py-8 mx-8'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src={dataSite.image_hero}
          alt='Background'
          className='w-full h-full object-cover rounded-3xl'
        />
      </div>

      {/* Content Box */}
      <div className='relative bg-orange-500 bg-opacity-90 text-black p-10 rounded-3xl border border-teal-400 max-w-lg'>
        <h1 className='text-5xl font-bold'>{dataSite.subtitle}</h1>
        <p className='mt-4 text-lg'>{dataSite.description}</p>

        {/* Administration Icons */}
        <div className='flex gap-4 mt-6'>
          <FaBriefcase className='w-8 h-8' />
          <FaClipboardList className='w-8 h-8' />
          <FaChartBar className='w-8 h-8' />
          <FaUsers className='w-8 h-8' />
        </div>

        {/* Call to Action Button */}
        <button className='mt-6 bg-teal-400 text-white px-6 py-3 rounded-full text-lg'>
          Join Us
        </button>
      </div>
    </section>
  );
}
