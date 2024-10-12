import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, UserPlus, Filter } from 'lucide-react';

const Students: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: '', email: '', course: '', year: '' });

  const students = [
    { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Computer Science', year: '2nd Year' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Business Administration', year: '3rd Year' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', course: 'Electrical Engineering', year: '1st Year' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', course: 'Psychology', year: '4th Year' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', course: 'Medicine', year: '2nd Year' },
  ];

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'all' || student.year === filter)
  );

  const handleAddStudent = () => {
    // In a real application, you would send this to an API
    console.log('Adding new student:', newStudent);
    setShowAddStudent(false);
    setNewStudent({ name: '', email: '', course: '', year: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Students</h1>
        <button className="btn btn-primary flex items-center" onClick={() => setShowAddStudent(true)}>
          <UserPlus size={18} className="mr-2" />
          Add New Student
        </button>
      </div>
      {showAddStudent && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              value={newStudent.name}
              onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={newStudent.email}
              onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
            />
            <input
              type="text"
              placeholder="Course"
              className="w-full p-2 border rounded"
              value={newStudent.course}
              onChange={(e) => setNewStudent({...newStudent, course: e.target.value})}
            />
            <select
              className="w-full p-2 border rounded"
              value={newStudent.year}
              onChange={(e) => setNewStudent({...newStudent, year: e.target.value})}
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
            <div className="flex justify-end space-x-2">
              <button className="btn btn-secondary" onClick={() => setShowAddStudent(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleAddStudent}>Add Student</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow flex items-center bg-white rounded-lg shadow-md p-2">
          <Search className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search students..."
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
            <option value="all">All Years</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.course}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.year}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/students/${student.id}`} className="text-blue-600 hover:text-blue-900">View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;