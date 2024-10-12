import React, { useState } from 'react';
import { Save, Bell, Lock, User, Mail } from 'lucide-react';

const Settings: React.FC = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'EduManage',
    siteDescription: 'Student Management System',
    contactEmail: 'admin@edumanage.com',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    passwordExpiration: 90,
  });

  const handleGeneralSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralSettings({
      ...generalSettings,
      [e.target.name]: e.target.value,
    });
  };

  const handleNotificationSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotificationSettings({
      ...notificationSettings,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSecuritySettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecuritySettings({
      ...securitySettings,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
      
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <User className="mr-2" size={24} />
          General Settings
        </h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">Site Name</label>
            <input
              type="text"
              id="siteName"
              name="siteName"
              value={generalSettings.siteName}
              onChange={handleGeneralSettingsChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">Site Description</label>
            <input
              type="text"
              id="siteDescription"
              name="siteDescription"
              value={generalSettings.siteDescription}
              onChange={handleGeneralSettingsChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={generalSettings.contactEmail}
              onChange={handleGeneralSettingsChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Bell className="mr-2" size={24} />
          Notification Settings
        </h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="emailNotifications"
              name="emailNotifications"
              checked={notificationSettings.emailNotifications}
              onChange={handleNotificationSettingsChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-900">
              Email Notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="smsNotifications"
              name="smsNotifications"
              checked={notificationSettings.smsNotifications}
              onChange={handleNotificationSettingsChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="smsNotifications" className="ml-2 block text-sm text-gray-900">
              SMS Notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="pushNotifications"
              name="pushNotifications"
              checked={notificationSettings.pushNotifications}
              onChange={handleNotificationSettingsChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="pushNotifications" className="ml-2 block text-sm text-gray-900">
              Push Notifications
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Lock className="mr-2" size={24} />
          Security Settings
        </h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="twoFactorAuth"
              name="twoFactorAuth"
              checked={securitySettings.twoFactorAuth}
              onChange={handleSecuritySettingsChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="twoFactorAuth" className="ml-2 block text-sm text-gray-900">
              Enable Two-Factor Authentication
            </label>
          </div>
          <div>
            <label htmlFor="passwordExpiration" className="block text-sm font-medium text-gray-700">Password Expiration (days)</label>
            <input
              type="number"
              id="passwordExpiration"
              name="passwordExpiration"
              value={securitySettings.passwordExpiration}
              onChange={handleSecuritySettingsChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="btn btn-primary flex items-center">
          <Save size={18} className="mr-2" />
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;