import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { StatCard } from '../components/ui/StatCard';
import { motion } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Home, UserCheck, AlertCircle, CreditCard, TrendingUp, Plus, Plus as PlusIcon } from 'lucide-react';
import { mockDashboardMetrics, mockNotices } from '../utils/mockData';

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const revenueData = monthLabels.map((month, i) => ({
  month,
  revenue: mockDashboardMetrics.monthlyRevenue[i],
}));

const complaintData = monthLabels.map((month, i) => ({
  month,
  complaints: mockDashboardMetrics.complaintTrend[i],
}));

const occupancyData = [
  { name: 'Occupied', value: 125, fill: '#2563EB' },
  { name: 'Vacant', value: 25, fill: '#F3F4F6' },
];

export function DashboardPage() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  return (
    <MainLayout>
      <PageHeader
        title="Dashboard"
        description="Overview of your society at a glance"
        actions={
          <div className="flex gap-3">
            <Button variant="outline" size="md">
              <PlusIcon size={18} />
              Add Report
            </Button>
            <Button size="md">
              <Plus size={18} />
              New Complaint
            </Button>
          </div>
        }
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <StatCard
            label="Total Residents"
            value={mockDashboardMetrics.totalResidents}
            icon={<Users size={32} />}
            trend={{ direction: 'up', percentage: 12 }}
            backgroundColor="bg-blue-50"
            textColor="text-primary"
          />
        </motion.div>
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <StatCard
            label="Total Flats"
            value={mockDashboardMetrics.totalFlats}
            icon={<Home size={32} />}
            trend={{ direction: 'up', percentage: 5 }}
            backgroundColor="bg-green-50"
            textColor="text-success"
          />
        </motion.div>
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <StatCard
            label="Visitors Today"
            value={mockDashboardMetrics.visitorsToday}
            icon={<UserCheck size={32} />}
            backgroundColor="bg-purple-50"
            textColor="text-purple-600"
          />
        </motion.div>
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <StatCard
            label="Open Complaints"
            value={mockDashboardMetrics.openComplaints}
            icon={<AlertCircle size={32} />}
            backgroundColor="bg-red-50"
            textColor="text-danger"
          />
        </motion.div>
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <StatCard
            label="Pending Payments"
            value={mockDashboardMetrics.pendingPayments}
            icon={<CreditCard size={32} />}
            backgroundColor="bg-orange-50"
            textColor="text-warning"
          />
        </motion.div>
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <StatCard
            label="Revenue Collected"
            value={`₹${(mockDashboardMetrics.collectedRevenue / 100000).toFixed(1)}L`}
            icon={<TrendingUp size={32} />}
            trend={{ direction: 'up', percentage: 8 }}
            backgroundColor="bg-emerald-50"
            textColor="text-emerald-600"
          />
        </motion.div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2">
          <h3 className="text-lg font-bold text-secondary mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="revenue" fill="#2563EB" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Occupancy */}
        <Card>
          <h3 className="text-lg font-bold text-secondary mb-4">Occupancy Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={occupancyData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                {occupancyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center mt-4">
            <p className="text-2xl font-bold text-secondary">83%</p>
            <p className="text-gray-600 text-sm">Occupied</p>
          </div>
        </Card>
      </div>

      {/* Complaint Trend and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <h3 className="text-lg font-bold text-secondary mb-4">Complaint Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={complaintData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                }}
              />
              <Line type="monotone" dataKey="complaints" stroke="#2563EB" strokeWidth={2} dot={{ fill: '#2563EB', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <h3 className="text-lg font-bold text-secondary mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm font-semibold text-secondary">AGM Meeting</p>
              <p className="text-xs text-gray-600">June 30, 2026</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <p className="text-sm font-semibold text-secondary">Maintenance Work</p>
              <p className="text-xs text-gray-600">June 20-22, 2026</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
              <p className="text-sm font-semibold text-secondary">Emergency Repair</p>
              <p className="text-xs text-gray-600">June 18, 2026</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Notices */}
      <Card className="mt-8">
        <h3 className="text-lg font-bold text-secondary mb-4">Recent Notices</h3>
        <div className="space-y-3">
          {mockNotices.slice(0, 3).map((notice) => (
            <motion.div
              key={notice.id}
              className="p-4 bg-gray-50 rounded-lg border-l-4 border-primary hover:bg-blue-50 transition-colors cursor-pointer"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-secondary mb-1">{notice.title}</h4>
                  <p className="text-sm text-gray-600">{notice.description}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    By {notice.postedBy} • {notice.date}
                  </p>
                </div>
                {notice.isPinned && (
                  <span className="ml-4 px-2 py-1 bg-warning text-white text-xs rounded">
                    Pinned
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </MainLayout>
  );
}
