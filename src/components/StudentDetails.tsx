import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Edit, Save } from 'lucide-react';
import PersonalInformation from './PersonalInformation';
import EnrollmentInformation from './EnrollmentInformation';
import AcademicPerformance from './AcademicPerformance';
import AdministrativeActions from './AdministrativeActions';
import { student, enrollment, term, class_, course, department, assignments, payments, adminNotes } from '../dummyData';

const StudentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isEditing, setIsEditing] = useState(false);
  const [editedStudent, setEditedStudent] = useState(student);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real application, you would send the updated data to an API here
    console.log('Saving student data:', editedStudent);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedStudent({ ...editedStudent, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/students" className="text-blue-600 hover:text-blue-800">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Student Details</h1>
        </div>
        {isEditing ? (
          <button onClick={handleSave} className="btn btn-primary flex items-center">
            <Save size={18} className="mr-2" />
            Save Changes
          </button>
        ) : (
          <button onClick={handleEdit} className="btn btn-secondary flex items-center">
            <Edit size={18} className="mr-2" />
            Edit Student
          </button>
        )}
      </div>
      <PersonalInformation student={editedStudent} isEditing={isEditing} onChange={handleChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <EnrollmentInformation
          enrollment={enrollment}
          term={term}
          class_={class_}
          course={course}
          department={department}
        />
        <AcademicPerformance assignments={assignments} />
      </div>
      <AdministrativeActions payments={payments} adminNotes={adminNotes} />
    </div>
  );
};

export default StudentDetails;