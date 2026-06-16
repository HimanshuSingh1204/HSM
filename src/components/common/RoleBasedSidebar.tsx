import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore.ts';
import {
  LayoutDashboard,
  Building2,
  Users,
  Eye,
  AlertCircle,
  FileText,
  Vote,
  Calendar,
  DollarSign,
  Car,
  Briefcase,
  BarChart3,
  Settings,
  LogOut,
  ChevronDown,
  User,
  Menu,
  X,
  Eye as EyeIcon,
} from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export function RoleBasedSidebar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const getMenuItems = (): MenuItem[] => {
    const role = user?.role;

    switch (role) {
      case 'super-admin':
        return [
          { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', path: '/super-admin/dashboard' },
          { icon: <Building2 className="w-5 h-5" />, label: 'Societies', path: '/super-admin/societies' },
          { icon: <DollarSign className="w-5 h-5" />, label: 'Subscriptions', path: '/super-admin/subscriptions' },
          { icon: <BarChart3 className="w-5 h-5" />, label: 'Revenue', path: '/super-admin/revenue' },
          { icon: <Users className="w-5 h-5" />, label: 'Users', path: '/super-admin/users' },
          { icon: <FileText className="w-5 h-5" />, label: 'Reports', path: '/super-admin/reports' },
          { icon: <AlertCircle className="w-5 h-5" />, label: 'Support', path: '/super-admin/support' },
          { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/super-admin/settings' },
        ];

      case 'admin':
        return [
          { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', path: '/admin/dashboard' },
          { icon: <Users className="w-5 h-5" />, label: 'Residents', path: '/admin/residents' },
          { icon: <Home className="w-5 h-5" />, label: 'Flats', path: '/admin/flats' },
          { icon: <Eye className="w-5 h-5" />, label: 'Visitors', path: '/admin/visitors' },
          { icon: <AlertCircle className="w-5 h-5" />, label: 'Complaints', path: '/admin/complaints' },
          { icon: <FileText className="w-5 h-5" />, label: 'Notices', path: '/admin/notices' },
          { icon: <Vote className="w-5 h-5" />, label: 'Polls', path: '/admin/polls' },
          { icon: <Calendar className="w-5 h-5" />, label: 'Functions', path: '/admin/functions' },
          { icon: <DollarSign className="w-5 h-5" />, label: 'Billing', path: '/admin/billing' },
          { icon: <Car className="w-5 h-5" />, label: 'Vehicles', path: '/admin/vehicles' },
          { icon: <Briefcase className="w-5 h-5" />, label: 'Staff', path: '/admin/staff' },
          { icon: <FileText className="w-5 h-5" />, label: 'Documents', path: '/admin/documents' },
          { icon: <BarChart3 className="w-5 h-5" />, label: 'Reports', path: '/admin/reports' },
          { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/admin/settings' },
        ];

      case 'watchman':
        return [
          { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', path: '/watchman/dashboard' },
          { icon: <Eye className="w-5 h-5" />, label: 'Visitor Entry', path: '/watchman/visitor-entry' },
          { icon: <Users className="w-5 h-5" />, label: 'Visitors', path: '/watchman/visitors' },
          { icon: <FileText className="w-5 h-5" />, label: 'Deliveries', path: '/watchman/deliveries' },
          { icon: <EyeIcon className="w-5 h-5" />, label: 'Guest Verification', path: '/watchman/guest-verification' },
          { icon: <AlertCircle className="w-5 h-5" />, label: 'Emergency Alerts', path: '/watchman/emergency' },
        ];

      case 'member':
        return [
          { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', path: '/member/dashboard' },
          { icon: <User className="w-5 h-5" />, label: 'My Profile', path: '/member/profile' },
          { icon: <Users className="w-5 h-5" />, label: 'Family Members', path: '/member/family' },
          { icon: <Eye className="w-5 h-5" />, label: 'Visitors', path: '/member/visitors' },
          { icon: <AlertCircle className="w-5 h-5" />, label: 'Complaints', path: '/member/complaints' },
          { icon: <FileText className="w-5 h-5" />, label: 'Notices', path: '/member/notices' },
          { icon: <Vote className="w-5 h-5" />, label: 'Polls', path: '/member/polls' },
          { icon: <Calendar className="w-5 h-5" />, label: 'Function Requests', path: '/member/functions' },
          { icon: <DollarSign className="w-5 h-5" />, label: 'Bills', path: '/member/payments' },
          { icon: <FileText className="w-5 h-5" />, label: 'Documents', path: '/member/documents' },
          { icon: <Car className="w-5 h-5" />, label: 'Vehicles', path: '/member/vehicles' },
          { icon: <AlertCircle className="w-5 h-5" />, label: 'Emergency', path: '/member/emergency' },
        ];

      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuContent = (
    <>
      {/* Profile Section */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
            {user?.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-900 truncate">{user?.name}</p>
            <p className="text-xs text-slate-600 capitalize">{user?.role.replace('-', ' ')}</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path);
          return (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setIsMobileOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-3 border-t border-slate-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 p-2 lg:hidden bg-white rounded-lg shadow-md hover:shadow-lg transition"
      >
        {isMobileOpen ? (
          <X className="w-6 h-6 text-slate-600" />
        ) : (
          <Menu className="w-6 h-6 text-slate-600" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 h-screen bg-white border-r border-slate-200 fixed left-0 top-0">
        {menuContent}
      </aside>

      {/* Sidebar - Mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform lg:hidden ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {menuContent}
      </aside>
    </>
  );
}

// Placeholder for Home icon
function Home(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
