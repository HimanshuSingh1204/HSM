import { Users, Package, AlertCircle, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { MainLayout } from '../layouts/MainLayout';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const visitorsData = [
  { day: 'Mon', visitors: 24 },
  { day: 'Tue', visitors: 31 },
  { day: 'Wed', visitors: 28 },
  { day: 'Thu', visitors: 35 },
  { day: 'Fri', visitors: 42 },
  { day: 'Sat', visitors: 38 },
  { day: 'Sun', visitors: 25 },
];

const entryStatusData = [
  { name: 'Approved', value: 85, color: '#10B981' },
  { name: 'Pending', value: 12, color: '#F59E0B' },
  { name: 'Rejected', value: 3, color: '#EF4444' },
];

const recentVisitors = [
  { id: 1, name: 'Rahul Sharma', flatNumber: '402', purpose: 'Delivery', time: '2:30 PM', status: 'approved' },
  { id: 2, name: 'Priya Patel', flatNumber: '305', purpose: 'Guest', time: '1:45 PM', status: 'pending' },
  { id: 3, name: 'Vikram Singh', flatNumber: '501', purpose: 'Repair', time: '12:15 PM', status: 'approved' },
  { id: 4, name: 'Anjali Gupta', flatNumber: '203', purpose: 'Delivery', time: '11:30 AM', status: 'approved' },
];

const deliveries = [
  { id: 1, courier: 'Amazon', recipient: 'Flat 402', items: 1, time: '3:00 PM', status: 'delivered' },
  { id: 2, courier: 'Flipkart', recipient: 'Flat 305', items: 2, time: '2:45 PM', status: 'pending' },
  { id: 3, courier: 'Local', recipient: 'Flat 501', items: 1, time: '2:20 PM', status: 'delivered' },
];

export function WatchmanDashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Security Dashboard</h1>
          <p className="text-slate-600 mt-1">Gate & Visitor Management</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">Visitors Today</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">47</p>
                <p className="text-xs text-green-600 mt-2">↑ 15% from yesterday</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">Pending Approvals</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
                <p className="text-xs text-orange-600 mt-2">Require action</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">Expected Guests</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">8</p>
                <p className="text-xs text-slate-500 mt-2">This week</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">Deliveries</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">23</p>
                <p className="text-xs text-green-600 mt-2">Today</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Package className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Weekly Visitor Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visitorsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visitors" stroke="#2563EB" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Entry Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={entryStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {entryStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {entryStatusData.map((item) => (
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

        {/* Recent Visitors and Deliveries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Visitor Entries</h3>
            <div className="space-y-3">
              {recentVisitors.map((visitor) => (
                <div key={visitor.id} className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{visitor.name}</p>
                      <p className="text-xs text-slate-600 mt-1">Flat: {visitor.flatNumber} • {visitor.purpose}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">{visitor.time}</p>
                      <span className={`text-xs font-semibold px-2 py-1 rounded mt-1 inline-block ${
                        visitor.status === 'approved' ? 'bg-green-100 text-green-700' :
                        visitor.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {visitor.status.charAt(0).toUpperCase() + visitor.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Courier Deliveries</h3>
            <div className="space-y-3">
              {deliveries.map((delivery) => (
                <div key={delivery.id} className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{delivery.courier}</p>
                      <p className="text-xs text-slate-600 mt-1">{delivery.recipient} • {delivery.items} item(s)</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">{delivery.time}</p>
                      <span className={`text-xs font-semibold px-2 py-1 rounded mt-1 inline-block ${
                        delivery.status === 'delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {delivery.status.charAt(0).toUpperCase() + delivery.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Emergency Section */}
        <Card className="p-6 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Emergency Alert System</h3>
                <p className="text-sm text-slate-600 mt-1">Send emergency alerts to residents and admins</p>
              </div>
            </div>
            <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition">
              Send Alert
            </button>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
