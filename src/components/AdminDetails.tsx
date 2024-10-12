import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Edit, Save } from 'lucide-react';

const AdminDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isEditing, setIsEditing] = useState(false);
  const [admin, setAdmin] = useState({
    id: 1,
    name: 'John Admin',
    email: 'john@admin.com',
    role: 'Super Admin',
    department: 'IT Administration',
    phoneNumber: '+1234567890',
    lastLogin: '2023-05-15 14:30:00',
    permissions: ['User Management', 'Course Management', 'Financial Management', 'Report Generation'],
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real application, you would send the updated data to an API here
    console.log('Saving admin data:', admin);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/admins" className="text-blue-600 hover:text-blue-800">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Admin Details</h1>
        </div>
        {isEditing ? (
          <button onClick={handleSave} className="btn btn-primary flex items-center">
            <Save size={18} className="mr-2" />
            Save Changes
          </button>
        ) : (
          <button onClick={handleEdit} className="btn btn-secondary flex items-center">
            <Edit size={18} className="mr-2" />
            Edit Admin
          </button>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={admin.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{admin.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={admin.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{admin.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            {isEditing ? (
              <select
                name="role"
                value={admin.role}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="Super Admin">Super Admin</option>
                <option value="Course Manager">Course Manager</option>
                <option value="Student Coordinator">Student Coordinator</option>
              </select>
            ) : (
              <p className="mt-1 text-lg">{admin.role}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            {isEditing ? (
              <input
                type="text"
                name="department"
                value={admin.department}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{admin.department}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            {isEditing ? (
              <input
                type="tel"
                name="phoneNumber"
                value={admin.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{admin.phoneNumber}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Login</label>
            <p className="mt-1 text-lg">{admin.lastLogin}</p>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">Permissions</label>
          <ul className="mt-1 list-disc list-inside">
            {admin.permissions.map((permission, index) => (
              <li key={index}>{permission}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDetails;