import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { menuItems } from '../../utils/helpers';
import { cn } from '../../utils/helpers';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      className="bg-card-bg border-r border-gray-200 h-screen sticky top-0 overflow-y-auto flex flex-col hidden lg:flex"
    >
      {/* Logo Section */}
      <div className="border-b border-gray-200 p-6 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-secondary text-sm">Housing Society</span>
              <span className="text-xs text-gray-500">Smart Housing Management</span>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors ml-auto"
        >
          <ChevronRight
            size={18}
            className={cn('transition-transform', isCollapsed ? '' : 'rotate-180')}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = Icons[item.icon as keyof typeof Icons] as React.ComponentType<any>;
          const active = isActive(item.path);

          return (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-btn transition-all duration-200',
                active
                  ? 'bg-primary text-white shadow-md'
                  : 'text-secondary hover:bg-gray-100'
              )}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
              title={isCollapsed ? item.label : ''}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!isCollapsed && (
                <span className="text-sm font-semibold truncate">{item.label}</span>
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="border-t border-gray-200 p-4 text-xs text-gray-500 text-center">
          <p>© 2026 Housing Society</p>
          <p>Smart Housing Management</p>
        </div>
      )}
    </motion.aside>
  );
}
