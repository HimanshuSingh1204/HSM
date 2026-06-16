import { Building2, Users, TrendingUp, DollarSign, AlertCircle, Activity } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { MainLayout } from '../layouts/MainLayout';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 61000 },
  { month: 'May', revenue: 55000 },
  { month: 'Jun', revenue: 67000 },
];

const societyData = [
  { name: 'Active', value: 120, color: '#10B981' },
  { name: 'Inactive', value: 15, color: '#EF4444' },
  { name: 'Trial', value: 25, color: '#F59E0B' },
];

const recentActivities = [
  { id: 1, society: 'Green Valley Society', action: 'New subscription activated', time: '2 hours ago' },
  { id: 2, society: 'Sunrise Apartments', action: 'Admin profile updated', time: '4 hours ago' },
  { id: 3, society: 'Palm Gardens', action: 'Payment received', time: '6 hours ago' },
  { id: 4, society: 'Ocean View', action: 'Subscription renewed', time: '8 hours ago' },
];

export function SuperAdminDashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Platform Dashboard</h1>
          <p className="text-slate-600 mt-1">Overview of all societies on the platform</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">Total Societies</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">160</p>
                <p className="text-xs text-green-600 mt-2">↑ 12% from last month</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">Active Societies</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">120</p>
                <p className="text-xs text-green-600 mt-2">75% of total</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">Total Residents</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">12.5K</p>
                <p className="text-xs text-green-600 mt-2">↑ 8% from last month</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">Monthly Revenue</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">₹67L</p>
                <p className="text-xs text-green-600 mt-2">↑ 22% from last month</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <Card className="lg:col-span-2 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Monthly Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Society Status Pie */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Society Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={societyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {societyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {societyData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 flex items-center">
                    <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                    {item.name}
                  </span>
                  <span className="font-semibold text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start justify-between py-3 border-b border-slate-200 last:border-b-0">
                <div>
                  <p className="font-medium text-slate-900">{activity.society}</p>
                  <p className="text-sm text-slate-600 mt-1">{activity.action}</p>
                </div>
                <span className="text-xs text-slate-500 whitespace-nowrap ml-4">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Active Subscriptions</h3>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">150</p>
            <p className="text-sm text-slate-600 mt-2">24 expiring soon</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Support Tickets</h3>
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">8</p>
            <p className="text-sm text-slate-600 mt-2">3 high priority</p>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
