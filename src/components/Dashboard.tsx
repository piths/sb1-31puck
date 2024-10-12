import React from 'react';
import { Users, BookOpen, GraduationCap, FileText, TrendingUp, Bell, DollarSign, Award, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard icon={<Users className="text-blue-500" size={24} />} title="Total Students" value="1,234" change="+5.2%" />
        <DashboardCard icon={<BookOpen className="text-green-500" size={24} />} title="Active Courses" value="56" change="+2.3%" />
        <DashboardCard icon={<GraduationCap className="text-purple-500" size={24} />} title="Teachers" value="78" change="+1.5%" />
        <DashboardCard icon={<DollarSign className="text-yellow-500" size={24} />} title="Revenue" value="$245,000" change="+8.7%" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EnrollmentChart />
        </div>
        <div>
          <Notifications />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AcademicPerformance />
        <UpcomingEvents />
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ icon: React.ReactNode; title: string; value: string; change: string }> = ({ icon, title, value, change }) => {
  const isPositive = change.startsWith('+');
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
      <div className="p-3 rounded-full bg-gray-100">{icon}</div>
      <div>
        <h2 className="text-sm font-semibold text-gray-600">{title}</h2>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change} <span className="text-gray-500">vs last month</span>
        </p>
      </div>
    </div>
  );
};

const EnrollmentChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Enrollment Trends</h2>
        <select className="border-gray-300 rounded-md text-gray-600 text-sm">
          <option>Last 6 months</option>
          <option>Last year</option>
          <option>All time</option>
        </select>
      </div>
      <div className="h-64 flex items-end justify-between">
        <div className="w-1/12 bg-blue-500 rounded-t" style={{ height: '40%' }}></div>
        <div className="w-1/12 bg-blue-500 rounded-t" style={{ height: '60%' }}></div>
        <div className="w-1/12 bg-blue-500 rounded-t" style={{ height: '75%' }}></div>
        <div className="w-1/12 bg-blue-500 rounded-t" style={{ height: '50%' }}></div>
        <div className="w-1/12 bg-blue-500 rounded-t" style={{ height: '80%' }}></div>
        <div className="w-1/12 bg-blue-500 rounded-t" style={{ height: '65%' }}></div>
        <div className="w-1/12 bg-blue-500 rounded-t" style={{ height: '90%' }}></div>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
      </div>
    </div>
  );
};

const Notifications: React.FC = () => {
  const notifications = [
    { id: 1, message: 'New student registration', time: '2 hours ago' },
    { id: 2, message: 'Course syllabus updated', time: '4 hours ago' },
    { id: 3, message: 'Upcoming parent-teacher meeting', time: '1 day ago' },
    { id: 4, message: 'New scholarship announced', time: '2 days ago' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Bell className="mr-2 text-yellow-500" size={20} />
        Recent Notifications
      </h2>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="flex justify-between items-center border-b pb-2">
            <span className="text-sm">{notification.message}</span>
            <span className="text-xs text-gray-500">{notification.time}</span>
          </li>
        ))}
      </ul>
      <Link to="/notifications" className="text-blue-500 text-sm mt-4 inline-block">View all notifications</Link>
    </div>
  );
};

const AcademicPerformance: React.FC = () => {
  const performanceData = [
    { subject: 'Mathematics', avgScore: 85 },
    { subject: 'Science', avgScore: 78 },
    { subject: 'Literature', avgScore: 92 },
    { subject: 'History', avgScore: 88 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Award className="mr-2 text-green-500" size={20} />
        Academic Performance
      </h2>
      <div className="space-y-4">
        {performanceData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm">
              <span>{item.subject}</span>
              <span className="font-semibold">{item.avgScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${item.avgScore}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/performance" className="text-blue-500 text-sm mt-4 inline-block">View detailed performance</Link>
    </div>
  );
};

const UpcomingEvents: React.FC = () => {
  const events = [
    { id: 1, title: 'End of Term Exams', date: 'May 15, 2023', time: '9:00 AM' },
    { id: 2, title: 'Parent-Teacher Meeting', date: 'May 20, 2023', time: '2:00 PM' },
    { id: 3, title: 'Science Fair', date: 'May 25, 2023', time: '10:00 AM' },
    { id: 4, title: 'Summer Break Begins', date: 'June 1, 2023', time: 'All Day' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Calendar className="mr-2 text-red-500" size={20} />
        Upcoming Events
      </h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id} className="flex items-center">
            <div className="flex-shrink-0 w-12 text-center">
              <p className="text-lg font-bold text-blue-600">{event.date.split(',')[0].split(' ')[1]}</p>
              <p className="text-xs text-gray-500">{event.date.split(',')[0].split(' ')[0]}</p>
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold">{event.title}</p>
              <p className="text-xs text-gray-500">{event.time}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/events" className="text-blue-500 text-sm mt-4 inline-block">View all events</Link>
    </div>
  );
};

export default Dashboard;