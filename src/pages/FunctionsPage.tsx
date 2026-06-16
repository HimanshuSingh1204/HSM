import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';
import { Plus, CheckCircle, X, AlertCircle } from 'lucide-react';
import { mockFunctionApprovals } from '../utils/mockData';

export function FunctionsPage() {
  const [approvals] = useState(mockFunctionApprovals);

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800',
      changes_requested: 'bg-orange-100 text-orange-800',
    };
    return colors[status] || colors['pending'];
  };

  const getEventIcon = (eventType: string) => {
    const icons: Record<string, string> = {
      wedding: '💒',
      birthday: '🎂',
      anniversary: '💑',
      other: '🎉',
    };
    return icons[eventType] || '🎉';
  };

  return (
    <MainLayout>
      <PageHeader
        title="Function Approvals"
        description="Manage private event applications"
        actions={
          <Button size="md">
            <Plus size={18} />
            New Application
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {approvals.map((approval, index) => (
          <motion.div
            key={approval.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-4xl">{getEventIcon(approval.eventType)}</span>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">
                      {approval.applicant}
                    </h3>
                    <p className="text-sm text-gray-600">Flat {approval.flatNumber}</p>
                  </div>
                </div>
                <Badge variant={getStatusColor(approval.status) as any}>
                  {approval.status === 'approved'
                    ? 'Approved'
                    : approval.status === 'rejected'
                    ? 'Rejected'
                    : approval.status === 'pending'
                    ? 'Pending'
                    : 'Changes Requested'}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Event Type</p>
                  <p className="font-semibold text-secondary capitalize">
                    {approval.eventType}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Guest Count</p>
                  <p className="font-semibold text-secondary">
                    {approval.guestCount}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Date</p>
                  <p className="font-semibold text-secondary">{approval.date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Duration</p>
                  <p className="font-semibold text-secondary">
                    {approval.duration} hours
                  </p>
                </div>
              </div>

              {approval.description && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Description</p>
                  <p className="text-secondary">{approval.description}</p>
                </div>
              )}

              {approval.status === 'pending' && (
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-100 text-green-800 font-semibold rounded-btn hover:bg-green-200 transition-colors"
                  >
                    <CheckCircle size={18} />
                    Approve
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-100 text-red-800 font-semibold rounded-btn hover:bg-red-200 transition-colors"
                  >
                    <X size={18} />
                    Reject
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 font-semibold rounded-btn hover:bg-orange-200 transition-colors"
                  >
                    <AlertCircle size={18} />
                    Changes
                  </motion.button>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </MainLayout>
  );
}
