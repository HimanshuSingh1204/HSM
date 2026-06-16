import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { StatCard } from '../components/ui/StatCard';
import { Table } from '../components/ui/Table';
import { motion } from 'framer-motion';
import { Search, Plus, UserCheck, Clock, CheckCircle, X } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { mockVisitors } from '../utils/mockData';
import { useSearch } from '../hooks';

export function VisitorsPage() {
  const [visitors] = useState(mockVisitors);
  const [searchedVisitors, setSearchQuery] = useSearch(visitors, ['name', 'mobileNumber', 'flatNumber']);

  const todayVisitors = visitors.length;
  const approvedVisitors = visitors.filter((v) => v.status === 'approved').length;
  const pendingVisitors = visitors.filter((v) => v.status === 'pending').length;

  const columns = [
    {
      key: 'name',
      label: 'Visitor Name',
      render: (value: any) => (
        <p className="font-semibold text-secondary">{value}</p>
      ),
    },
    {
      key: 'mobileNumber',
      label: 'Mobile Number',
      render: (value: any) => <p className="text-secondary">{value}</p>,
    },
    {
      key: 'flatNumber',
      label: 'Flat Number',
      render: (value: any) => <p className="text-secondary">{value}</p>,
    },
    {
      key: 'entryTime',
      label: 'Entry Time',
      render: (value: any) => <p className="text-secondary">{value}</p>,
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: any) => (
        <Badge
          variant={value === 'approved' ? 'success' : value === 'pending' ? 'warning' : 'danger'}
        >
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Badge>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (value: any, row: any) => (
        <div className="flex gap-2">
          {row.status === 'pending' && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                title="Approve"
              >
                <CheckCircle size={18} className="text-success" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                title="Reject"
              >
                <X size={18} className="text-danger" />
              </motion.button>
            </>
          )}
        </div>
      ),
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Visitors"
        description="Track and manage society visitors"
        actions={
          <Button size="md">
            <Plus size={18} />
            Register Visitor
          </Button>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div whileHover={{ y: -4 }}>
          <StatCard
            label="Today's Visitors"
            value={todayVisitors}
            icon={<UserCheck size={32} />}
            backgroundColor="bg-blue-50"
            textColor="text-primary"
          />
        </motion.div>
        <motion.div whileHover={{ y: -4 }}>
          <StatCard
            label="Approved"
            value={approvedVisitors}
            icon={<CheckCircle size={32} />}
            backgroundColor="bg-green-50"
            textColor="text-success"
          />
        </motion.div>
        <motion.div whileHover={{ y: -4 }}>
          <StatCard
            label="Pending Approvals"
            value={pendingVisitors}
            icon={<Clock size={32} />}
            backgroundColor="bg-orange-50"
            textColor="text-warning"
          />
        </motion.div>
      </div>

      <Card className="mb-6">
        <Input
          placeholder="Search visitors by name, mobile, or flat number..."
          icon={<Search size={18} />}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Card>

      <Card>
        <Table columns={columns} data={searchedVisitors} />
      </Card>
    </MainLayout>
  );
}
