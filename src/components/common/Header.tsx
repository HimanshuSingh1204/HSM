import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, LogOut, Settings } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { Avatar } from '../ui/Avatar';
import { menuItems } from '../../utils/helpers';
import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const currentPage = menuItems.find((item) => item.path === location.pathname)?.label || 'Dashboard';

  return (
    <header className="bg-card-bg border-b border-gray-200 sticky top-0 z-40">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-secondary">{currentPage}</h2>
        </div>

        <div className="flex items-center gap-6">
          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-secondary">{user?.name}</p>
              <p className="text-xs text-gray-600">{user?.role}</p>
            </div>
            <Avatar src={user?.avatar} name={user?.name || 'User'} size="md" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile User Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-gray-200 bg-gray-50 px-6 py-4"
        >
          <div className="flex items-center gap-4 mb-4">
            <Avatar src={user?.avatar} name={user?.name || 'User'} size="lg" />
            <div>
              <p className="font-semibold text-secondary">{user?.name}</p>
              <p className="text-sm text-gray-600">{user?.email}</p>
            </div>
          </div>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-2 px-4 py-2 text-left text-secondary hover:bg-white rounded-lg transition-colors">
              <Settings size={18} />
              Profile Settings
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2 text-left text-danger hover:bg-white rounded-lg transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
