import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the API call using Axios
      const response = await axios.post('YOUR_API_ENDPOINT', {
        username,
        password,
      });

      // Handle the response as needed
      console.log(response.data);

      // Optionally, navigate to a new page upon successful login
      navigate('/dashboard');
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
      setError('An error occurred during login.');
      // Optionally, display an error toast using react-toastify
      toast.error('An error occurred during login.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/37/a2/f6/37a2f6f442099c05eff0fc754360a8fe.jpg')" }}>
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Login to Your Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              placeholder="Username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <FontAwesomeIcon icon={faEye} className="text-gray-500" />
              </div>
            </div>
          </div>

          {/* {error && <div className="text-red-500 text-sm">{error}</div>} */}

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-500"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
