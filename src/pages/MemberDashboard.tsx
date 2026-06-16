import { AlertCircle, Calendar, FileText, Vote, Home, AlertTriangle, Clock, DollarSign } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MainLayout } from '../layouts/MainLayout';

const pendingBills = [
  { id: 1, month: 'June 2026', amount: '₹5,000', dueDate: '2026-06-30', status: 'pending' },
  { id: 2, month: 'July 2026', amount: '₹5,000', dueDate: '2026-07-31', status: 'pending' },
];

const notices = [
  { id: 1, title: 'Annual General Meeting Scheduled', date: '2026-06-10', likes: 24, comments: 5 },
  { id: 2, title: 'Maintenance Work Scheduled', date: '2026-06-12', likes: 18, comments: 3 },
  { id: 3, title: 'Emergency Water Shut-off', date: '2026-06-14', likes: 42, comments: 12 },
];

const events = [
  { id: 1, title: 'AGM Meeting', date: 'June 30, 2026', type: 'meeting' },
  { id: 2, title: 'Maintenance Work', date: 'June 20-22, 2026', type: 'maintenance' },
  { id: 3, title: 'Emergency Repair', date: 'June 18, 2026', type: 'emergency' },
];

const quickActions = [
  { icon: FileText, label: 'Visitor Pass', color: 'bg-blue-100 text-blue-600' },
  { icon: AlertTriangle, label: 'Raise Complaint', color: 'bg-orange-100 text-orange-600' },
  { icon: DollarSign, label: 'Pay Maintenance', color: 'bg-green-100 text-green-600' },
  { icon: Calendar, label: 'Book Function', color: 'bg-purple-100 text-purple-600' },
];

export function MemberDashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Dashboard</h1>
          <p className="text-slate-600 mt-1">Welcome back, Rajesh! Here's what's happening in your society.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <button
              key={action.label}
              className={`flex flex-col items-center justify-center p-4 rounded-lg ${action.color} hover:shadow-md transition`}
            >
              <action.icon className="w-6 h-6 mb-2" />
              <span className="text-xs font-semibold text-center">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">My Flat</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">A-402</p>
                <p className="text-xs text-slate-500 mt-2">Wing A, 4th Floor</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">Pending Bills</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">₹10K</p>
                <p className="text-xs text-red-600 mt-2">2 bills due</p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">Upcoming Events</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">3</p>
                <p className="text-xs text-blue-600 mt-2">This month</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">Active Polls</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">2</p>
                <p className="text-xs text-purple-600 mt-2">Vote now</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Vote className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Pending Bills */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900">Pending Bills</h3>
            <a href="/member/payments" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </a>
          </div>
          <div className="space-y-3">
            {pendingBills.map((bill) => (
              <div key={bill.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                <div>
                  <p className="font-medium text-slate-900">{bill.month}</p>
                  <p className="text-sm text-slate-600 mt-1">Due: {bill.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{bill.amount}</p>
                  <button className="text-xs text-blue-600 hover:text-blue-700 mt-1 font-medium">Pay Now</button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Notices and Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Recent Notices</h3>
              <a href="/member/notices" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </a>
            </div>
            <div className="space-y-3">
              {notices.map((notice) => (
                <div key={notice.id} className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition cursor-pointer">
                  <p className="text-sm font-medium text-slate-900 line-clamp-2">{notice.title}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-slate-500">{notice.date}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <span>❤️ {notice.likes}</span>
                      <span>💬 {notice.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Upcoming Events</h3>
              <a href="/member/events" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </a>
            </div>
            <div className="space-y-3">
              {events.map((event) => (
                <div key={event.id} className="p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg hover:shadow-md transition">
                  <p className="text-sm font-medium text-slate-900">{event.title}</p>
                  <div className="flex items-center mt-2 text-xs text-slate-600">
                    <Clock className="w-3 h-3 mr-1" />
                    {event.date}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Active Polls */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Active Polls</h3>
          <div className="space-y-4">
            {[
              { question: 'Should we increase the parking fee?', votes: 24, voted: true },
              { question: 'Approve new security system installation?', votes: 18, voted: false },
            ].map((poll, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-lg">
                <p className="font-medium text-slate-900 mb-3">{poll.question}</p>
                <div className="flex gap-2">
                  <button className={`flex-1 px-3 py-2 rounded text-sm font-medium transition ${
                    poll.voted ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}>
                    {poll.voted ? '✓ Voted' : 'Vote'}
                  </button>
                  <button className="flex-1 px-3 py-2 bg-slate-200 hover:bg-slate-300 rounded text-sm font-medium transition">
                    Results
                  </button>
                </div>
                <p className="text-xs text-slate-600 mt-2">{poll.votes} votes so far</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
