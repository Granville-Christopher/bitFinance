"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API requests

const Dashboard = () => {
  const [userData, setUserData] = useState(null); // State to store user data

  useEffect(() => {
    // Fetch user data from backend API
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/userData'); // Replace '/api/userData' with your actual API endpoint
        setUserData(response.data); // Update state with user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Fetch user data on component mount

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      {userData && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Active Package</h2>
          <p>Package Name: {userData.activePackage.name}</p>
          <p>Investment: ${userData.activePackage.investment}</p>
          <p>Interest: ${userData.activePackage.interest}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
