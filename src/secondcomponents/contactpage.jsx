"use client"

import React from 'react';




const ContactPage = () => {
  const handleContactSubmit = () => {
    const subject = 'Inquiry from Contact Form';
    const body = 'Please enter your message here.';
    const email = 'info@bitfinance.com';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='contact  text-white py-16'>
      <h2 className="text-3xl font-semibold mb-7 p-4  text-center pt-40 border-b">Contact Us</h2>
    
      
        <div className="max-w-md mx-auto pb-20">
          <form onSubmit={handleContactSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block  font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" placeholder='Full Name Here' className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-yellow-500" required/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block  font-semibold mb-2">Email</label>
              <input type="email" id="email" placeholder='Your email Here' name="email" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-yellow-500" required/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block  font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" placeholder='Your message here' className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-yellow-500" required></textarea>
            </div>
            <div className='py-5'>
              <button type="submit" className="gold text-white font-semibold px-6 py-2 rounded-md  transition-colors duration-300">Send Message</button>
            </div>
          </form>
        </div>
      
    </div>
  );
  
};

export default ContactPage;