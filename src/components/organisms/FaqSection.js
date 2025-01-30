'use client';

import { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const faqs = [
  {
    question: 'What makes us different?',
    answer:
      'We’re not your average consultants! We mix fun with expertise, making administration exciting and effective!',
  },
  {
    question: 'How do we charge?',
    answer: 'No hidden fees, just transparency!',
  },
  {
    question: 'Can we handle big projects?',
    answer: 'Size doesn’t scare us!',
  },
  {
    question: 'What’s our success rate?',
    answer: 'Spoiler: It’s pretty high!',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='bg-[#FFF7EE] py-16 px-8 max-w-6xl mx-auto'>
      {faqs.map((faq, index) => (
        <div key={index} className='border-b border-gray-300 py-4 w-full'>
          <div
            className='flex justify-between items-center cursor-pointer w-full'
            onClick={() => toggleFAQ(index)}
          >
            <h3 className='text-xl font-semibold flex-1 w-full'>
              {faq.question}
            </h3>
            <button className='w-8 h-8 flex items-center justify-center bg-orange-400 rounded-full text-white'>
              {openIndex === index ? <FaTimes /> : <FaPlus />}
            </button>
          </div>
          <div
            className={`transition-all duration-300 overflow-hidden w-full ${
              openIndex === index ? 'max-h-40' : 'max-h-0'
            }`}
          >
            <p className='mt-2 text-gray-700'>{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
