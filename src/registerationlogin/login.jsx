"use client"

import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Form data:', formData);
    // Reset form after submission
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="container mx-auto regis border-t border-b text-white py-20 ">
      <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block  font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 focus:outline-none "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block  font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 focus:outline-none "
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="gold font-semibold px-6 py-2 rounded-md transition-colors duration-500">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
