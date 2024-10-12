import React from 'react';
import { Student } from '../types';
import { User, Mail, Phone, CheckCircle, XCircle, Edit, Calendar, MapPin } from 'lucide-react';

interface PersonalInformationProps {
  student: Student;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ student, isEditing, onChange }) => {
  return (
    <div className="card">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <img src={student.imageUrl} alt={`${student.firstName} ${student.lastName}`} className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6" />
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem
            icon={<User />}
            label="Full Name"
            value={`${student.firstName} ${student.lastName} ${student.surname}`}
            isEditing={isEditing}
            onChange={onChange}
            name="firstName"
          />
          <InfoItem
            icon={<Calendar />}
            label="Date of Birth"
            value={student.dateOfBirth || 'Not provided'}
            isEditing={isEditing}
            onChange={onChange}
            name="dateOfBirth"
            type="date"
          />
          <InfoItem
            icon={<Mail />}
            label="Email"
            value={student.email}
            isEditing={isEditing}
            onChange={onChange}
            name="email"
            type="email"
          />
          <InfoItem
            icon={<Phone />}
            label="Phone"
            value={student.phoneNumber}
            isEditing={isEditing}
            onChange={onChange}
            name="phoneNumber"
            type="tel"
          />
          <InfoItem
            icon={<MapPin />}
            label="Address"
            value={student.address || 'Not provided'}
            isEditing={isEditing}
            onChange={onChange}
            name="address"
          />
          <InfoItem
            icon={<User />}
            label="Gender"
            value={student.gender}
            isEditing={isEditing}
            onChange={onChange}
            name="gender"
          />
          <InfoItem
            icon={student.verified ? <CheckCircle className="text-green-500" /> : <XCircle className="text-red-500" />}
            label="Profile Status"
            value={student.verified ? 'Verified' : 'Not Verified'}
            isEditing={false}
          />
          <InfoItem
            label="Admission Number"
            value={student.admissionNumber}
            isEditing={false}
          />
        </div>
      </div>
    </div>
  );
};

const InfoItem: React.FC<{
  icon?: React.ReactNode;
  label: string;
  value: string;
  isEditing: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
}> = ({ icon, label, value, isEditing, onChange, name, type = 'text' }) => (
  <div className="flex items-center">
    {icon && <span className="mr-2 text-blue-500">{icon}</span>}
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      {isEditing && onChange ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  </div>
);

export default PersonalInformation;