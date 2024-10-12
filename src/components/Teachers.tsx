import React, { useState } from 'react';
import { Search, UserPlus } from 'lucide-react';

const Teachers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddTeacher, setShowAddTeacher] = useState(false);
  const [newTeacher, setNewTeacher] = useState({ name: '', email: '', department: '' });

  const teachers = [
    { id: 1, name: 'Dr. Alan Turing', email: 'alan@example.com', department: 'Computer Science' },
    { id: 2, name: 'Prof. Mary Johnson', email: 'mary@example.com', department: 'Business' },
    { id: 3, name: 'Dr. Nikola Tesla', email: 'nikola@example.com', department: 'Electrical Engineering' },
  ];

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTeacher = () => {
    // In a real application, you would send this to an API
    console.log('Adding new teacher:', newTeacher);
    setShowAddTeacher(false);
    setNewTeacher({ name: '', email: '', department: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Teachers</h1>
        <button className="btn btn-primary flex items-center" onClick={() => setShowAddTeacher(true)}>
          <UserPlus size={18} className="mr-2" />
          Add New Teacher
        </button>
      </div>
      {showAddTeacher && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Teacher</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              value={newTeacher.name}
              onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={newTeacher.email}
              onChange={(e) => setNewTeacher({...newTeacher, email: e.target.value})}
            />
            <input
              type="text"
              placeholder="Department"
              className="w-full p-2 border rounded"
              value={newTeacher.department}
              onChange={(e) => setNewTeacher({...newTeacher, department: e.target.value})}
            />
            <div className="flex justify-end space-x-2">
              <button className="btn btn-secondary" onClick={() => setShowAddTeacher(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleAddTeacher}>Add Teacher</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center bg-white rounded-lg shadow-md p-2">
        <Search className="text-gray-400 mr-2" size={20} />
        <input
          type="text"
          placeholder="Search teachers..."
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTeachers.map((teacher) => (
              <tr key={teacher.id}>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.department}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="#" className="text-blue-600 hover:text-blue-900">View Profile</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teachers;