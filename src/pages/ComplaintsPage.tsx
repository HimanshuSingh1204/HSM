import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';
import { Plus, GripVertical } from 'lucide-react';
import { mockComplaints } from '../utils/mockData';
import { Complaint } from '../types';

const columns = [
  { id: 'new', title: 'New', color: 'bg-gray-100' },
  { id: 'assigned', title: 'Assigned', color: 'bg-blue-100' },
  { id: 'in_progress', title: 'In Progress', color: 'bg-yellow-100' },
  { id: 'resolved', title: 'Resolved', color: 'bg-green-100' },
  { id: 'completed', title: 'Completed', color: 'bg-emerald-100' },
];

interface ComplaintsByStatus {
  [key: string]: Complaint[];
}

export function ComplaintsPage() {
  const [complaints] = useState(mockComplaints);

  const complaintsByStatus: ComplaintsByStatus = {
    new: complaints.filter((c) => c.status === 'new'),
    assigned: complaints.filter((c) => c.status === 'assigned'),
    in_progress: complaints.filter((c) => c.status === 'in_progress'),
    resolved: complaints.filter((c) => c.status === 'resolved'),
    completed: complaints.filter((c) => c.status === 'completed'),
  };

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      urgent: 'bg-red-100 text-red-800',
      high: 'bg-orange-100 text-orange-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800',
    };
    return colors[priority] || colors['low'];
  };

  const ComplaintCard = ({ complaint }: { complaint: Complaint }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-white p-4 rounded-card border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-move group"
    >
      <div className="flex items-start gap-3 mb-3">
        <GripVertical size={16} className="text-gray-300 group-hover:text-gray-500 mt-1" />
        <div className="flex-1">
          <p className="text-sm font-bold text-secondary">{complaint.complaintId}</p>
          <p className="text-sm text-gray-600 mt-1">{complaint.title}</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        <Badge variant={getPriorityColor(complaint.priority) as any}>
          {complaint.priority.charAt(0).toUpperCase() + complaint.priority.slice(1)}
        </Badge>
        <span className="text-gray-500">{complaint.date}</span>
      </div>
    </motion.div>
  );

  return (
    <MainLayout>
      <PageHeader
        title="Complaints"
        description="Manage maintenance complaints with Kanban board"
        actions={
          <Button size="md">
            <Plus size={18} />
            New Complaint
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 overflow-x-auto">
        {columns.map((column) => (
          <div key={column.id} className="flex-shrink-0 w-full lg:w-auto">
            <div className={`${column.color} rounded-card p-4 min-h-screen`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-secondary">{column.title}</h3>
                <span className="bg-white px-2.5 py-1 rounded-full text-sm font-semibold text-gray-600">
                  {complaintsByStatus[column.id]?.length || 0}
                </span>
              </div>

              <div className="space-y-3">
                {complaintsByStatus[column.id]?.map((complaint) => (
                  <ComplaintCard key={complaint.id} complaint={complaint} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
