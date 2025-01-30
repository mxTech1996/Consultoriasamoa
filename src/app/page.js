'use client';

import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';
import Hero from '@/components/organisms/Hero';
import Services from '@/components/organisms/Services';
import FAQ from '@/components/organisms/FaqSection';
import Products from '@/components/organisms/Products';
import WhyChooseUs from '@/components/organisms/WhyChooseUs';
import References from '@/components/organisms/References';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#FFF7EE',
      }}
    >
      <Navbar />
      <div className='relative'>
        <Hero />
      </div>
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <Services />
      </div>
      <FAQ />
      <Products />
      <WhyChooseUs />
      <References />
      <Footer />
    </main>
  );
}
