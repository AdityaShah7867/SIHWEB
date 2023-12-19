import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/admin/getAllUsers');

        if (response.status === 200) {
          setUsers(response.data.users);
        } else {
          console.error('Error fetching users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchAllUsers();
  }, []);

  const toggleDisable = async (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === id ? { ...user, disabled: !user.disabled } : user
      )
    );

    try {
      const response = await axios.put(`http://localhost:8000/api/v1/admin/disableUser/${id}`);

      if (response.status === 200) {
        console.log("User disabled successfully");
      }
    } catch (error) {
      console.error("Error disabling user:", error);
    }



  };

  const deleteUser = async (id) => {
    const response = await axios.delete(`http://localhost:8000/api/v1/admin/deleteUser/${id}`)

    if (response.status === 200) {
      console.log("User deleted successfully");
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } else {
      console.error("Error deleting user");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-16">User Management Portal</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">ID</th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Email</th>
            <th className="py-2 px-4 border-b text-left">Type</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="py-2 px-4 border-b">{user._id}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.type}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className={`${user.isdisabled ? 'bg-green-500' : 'bg-red-500'
                    } text-white py-1 px-2 mr-2 rounded`}
                  onClick={() => toggleDisable(user._id)}
                >
                  {user.isdisabled ? 'Enable' : 'Disable'}
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
