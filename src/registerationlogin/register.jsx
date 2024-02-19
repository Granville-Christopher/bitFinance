"use client"


        
import React, { useState } from 'react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Check if passwords match
    if (name === 'confirmPassword') {
      setPasswordError(!confirmPassword(formData.password, value));
    }
  };
  const confirmPassword = (password, confirmPassword) => {
    const errors = [];
  
    // Check if passwords match
    if (password !== confirmPassword) {
      errors.push("Passwords do not match");
    }
  
    // Check if password meets additional requirements
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const minLength = 6;
  
    if (!uppercaseRegex.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }
  
    if (!specialCharRegex.test(password)) {
      errors.push("Password must contain at least one special character");
    }
  
    if (password.length < minLength) {
      errors.push("Password must be at least 6 characters long");
    }
  
    return errors;

  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
        // Perform form validation
        const formData = new FormData(e.target);
        const req = await fetch('/api/register',{
            method: 'POST',
            body: formData
        });
        const res = await req.json();
        if(res.error){
            setError(res.message)
        }else{
            // successful
            alert('successful')
        }
    } catch (error) {
        setError('connection error')
    }finally{
        setLoading(false)
    }
    
  };

  return (
    <div className="container mx-auto border-t border-b px-4 py-8 regis text-white">
      <h2 className="text-3xl font-semibold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        
        {
            errorMessage &&
            <p className="p-2 rounded bg-red-100 text-red-800">{errorMessage}</p>
        }
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-semibold mb-2">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder='Your First Name'
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 focus:outline-none "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-semibold mb-2">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder='Your Last Name'
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block  font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder='Your Email'
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block   font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder='Your Password'
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 text-black focus:outline-none "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block  font-semibold mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full border rounded-md px-4 py-2 text-black focus:outline-none ${passwordError ? 'border-red-500' : ''}`}
            required
          />
          {passwordError && <p className="text-red-500 text-sm">Passwords do not match</p>}
        </div>
        <div className='text-center'>
            <button type="submit" disabled={loading} className="gold font-semibold px-6 py-2 rounded-md  transition-colors duration-300">{loading ? 'loading...' :"Register"}</button>
        </div>
      </form>
    </div>
  );
};
export default RegistrationPage;
