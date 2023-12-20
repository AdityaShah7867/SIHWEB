// src/App.js
import React from 'react';
// import './App.css'

function Dash() {
  const bailCount = 1287; // Replace with actual data
  const servicesCount = 3456; // Replace with actual data
  const lawyersCount = 72; // Replace with actual data

  return (
    <div className="App">
      <header className="bg-blue-800 text-white text-center py-4">
        <h1 className="text-3xl font-semibold">Legal Services Dashboard</h1>
      </header>
      <div className="Dashboard flex justify-around items-center p-12">
        <div className="Card bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Bail Granted</h2>
          <p className="text-4xl font-bold text-blue-500">{bailCount}</p>
        </div>
        <div className="Card bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Services Provided</h2>
          <p className="text-4xl font-bold text-green-500">{servicesCount}</p>
        </div>
        <div className="Card bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Lawyers in Business</h2>
          <p className="text-4xl font-bold text-yellow-500">{lawyersCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Dash;
