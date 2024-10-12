import React, { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { GraduationCap, Menu, X, Home, Users, BookOpen, UserCheck, FileText, Settings as SettingsIcon, List } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Students from './components/Students';
import Admins from './components/Admins';
import Teachers from './components/Teachers';
import Reports from './components/Reports';
import StudentDetails from './components/StudentDetails';
import TeacherDetails from './components/TeacherDetails';
import CourseDetails from './components/CourseDetails';
import AdminDetails from './components/AdminDetails';
import SettingsPage from './components/Settings';
import Enrollments from './components/Enrollments';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white w-64 min-h-screen p-4 ${isSidebarOpen ? '' : 'hidden'}`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <GraduationCap size={32} className="text-blue-400" />
            <span className="text-2xl font-bold ml-2">EduManage</span>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X size={24} />
          </button>
        </div>
        <nav>
          <NavLinks />
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md">
          <div className="p-4 flex items-center">
            <button onClick={toggleSidebar} className="lg:hidden mr-4">
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-semibold">EduManage Dashboard</h1>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentDetails />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teachers/:id" element={<TeacherDetails />} />
            <Route path="/admins" element={<Admins />} />
            <Route path="/admins/:id" element={<AdminDetails />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/enrollments" element={<Enrollments />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

const NavLinks = () => (
  <ul className="space-y-2">
    <NavItem to="/" icon={<Home size={20} />} label="Dashboard" />
    <NavItem to="/students" icon={<Users size={20} />} label="Students" />
    <NavItem to="/courses" icon={<BookOpen size={20} />} label="Courses" />
    <NavItem to="/teachers" icon={<UserCheck size={20} />} label="Teachers" />
    <NavItem to="/admins" icon={<Users size={20} />} label="Admins" />
    <NavItem to="/reports" icon={<FileText size={20} />} label="Reports" />
    <NavItem to="/enrollments" icon={<List size={20} />} label="Enrollments" />
    <NavItem to="/settings" icon={<SettingsIcon size={20} />} label="Settings" />
  </ul>
);

const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-2 rounded-lg ${
          isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'
        }`
      }
    >
      {icon}
      <span className="ml-3">{label}</span>
    </NavLink>
  </li>
);

export default App;