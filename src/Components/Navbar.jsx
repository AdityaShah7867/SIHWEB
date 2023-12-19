import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const [auth, setAuth] = useAuth();
//   const [backendStatus, setBackendStatus] = useState(false); 
  const navigate = useNavigate();

  // const checkBackendStatus = async () => {
  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_API_URL}/connection/status`);
  //     if (response.status === 200) {
  //       setBackendStatus(true);
  //     } else {
  //       setBackendStatus(false);
  //     }
  //   } catch (error) {
  //     console.error('Error checking backend status:', error);
  //   }
  // };
  
  // useEffect(() => {
  //   if (!backendStatus) {
  //     const intervalId = setInterval(checkBackendStatus, 4000);

  //     return () => clearInterval(intervalId);
  //   }
  // }, [backendStatus]);
  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

//   const handleLogout = () => {
//     localStorage.removeItem('auth');
//     setAuth({
//       ...auth,
//       user: null,
//       token: "",
//     });
//     navigate('/');
//   }

  const handleHome = () => {
    
    navigate('/');
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        
 
          <img
            src={Logo}
            alt="Logo"
            className="text-white font-semibold text-lg cursor-pointer"
            style={{width:"15%"}}
            onClick={handleHome}
          />
      
        
          {/* {
        backendStatus ? <span className="ml-8 text-white">{`SERVICE:online`}</span>:<span className="ml-8 text-white">{`SERVICE: offline`}</span>
          } */}
        </div>
        
        <div className="hidden md:flex space-x-4">
         
            <Link to="/home" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/create-user" className="text-white hover:text-gray-300">Create User</Link>
          <Link to="/verify-lawyer" className="text-white hover:text-gray-300">Verify Laywer</Link>
          <Link to="/manage-user" className="text-white hover:text-gray-300">Officials</Link>
          <Link to="/manage-user" className="text-white hover:text-gray-300">Logout</Link>



          {/* <Link to="/status/completed" className="text-white hover:text-gray-300">Completed</Link> */}

          {/* <Link  onClick={handleLogout}   className="bg-red-500 text-white text-sm px-4 py-1 rounded-full hover:bg-red-600">Logout</Link> */}
         
        </div>
        

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2">
         
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/status" className="text-white hover:text-gray-300">Status</Link>
          <Link to="/ticket" className="text-white hover:text-gray-300">Ticket</Link>
          <Link to="/customer" className="text-white hover:text-gray-300">Customer</Link>

          <Link   className="bg-red-500 text-white text-sm px-4 py-1 rounded-full hover:bg-red-600">Logout</Link>
        
        </div>
      )}

      

    </nav>
  );
};

export default Navbar;