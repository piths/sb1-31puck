import React from 'react';
import { Assignment } from '../types';
import { CheckCircle, XCircle, TrendingUp, Award } from 'lucide-react';

interface AcademicPerformanceProps {
  assignments: Assignment[];
}

const AcademicPerformance: React.FC<AcademicPerformanceProps> = ({ assignments }) => {
  const completedAssignments = assignments.filter(a => a.submitted);
  const averageGrade = completedAssignments.reduce((sum, a) => sum + (a.grade || 0), 0) / completedAssignments.length;

  const getAcademicStanding = (grade: number) => {
    if (grade >= 90) return { text: 'Excellent', color: 'text-green-600' };
    if (grade >= 80) return { text: 'Good', color: 'text-blue-600' };
    if (grade >= 70) return { text: 'Average', color: 'text-yellow-600' };
    return { text: 'Needs Improvement', color: 'text-red-600' };
  };

  const standing = getAcademicStanding(averageGrade);

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Academic Performance</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Assignments and Grades</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Assignment</th>
                <th className="p-2 text-left">Due Date</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Grade</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map(assignment => (
                <tr key={assignment.id} className="border-b">
                  <td className="p-2">{assignment.title}</td>
                  <td className="p-2">{assignment.dueDate}</td>
                  <td className="p-2">
                    {assignment.submitted ? (
                      <CheckCircle className="text-green-500" />
                    ) : (
                      <XCircle className="text-red-500" />
                    )}
                  </td>
                  <td className="p-2">{assignment.grade || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <TrendingUp className="mr-2 text-blue-500" />
          Overall Performance
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold mb-2">{averageGrade.toFixed(2)}</p>
            <p className={`text-lg ${standing.color}`}>{standing.text}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Completed Assignments</p>
            <p className="text-2xl font-bold">{completedAssignments.length}/{assignments.length}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button className="btn btn-primary flex items-center">
          <Award className="mr-2" size={18} />
          View Full Academic Record
        </button>
      </div>
    </div>
  );
};

export default AcademicPerformance;