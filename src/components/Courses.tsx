import React, { useState } from 'react';
import { Search, BookPlus, Filter, Plus } from 'lucide-react';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [newCourse, setNewCourse] = useState({ name: '', code: '', instructor: '', department: '' });

  const courses = [
    { id: 1, name: 'Introduction to Computer Science', code: 'CS101', instructor: 'Dr. Alan Turing', department: 'Computer Science' },
    { id: 2, name: 'Business Ethics', code: 'BUS201', instructor: 'Prof. Mary Johnson', department: 'Business' },
    { id: 3, name: 'Electrical Circuits', code: 'EE150', instructor: 'Dr. Nikola Tesla', department: 'Electrical Engineering' },
    { id: 4, name: 'Introduction to Psychology', code: 'PSY101', instructor: 'Dr. Sigmund Freud', department: 'Psychology' },
    { id: 5, name: 'Organic Chemistry', code: 'CHEM301', instructor: 'Dr. Marie Curie', department: 'Chemistry' },
  ];

  const filteredCourses = courses.filter(course => 
    (course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filter === 'all' || course.department === filter)
  );

  const handleAddCourse = () => {
    // In a real application, you would send this to an API
    console.log('Adding new course:', newCourse);
    setShowAddCourse(false);
    setNewCourse({ name: '', code: '', instructor: '', department: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Courses</h1>
        <button className="btn btn-primary flex items-center" onClick={() => setShowAddCourse(true)}>
          <BookPlus size={18} className="mr-2" />
          Add New Course
        </button>
      </div>
      {showAddCourse && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Course Name"
              className="w-full p-2 border rounded"
              value={newCourse.name}
              onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
            />
            <input
              type="text"
              placeholder="Course Code"
              className="w-full p-2 border rounded"
              value={newCourse.code}
              onChange={(e) => setNewCourse({...newCourse, code: e.target.value})}
            />
            <input
              type="text"
              placeholder="Instructor"
              className="w-full p-2 border rounded"
              value={newCourse.instructor}
              onChange={(e) => setNewCourse({...newCourse, instructor: e.target.value})}
            />
            <input
              type="text"
              placeholder="Department"
              className="w-full p-2 border rounded"
              value={newCourse.department}
              onChange={(e) => setNewCourse({...newCourse, department: e.target.value})}
            />
            <div className="flex justify-end space-x-2">
              <button className="btn btn-secondary" onClick={() => setShowAddCourse(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleAddCourse}>Add Course</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow flex items-center bg-white rounded-lg shadow-md p-2">
          <Search className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search courses..."
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
            <option value="all">All Departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business">Business</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Psychology">Psychology</option>
            <option value="Chemistry">Chemistry</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredCourses.map((course) => (
              <tr key={course.id}>
                <td className="px-6 py-4 whitespace-nowrap">{course.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.code}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.instructor}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.department}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="#" className="text-blue-600 hover:text-blue-900 mr-4">Edit</a>
                  <a href="#" className="text-blue-600 hover:text-blue-900">View Details</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;