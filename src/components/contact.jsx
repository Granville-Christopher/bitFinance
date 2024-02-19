"use client"
// Contact.js

import React from 'react';
const Contact = () => {
    const handleContactSubmit = () => {
      const subject = 'Inquiry from Contact Form';
      const body = 'Please enter your message here.';
      const email = 'info@bitfinance.com';
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    };

    return (
      <div className="container mx-auto px-4 py-8" id='contact'>
        <h2 className="text-3xl font-semibold mb-4  text-center">Feed Back</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleContactSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" placeholder='Full Name Here' className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" placeholder='Your email Here' name="email" required className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" placeholder='Your message here' required className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div>
              <button type="submit" className="gold text-white font-semibold px-6 py-2 rounded-md  transition-colors duration-300">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  