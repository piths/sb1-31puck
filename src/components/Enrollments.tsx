import React, { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';

const Enrollments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showAddEnrollment, setShowAddEnrollment] = useState(false);
  const [newEnrollment, setNewEnrollment] = useState({ studentName: '', courseName: '', enrollmentDate: '' });

  const enrollments = [
    { id: 1, studentName: 'John Doe', courseName: 'Introduction to Computer Science', enrollmentDate: '2023-01-15', status: 'Active' },
    { id: 2, studentName: 'Jane Smith', courseName: 'Business Ethics', enrollmentDate: '2023-02-01', status: 'Active' },
    { id: 3, studentName: 'Bob Johnson', courseName: 'Electrical Circuits', enrollmentDate: '2023-01-20', status: 'Dropped' },
    { id: 4, studentName: 'Alice Brown', courseName: 'Introduction to Psychology', enrollmentDate: '2023-02-10', status: 'Active' },
    { id: 5, studentName: 'Charlie Davis', courseName: 'Organic Chemistry', enrollmentDate: '2023-01-25', status: 'Completed' },
  ];

  const filteredEnrollments = enrollments.filter(enrollment => 
    (enrollment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enrollment.courseName.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filter === 'all' || enrollment.status === filter)
  );

  const handleAddEnrollment = () => {
    // In a real application, you would send this to an API
    console.log('Adding new enrollment:', newEnrollment);
    setShowAddEnrollment(false);
    setNewEnrollment({ studentName: '', courseName: '', enrollmentDate: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Enrollments</h1>
        <button className="btn btn-primary flex items-center" onClick={() => setShowAddEnrollment(true)}>
          <Plus size={18} className="mr-2" />
          Add New Enrollment
        </button>
      </div>
      {showAddEnrollment && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Enrollment</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Student Name"
              className="w-full p-2 border rounded"
              value={newEnrollment.studentName}
              onChange={(e) => setNewEnrollment({...newEnrollment, studentName: e.target.value})}
            />
            <input
              type="text"
              placeholder="Course Name"
              className="w-full p-2 border rounded"
              value={newEnrollment.courseName}
              onChange={(e) => setNewEnrollment({...newEnrollment, courseName: e.target.value})}
            />
            <input
              type="date"
              placeholder="Enrollment Date"
              className="w-full p-2 border rounded"
              value={newEnrollment.enrollmentDate}
              onChange={(e) => setNewEnrollment({...newEnrollment, enrollmentDate: e.target.value})}
            />
            <div className="flex justify-end space-x-2">
              <button className="btn btn-secondary" onClick={() => setShowAddEnrollment(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleAddEnrollment}>Add Enrollment</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow flex items-center bg-white rounded-lg shadow-md p-2">
          <Search className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search enrollments..."
            className="w-full outline-none text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center bg-white rounded-lg shadow-md p-2">
          <Filter className="text-gray-400 mr-2" size={20} />
          <select
            className="w-full outline-none text-gray-700 bg-transparent"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Dropped">Dropped</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrollment Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredEnrollments.map((enrollment) => (
              <tr key={enrollment.id}>
                <td className="px-6 py-4 whitespace-nowrap">{enrollment.studentName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enrollment.courseName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enrollment.enrollmentDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    enrollment.status === 'Active' ? 'bg-green-100 text-green-800' :
                    enrollment.status === 'Dropped' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {enrollment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Enrollments;