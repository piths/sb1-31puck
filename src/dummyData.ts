import { Student, Enrollment, Term, Class, Course, Department, Assignment, Payment, AdminNote } from './types';

export const student: Student = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  surname: 'Smith',
  admissionNumber: 'ADM001',
  imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  email: 'john.doe@example.com',
  phoneNumber: '+1234567890',
  gender: 'Male',
  idNumber: 'ID12345',
  verified: true,
  dateOfBirth: '1995-05-15',
  address: '123 Main St, Anytown, USA',
};

export const enrollment: Enrollment = {
  id: 1,
  studentId: 1,
  statusId: 1,
  classId: 1,
  termId: 1,
  enrollmentDate: '2023-01-15',
};

export const term: Term = {
  id: 1,
  termName: 'Fall 2023',
  startDate: '2023-09-01',
  endDate: '2023-12-15',
};

export const class_: Class = {
  id: 1,
  className: 'Computer Science 101',
  courseId: 1,
};

export const course: Course = {
  id: 1,
  courseName: 'Bachelor of Science in Computer Science',
  levelId: 1,
  departmentId: 1,
};

export const department: Department = {
  id: 1,
  name: 'School of Computing and Information Technology',
};

export const assignments: Assignment[] = [
  { id: 1, title: 'Introduction to Programming', dueDate: '2023-09-15', submitted: true, grade: 85 },
  { id: 2, title: 'Data Structures Project', dueDate: '2023-10-01', submitted: false },
  { id: 3, title: 'Algorithm Analysis', dueDate: '2023-10-20', submitted: true, grade: 92 },
  { id: 4, title: 'Database Design', dueDate: '2023-11-05', submitted: true, grade: 88 },
  { id: 5, title: 'Web Development Basics', dueDate: '2023-11-25', submitted: false },
];

export const payments: Payment[] = [
  { id: 1, amount: 5000, date: '2023-08-15', status: 'Paid' },
  { id: 2, amount: 5000, date: '2023-10-01', status: 'Pending' },
  { id: 3, amount: 5000, date: '2023-12-01', status: 'Overdue' },
];

export const adminNotes: AdminNote[] = [
  { id: 1, content: 'Student requested accommodation for exam', date: '2023-09-10' },
  { id: 2, content: 'Discussed career options and internship opportunities', date: '2023-10-05' },
  { id: 3, content: 'Warned about attendance issues', date: '2023-11-15' },
];