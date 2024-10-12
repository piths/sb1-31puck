import React, { useState } from 'react';
import { BarChart, PieChart, FileText, Download } from 'lucide-react';

const Reports: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [generatedReportUrl, setGeneratedReportUrl] = useState<string | null>(null);

  const generateReport = (reportType: string) => {
    // In a real application, this would trigger an API call to generate the report
    console.log(`Generating ${reportType} report...`);
    setSelectedReport(reportType);
    // Simulate report generation delay
    setTimeout(() => {
      console.log(`${reportType} report generated!`);
      // In a real application, this URL would come from the API
      setGeneratedReportUrl(`/reports/${reportType.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.pdf`);
    }, 2000);
  };

  const downloadReport = () => {
    if (generatedReportUrl) {
      // In a real application, this would trigger the download of the actual file
      console.log(`Downloading report from: ${generatedReportUrl}`);
      // Simulating download
      const link = document.createElement('a');
      link.href = generatedReportUrl;
      link.download = `${selectedReport?.replace(/\s+/g, '-')}-report.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ReportCard
          icon={<BarChart className="text-blue-500" size={24} />}
          title="Student Performance"
          description="View detailed reports on student grades and progress."
          onGenerate={() => generateReport('Student Performance')}
        />
        <ReportCard
          icon={<PieChart className="text-green-500" size={24} />}
          title="Course Enrollment"
          description="Analyze course popularity and enrollment trends."
          onGenerate={() => generateReport('Course Enrollment')}
        />
        <ReportCard
          icon={<FileText className="text-purple-500" size={24} />}
          title="Financial Summary"
          description="Review tuition payments and financial statistics."
          onGenerate={() => generateReport('Financial Summary')}
        />
      </div>
      {selectedReport && (
        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Generated Report: {selectedReport}</h2>
          <p className="mb-4">Your report has been generated. You can now download it or view it online.</p>
          <div className="flex space-x-4">
            <button 
              className="btn btn-primary flex items-center"
              onClick={downloadReport}
              disabled={!generatedReportUrl}
            >
              <Download size={18} className="mr-2" />
              Download Report
            </button>
            <button className="btn btn-secondary" disabled={!generatedReportUrl}>View Online</button>
          </div>
        </div>
      )}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Reports</h2>
        <ul className="space-y-4">
          <ReportItem title="Q2 2023 Student Performance Summary" date="May 1, 2023" />
          <ReportItem title="Course Enrollment Trends - Spring 2023" date="April 15, 2023" />
          <ReportItem title="Annual Financial Report - 2022" date="March 30, 2023" />
        </ul>
      </div>
    </div>
  );
};

const ReportCard: React.FC<{ icon: React.ReactNode; title: string; description: string; onGenerate: () => void }> = ({ icon, title, description, onGenerate }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="btn btn-secondary" onClick={onGenerate}>Generate Report</button>
    </div>
  );
};

const ReportItem: React.FC<{ title: string; date: string }> = ({ title, date }) => {
  return (
    <li className="flex justify-between items-center">
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <button className="btn btn-secondary">View</button>
    </li>
  );
};

export default Reports;