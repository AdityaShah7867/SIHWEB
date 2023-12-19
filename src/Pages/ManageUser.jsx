// ManageUser.jsx

import React, { useState } from 'react';

const ManageUser = () => {
  const initialUsers = [
    { id: 'court123', role: 'court', disabled: false },
    { id: 'jailer456', role: 'jailer', disabled: true },
    { id: 'police789', role: 'police', disabled: false },
  ];

  const [users, setUsers] = useState(initialUsers);

  const toggleDisable = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, disabled: !user.disabled } : user
      )
    );
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-16">User Management Portal</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">ID</th>
            <th className="py-2 px-4 border-b text-left">Role</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className={`${
                    user.disabled ? 'bg-green-500' : 'bg-red-500'
                  } text-white py-1 px-2 mr-2 rounded`}
                  onClick={() => toggleDisable(user.id)}
                >
                  {user.disabled ? 'Enable' : 'Disable'}
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded"
                  onClick={() => deleteUser(user.id)}
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
