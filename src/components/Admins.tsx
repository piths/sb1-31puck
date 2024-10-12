import React, { useState } from 'react';
import { Search, UserPlus } from 'lucide-react';

const Admins: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddAdmin, setShowAddAdmin] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ name: '', email: '', role: '' });

  const admins = [
    { id: 1, name: 'John Admin', email: 'john@admin.com', role: 'Super Admin' },
    { id: 2, name: 'Sarah Manager', email: 'sarah@admin.com', role: 'Course Manager' },
    { id: 3, name: 'Mike Coordinator', email: 'mike@admin.com', role: 'Student Coordinator' },
  ];

  const filteredAdmins = admins.filter(admin =>
    admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddAdmin = () => {
    // In a real application, you would send this to an API
    console.log('Adding new admin:', newAdmin);
    setShowAddAdmin(false);
    setNewAdmin({ name: '', email: '', role: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Administrators</h1>
        <button className="btn btn-primary flex items-center" onClick={() => setShowAddAdmin(true)}>
          <UserPlus size={18} className="mr-2" />
          Add New Admin
        </button>
      </div>
      {showAddAdmin && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Administrator</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              value={newAdmin.name}
              onChange={(e) => setNewAdmin({...newAdmin, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={newAdmin.email}
              onChange={(e) => setNewAdmin({...newAdmin, email: e.target.value})}
            />
            <input
              type="text"
              placeholder="Role"
              className="w-full p-2 border rounded"
              value={newAdmin.role}
              onChange={(e) => setNewAdmin({...newAdmin, role: e.target.value})}
            />
            <div className="flex justify-end space-x-2">
              <button className="btn btn-secondary" onClick={() => setShowAddAdmin(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleAddAdmin}>Add Admin</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center bg-white rounded-lg shadow-md p-2">
        <Search className="text-gray-400 mr-2" size={20} />
        <input
          type="text"
          placeholder="Search administrators..."
          className="w-full outline-none text-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredAdmins.map((admin) => (
              <tr key={admin.id}>
                <td className="px-6 py-4 whitespace-nowrap">{admin.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{admin.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{admin.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="#" className="text-blue-600 hover:text-blue-900">Edit Permissions</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admins;