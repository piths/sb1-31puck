import React, { useState } from 'react';
import { Payment, AdminNote } from '../types';
import { DollarSign, FileText, Send, AlertCircle, Plus } from 'lucide-react';

interface AdministrativeActionsProps {
  payments: Payment[];
  adminNotes: AdminNote[];
}

const AdministrativeActions: React.FC<AdministrativeActionsProps> = ({ payments, adminNotes }) => {
  const [showAddNote, setShowAddNote] = useState(false);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    // In a real application, you would send this to an API
    console.log('Adding new note:', newNote);
    setShowAddNote(false);
    setNewNote('');
  };

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Administrative Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Fees and Payments</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map(payment => (
                  <tr key={payment.id} className="border-b">
                    <td className="p-2">{payment.date}</td>
                    <td className="p-2">${payment.amount}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                        payment.status === 'Paid' ? 'bg-green-100 text-green-800' :
                        payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Admin Notes</h3>
          <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
            {adminNotes.map(note => (
              <div key={note.id} className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">{note.date}</p>
                <p>{note.content}</p>
              </div>
            ))}
          </div>
          {showAddNote ? (
            <div className="mt-4">
              <textarea
                className="w-full p-2 border rounded"
                rows={3}
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Enter new note..."
              ></textarea>
              <div className="mt-2 flex justify-end space-x-2">
                <button className="btn btn-secondary" onClick={() => setShowAddNote(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
              </div>
            </div>
          ) : (
            <button className="btn btn-secondary flex items-center" onClick={() => setShowAddNote(true)}>
              <Plus size={18} className="mr-2" />
              Add New Note
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <button className="btn btn-primary flex items-center justify-center">
          <DollarSign size={18} className="mr-2" />
          Process Payment
        </button>
        <button className="btn btn-secondary flex items-center justify-center">
          <FileText size={18} className="mr-2" />
          Generate Report
        </button>
        <button className="btn btn-secondary flex items-center justify-center">
          <Send size={18} className="mr-2" />
          Send Message
        </button>
        <button className="btn btn-secondary flex items-center justify-center">
          <AlertCircle size={18} className="mr-2" />
          Update Status
        </button>
      </div>
    </div>
  );
};

export default AdministrativeActions;