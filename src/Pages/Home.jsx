// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import createUserIcon from '../images/a.png';
import manageUserIcon from '../images/b.png';
import verifyUserIcon from '../images/c.png';

const Home = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold mb-8 text-center">Choose Action</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/create-user" className="btn btn-big border-2 border-gray-500 p-4 rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-md">
            <img src={createUserIcon} alt="Create User" className="w-10/12 h-full mb-2" />
            <span className='text-2xl'>Create User</span>
          </Link>
          <Link to="/manage-user" className="btn btn-big border-2 border-gray-500 p-4 rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-md">
            <img src={manageUserIcon} alt="Manage User" className="w-10/12 h-full mb-2" />
            <span className='text-2xl'>Manage User</span>
          </Link>
          <Link to="/verify-user" className="btn btn-big border-2 border-gray-500 p-4 rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-md">
            <img src={verifyUserIcon} alt="Verify User" className="w-4/12 h-full mb-2" />
            <span className='text-2xl'>Verify Lawyer</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
