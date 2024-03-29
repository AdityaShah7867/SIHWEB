import React, { useState } from 'react';

const CreateUser = () => {
  const [userData, setUserData] = useState({
    type: "court",
    name: "",
    id: "",
    email: "",
    password: "",
    phoneNumber: 0
  }
  );

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/v1/admin/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('User data submitted successfully:', responseData);
        alert('User data submitted');
      } else {
        const errorData = await response.json();
        console.error('Failed to create user. Server returned:', response.status, response.statusText);
        alert('Failed to create user. Error: ' + errorData.message);
      }
    } catch (error) {
      console.error('An error occurred while trying to create user:', error.message);
      alert('An error occurred while trying to create user: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center " style={{ backgroundImage: "url('https://media.istockphoto.com/id/1330033671/photo/focus-on-hammer-group-of-files-on-judge-table-covered-with-dust-concept-of-pending-old-cases.webp?b=1&s=170667a&w=0&k=20&c=HIDYFEaSvUhU4ruW_S2Sqm0LD8Z5BBGxC4saPy7Ie_U=')" }}>
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Create User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              phoneNumber
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-600">
              User Type
            </label>
            <select
              id="type"
              name="type"
              value={userData.type}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="court">Court</option>
              <option value="policeStation">Police Station</option>
              <option value="jailer">Jailer</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
