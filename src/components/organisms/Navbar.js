'use client';
import { useRouter } from 'next/navigation';
import { navData } from '@/data';
import { Navbar as NavbarV2, theme, useCart } from 'ecommerce-mxtech';
import { useInformation } from '@/store/useInformation';

const { useToken } = theme;
import { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa'; // React Icons

export default function Navbar() {
  const { dataSite } = useInformation();
  const { products } = useCart();
  return (
    <nav className='flex items-center justify-between p-4 bg-[#FFF7EE]'>
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <div className='w-20 h-20 rounded-full overflow-hidden'>
          <img
            src={dataSite.iconImage}
            alt='Logo'
            className='w-full h-full object-cover'
          />
        </div>
        {/* <span className='font-bold text-lg'>Consultify</span> */}
      </div>

      {/* Navigation Links */}
      <div className='flex items-center gap-6 border border-teal-400 px-6 py-2 rounded-full'>
        <Link href='/' className='text-black'>
          Home
        </Link>
        <Link href='/#services' className='text-black'>
          Services
        </Link>
        <Link href='/more-information' className='text-black'>
          Contact
        </Link>
      </div>

      {/* Right Section: Get Started + Cart */}
      <div className='flex items-center gap-4'>
        <button
          onClick={() => (window.location.href = '/#services')}
          className='bg-teal-400 text-white px-4 py-2 rounded-full'
        >
          Get Started
        </button>

        {/* Cart Icon with Counter */}
        <a className='relative' href='/my-cart'>
          <div className='relative'>
            <FaShoppingCart className='w-6 h-6 text-black' />
            {products.length > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full'>
                {products.length}
              </span>
            )}
          </div>
        </a>
      </div>
    </nav>
  );
}
