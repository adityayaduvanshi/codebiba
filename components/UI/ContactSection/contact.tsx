import React from 'react';
import { LinkPreview } from './linkPreview';

const ContactSection = () => {
  return (
    <div>
      <div className="bg-[#635189] text-white py-20 px-11 flex justify-between items-center">
        <div className='px-20'>
          <h2 className="text-[4rem] font-bold">Lets work with Us</h2>
          <p className="mt-2 text-lg">
          CodeBiba is the biggest company in Indonesia, who provides the services in 
            Development Website, Shopify and Wordpress
          </p>
        </div>
        <div className='pr-20'>
          <LinkPreview
            url="https://your-company-website.com/about"
            width={300}
            height={200}
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Know More
          </LinkPreview>
        </div>
      </div>
    </div>
  )
}

export default ContactSection;