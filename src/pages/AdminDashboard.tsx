import { Users, Home, AlertCircle, FileText, TrendingUp, BarChart3 } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { MainLayout } from '../layouts/MainLayout';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 450000 },
  { month: 'Feb', revenue: 520000 },
  { month: 'Mar', revenue: 480000 },
  { month: 'Apr', revenue: 610000 },
  { month: 'May', revenue: 550000 },
  { month: 'Jun', revenue: 670000 },
];

const complaintTrendData = [
  { month: 'Jan', complaints: 12 },
  { month: 'Feb', complaints: 15 },
  { month: 'Mar', complaints: 10 },
  { month: 'Apr', complaints: 18 },
  { month: 'May', complaints: 14 },
  { month: 'Jun', complaints: 16 },
];

const occupancyData = [
  { name: 'Occupied', value: 125, color: '#10B981' },
  { name: 'Vacant', value: 20, color: '#E5E7EB' },
];

const recentComplaints = [
  { id: 1, title: 'Water leakage in Wing B', status: 'in_progress', priority: 'high' },
  { id: 2, title: 'Noise complaint from 4th floor', status: 'assigned', priority: 'medium' },
  { id: 3, title: 'Maintenance request for elevator', status: 'pending', priority: 'urgent' },
  { id: 4, title: 'Plumbing issue in common area', status: 'resolved', priority: 'medium' },
];

const quickActions = [
  { icon: FileText, label: 'Create Notice', color: 'bg-blue-100 text-blue-600' },
  { icon: Users, label: 'Add Resident', color: 'bg-green-100 text-green-600' },
  { icon: AlertCircle, label: 'New Complaint', color: 'bg-orange-100 text-orange-600' },
  { icon: TrendingUp, label: 'Generate Bills', color: 'bg-purple-100 text-purple-600' },
];

export function AdminDashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-1">Overview of your society at a glance</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            {quickActions.map((action) => (
              <button
                key={action.label}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${action.color} hover:shadow-md transition`}
              >
                <action.icon className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card className="p-6 hover:shadow-lg transition">
            <p className="text-sm text-slate-600 font-medium">Total Residents</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">125</p>
            <p className="text-xs text-green-600 mt-2">↑ 12%</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <p className="text-sm text-slate-600 font-medium">Total Flats</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">150</p>
            <p className="text-xs text-green-600 mt-2">↑ 5%</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <p className="text-sm text-slate-600 font-medium">Visitors Today</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">8</p>
            <p className="text-xs text-slate-500 mt-2">3 pending</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <p className="text-sm text-slate-600 font-medium">Open Complaints</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
            <p className="text-xs text-orange-600 mt-2">2 urgent</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <p className="text-sm text-slate-600 font-medium">Pending Payments</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">18</p>
            <p className="text-xs text-red-600 mt-2">₹2.4L due</p>
          </Card>
        </div>

        {/* Revenue and Collections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Monthly Revenue</h3>
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

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Occupancy Status</h3>
            <div className="flex items-center justify-between mb-6">
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={occupancyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {occupancyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {occupancyData.map((item) => (
                  <div key={item.name} className="text-center">
                    <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                    <p className="text-sm text-slate-600">{item.name}</p>
                  </div>
                ))}
                <p className="text-sm text-slate-600 mt-4">
                  <span className="font-semibold text-slate-900">83%</span> Occupancy Rate
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Complaint Trend and Recent Notices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Complaint Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={complaintTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="complaints" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Complaints</h3>
            <div className="space-y-3">
              {recentComplaints.map((complaint) => (
                <div key={complaint.id} className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-medium text-slate-900">{complaint.title}</p>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      complaint.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                      complaint.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {complaint.priority.charAt(0).toUpperCase() + complaint.priority.slice(1)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Status: <span className="text-slate-600 font-medium">{complaint.status.replace('_', ' ')}</span>
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-slate-600">Revenue Collected</h3>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">₹45.0L</p>
            <p className="text-xs text-green-600 mt-2">↑ 8% from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-slate-600">Outstanding Dues</h3>
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">₹2.4L</p>
            <p className="text-xs text-red-600 mt-2">From 18 residents</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-slate-600">Upcoming Events</h3>
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">3</p>
            <p className="text-xs text-slate-600 mt-2">This month</p>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
