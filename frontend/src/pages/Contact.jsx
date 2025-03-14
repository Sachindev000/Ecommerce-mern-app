import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Contact Us Section */}
      <div className="text-center">
        <Title text1="Contact" text2="Us" />
      </div>
      <div className="my-12 flex flex-col md:flex-row gap-12 items-center">
        <img
          className='w-full md:max-w-[480px] rounded-lg shadow-lg'
          src={assets.contact_img}
          alt="Contact Us"
        />
        <div className="flex flex-col justify-center items-start gap-6 text-lg text-gray-700">
          <h2 className='font-semibold text-2xl text-gray-800'>Visit Our DailyWear Store</h2>
          <p className='text-gray-600'>
            Experience comfort and style with our premium daily wear collection. 
            From casual tees to stylish jackets, we offer something for everyone.
          </p>
          <p className='text-gray-600'>
            Address: 123 Fashion Street, Trend City <br />
            Tel: (445) 5558-554 <br />
            Email: support@dailywear.com
          </p>
          <h2 className='font-semibold text-2xl text-gray-800'>Join Our Team</h2>
          <p className='text-gray-600'>
            Passionate about fashion? We're always looking for creative minds to join us.
            Explore career opportunities with DailyWear.
          </p>
          <button className='border border-black px-6 py-3 text-lg rounded-md hover:bg-black hover:text-white transition-all duration-300'>
            Explore Careers
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;