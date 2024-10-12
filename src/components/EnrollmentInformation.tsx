import React from 'react';
import { Enrollment, Term, Class, Course, Department } from '../types';
import { Calendar, BookOpen, Building2, GraduationCap, Clock } from 'lucide-react';

interface EnrollmentInformationProps {
  enrollment: Enrollment;
  term: Term;
  class_: Class;
  course: Course;
  department: Department;
}

const EnrollmentInformation: React.FC<EnrollmentInformationProps> = ({
  enrollment,
  term,
  class_,
  course,
  department,
}) => {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Enrollment Information</h2>
      <div className="space-y-4">
        <InfoItem
          icon={<Calendar className="text-blue-500" />}
          label="Current Term"
          value={`${term.termName} (${term.startDate} - ${term.endDate})`}
        />
        <InfoItem
          icon={<BookOpen className="text-green-500" />}
          label="Class"
          value={class_.className}
        />
        <InfoItem
          icon={<GraduationCap className="text-purple-500" />}
          label="Course"
          value={course.courseName}
        />
        <InfoItem
          icon={<Building2 className="text-yellow-500" />}
          label="Department"
          value={department.name}
        />
        <InfoItem
          icon={<Clock className="text-red-500" />}
          label="Enrollment Date"
          value={enrollment.enrollmentDate || 'Not available'}
        />
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h3 className="font-semibold mb-2">Enrollment Status</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            enrollment.statusId === 1 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {enrollment.statusId === 1 ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>
    </div>
  );
};

const InfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center">
    {icon}
    <div className="ml-3">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

export default EnrollmentInformation;