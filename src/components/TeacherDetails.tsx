import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Edit, Save } from 'lucide-react';

const TeacherDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isEditing, setIsEditing] = useState(false);
  const [teacher, setTeacher] = useState({
    id: 1,
    name: 'Dr. Alan Turing',
    email: 'alan@example.com',
    department: 'Computer Science',
    courses: ['Introduction to Computer Science', 'Artificial Intelligence'],
    phoneNumber: '+1234567890',
    officeHours: 'Mon, Wed 2-4 PM',
    bio: 'Renowned computer scientist and cryptanalyst.',
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real application, you would send the updated data to an API here
    console.log('Saving teacher data:', teacher);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/teachers" className="text-blue-600 hover:text-blue-800">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Teacher Details</h1>
        </div>
        {isEditing ? (
          <button onClick={handleSave} className="btn btn-primary flex items-center">
            <Save size={18} className="mr-2" />
            Save Changes
          </button>
        ) : (
          <button onClick={handleEdit} className="btn btn-secondary flex items-center">
            <Edit size={18} className="mr-2" />
            Edit Teacher
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
                value={teacher.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{teacher.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={teacher.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{teacher.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            {isEditing ? (
              <input
                type="text"
                name="department"
                value={teacher.department}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{teacher.department}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            {isEditing ? (
              <input
                type="tel"
                name="phoneNumber"
                value={teacher.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{teacher.phoneNumber}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Office Hours</label>
            {isEditing ? (
              <input
                type="text"
                name="officeHours"
                value={teacher.officeHours}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1 text-lg">{teacher.officeHours}</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          {isEditing ? (
            <textarea
              name="bio"
              value={teacher.bio}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="mt-1 text-lg">{teacher.bio}</p>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Courses Taught</h2>
        <ul className="list-disc list-inside space-y-2">
          {teacher.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherDetails;