import React, { useState } from 'react';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/37/a2/f6/37a2f6f442099c05eff0fc754360a8fe.jpg')" }}>
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Login to Your Account</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="email" // Update name attribute to 'email'
              type="text"
              autoComplete="username"
              required
              placeholder="Username or email"
            //   value={credentials.email}
            //   onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                // type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                placeholder="Password"
                // value={credentials.password}
                // onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                // onClick={() => setShowPassword(!showPassword)}
              >
                {/* <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-500" /> */}
              </div>
            </div>
          </div>

          {/* {error && <div className="text-red-500 text-sm">{error}</div>} */}

          <button
            className="w-full bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-500"
            // disabled={loading}
          > Log In
            {/* {loading ? 'Logging in...' : 'Log in'} */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;