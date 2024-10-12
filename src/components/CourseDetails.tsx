import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Edit, Save } from 'lucide-react';

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isEditing, setIsEditing] = useState(false);
  const [course, setCourse] = useState({
    id: 1,
    name: 'Introduction to Computer Science',
    code: 'CS101',
    instructor: 'Dr. Alan Turing',
    department: 'Computer Science',
    credits: 3,
    description: 'An introductory course covering the basics of computer science and programming.',
    schedule: 'Mon, Wed, Fri 10:00 AM - 11:30 AM',
    enrollmentCapacity: 50,
    currentEnrollment: 45,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real application, you would send the updated data to an API here
    console.log('Saving course data:', course);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/courses" className="text-blue-600 hover:text-blue-800">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Course Details</h1>
        </div>
        {isEditing ? (
          <button onClick={handleSave} className="btn btn-primary flex items-center">
            <Save size={18} className="mr-2" />
            Save Changes
          </button>
        ) : (
          <button onClick={handleEdit} className="btn btn-secondary flex items-center">
            <Edit size={18} className="mr-2" />
            Edit Course
          </button>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={course.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{course.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Code</label>
            {isEditing ? (
              <input
                type="text"
                name="code"
                value={course.code}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{course.code}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Instructor</label>
            {isEditing ? (
              <input
                type="text"
                name="instructor"
                value={course.instructor}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{course.instructor}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            {isEditing ? (
              <input
                type="text"
                name="department"
                value={course.department}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{course.department}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Credits</label>
            {isEditing ? (
              <input
                type="number"
                name="credits"
                value={course.credits}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{course.credits}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Schedule</label>
            {isEditing ? (
              <input
                type="text"
                name="schedule"
                value={course.schedule}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{course.schedule}</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          {isEditing ? (
            <textarea
              name="description"
              value={course.description}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="mt-1 text-lg">{course.description}</p>
          )}
        </div>
        <div className="mt-6 flex justify-between">
          <div>
            <label className="block text-sm font-medium text-gray-700">Enrollment Capacity</label>
            <p className="mt-1 text-lg">{course.enrollmentCapacity}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Enrollment</label>
            <p className="mt-1 text-lg">{course.currentEnrollment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;