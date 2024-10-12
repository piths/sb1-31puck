export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  surname: string;
  admissionNumber: string;
  imageUrl: string;
  email: string;
  phoneNumber: string;
  gender: string;
  idNumber: string;
  verified: boolean;
  dateOfBirth?: string;
  address?: string;
}

export interface Enrollment {
  id: number;
  studentId: number;
  statusId: number;
  classId: number;
  termId: number;
  enrollmentDate?: string;
}

export interface Term {
  id: number;
  termName: string;
  startDate: string;
  endDate: string;
}

export interface Class {
  id: number;
  className: string;
  courseId: number;
}

export interface Course {
  id: number;
  courseName: string;
  levelId: number;
  departmentId: number;
}

export interface Department {
  id: number;
  name: string;
}

export interface Assignment {
  id: number;
  title: string;
  dueDate: string;
  submitted: boolean;
  grade?: number;
}

export interface Payment {
  id: number;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending' | 'Overdue';
}

export interface AdminNote {
  id: number;
  content: string;
  date: string;
}