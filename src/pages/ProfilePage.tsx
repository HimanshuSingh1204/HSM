import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Shield, Edit2, LogOut, ChevronRight } from 'lucide-react';
import { User as UserType } from '../types/index';

const roleData: Record<UserType['role'], { title: string; description: string; email: string; phone: string; organization: string; organizationEmail: string }> = {
  admin: {
    title: 'Admin User',
    description: 'Admin',
    email: 'admin@society.com',
    phone: '+91 98765 43210',
    organization: 'Housing Society Management',
    organizationEmail: 'admin@hsms.com',
  },
  watchman: {
    title: 'Watchman User',
    description: 'Security Guard',
    email: 'watchman@society.com',
    phone: '+91 87654 32109',
    organization: 'Housing Society',
    organizationEmail: 'security@hsms.com',
  },
  member: {
    title: 'Member User',
    description: 'Resident',
    email: 'member@society.com',
    phone: '+91 76543 21098',
    organization: 'Housing Society - Block A',
    organizationEmail: 'member@hsms.com',
  },
  'super-admin': {
    title: 'Super Admin User',
    description: 'Platform Manager',
    email: 'superadmin@nexschoolify.com',
    phone: '+91 98765 00000',
    organization: 'NexSchoolify Platform',
    organizationEmail: 'admin@nexschoolify.com',
  },
};

const roleOptions: Array<{
  key: UserType['role'];
  title: string;
  description: string;
}> = [
  {
    key: 'admin',
    title: 'Admin',
    description: 'Manage society operations',
  },
  {
    key: 'watchman',
    title: 'Watchman',
    description: 'Guard society entry',
  },
  {
    key: 'member',
    title: 'Member',
    description: 'View member dashboard',
  },
  {
    key: 'super-admin',
    title: 'Super Admin Platform',
    description: 'Platform manager access',
  },
];

export function ProfilePage() {
  const { user, login, logout } = useAuthStore();
  const navigate = useNavigate();
  const [isEditModal, setIsEditModal] = useState(false);
  const [isRoleSwitchModal, setIsRoleSwitchModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserType['role']>(user?.role || 'admin');

  const currentRole = user?.role || 'admin';
  const data = roleData[currentRole];

  const handleRoleSwitch = async (role: UserType['role']) => {
    await login(`${role}@demo.com`, 'demo@123', role);
    setIsRoleSwitchModal(false);
    navigate(`/${role}/dashboard`);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getInitial = () => {
    return data.title.charAt(0).toUpperCase();
  };

  const getRoleColor = (role: UserType['role']) => {
    const colors: Record<UserType['role'], string> = {
      admin: 'bg-blue-500',
      watchman: 'bg-orange-500',
      member: 'bg-green-500',
      'super-admin': 'bg-purple-500',
    };
    return colors[role];
  };

  const getRoleBadgeColor = (role: UserType['role']) => {
    const colors: Record<UserType['role'], string> = {
      admin: 'bg-blue-100 text-blue-800',
      watchman: 'bg-orange-100 text-orange-800',
      member: 'bg-green-100 text-green-800',
      'super-admin': 'bg-purple-100 text-purple-800',
    };
    return colors[role];
  };

  return (
    <MainLayout>
      <PageHeader
        title="My Profile"
        description="View and edit your profile information"
        actions={
          <Button
            variant="outline"
            onClick={() => setIsEditModal(true)}
            className="gap-2"
          >
            <Edit2 size={16} />
            Edit Profile
          </Button>
        }
      />

      <div className="space-y-6">
        {/* Profile Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`${getRoleColor(currentRole)} rounded-card overflow-hidden text-white shadow-lg`}
          >
            <div className="h-32 bg-opacity-80"></div>
            <div className="px-8 pb-8">
              <div className="flex items-end justify-between mb-4">
                <div className="flex items-end gap-4">
                  <div
                    className={`${getRoleColor(
                      currentRole
                    )} w-24 h-24 rounded-2xl flex items-center justify-center text-5xl font-bold border-4 border-white shadow-lg`}
                  >
                    {getInitial()}
                  </div>
                  <div className="mb-2">
                    <h1 className="text-3xl font-bold">{data.title}</h1>
                    <p className="text-blue-100">{data.description}</p>
                  </div>
                </div>
                <div
                  className={`${getRoleBadgeColor(
                    currentRole
                  )} px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide`}
                >
                  {roleOptions.find((r) => r.key === currentRole)?.title}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <h2 className="text-xl font-bold text-secondary">Personal Information</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">EMAIL</p>
                  <p className="text-lg font-semibold text-secondary">{data.email}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">PHONE</p>
                  <p className="text-lg font-semibold text-secondary">{data.phone}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">ADDRESS</p>
                  <p className="text-lg font-semibold text-secondary">
                    {currentRole === 'super-admin' ? 'Mumbai, Maharashtra, India' : 'Housing Society, Wing A, Mumbai'}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Organization Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Shield size={20} />
                </div>
                <h2 className="text-xl font-bold text-secondary">
                  {currentRole === 'super-admin' ? 'Platform Information' : 'Organization Information'}
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                    {currentRole === 'super-admin' ? 'PLATFORM NAME' : 'ORGANIZATION NAME'}
                  </p>
                  <p className="text-lg font-semibold text-secondary">{data.organization}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                    {currentRole === 'super-admin' ? 'PLATFORM EMAIL' : 'ADMIN EMAIL'}
                  </p>
                  <p className="text-lg font-semibold text-secondary">{data.organizationEmail}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">CONTACT</p>
                  <p className="text-lg font-semibold text-secondary">{data.phone}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Role Switcher and Logout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <Button
            onClick={() => setIsRoleSwitchModal(true)}
            variant="outline"
            className="gap-2"
          >
            <Shield size={18} />
            Switch Role
          </Button>
          <Button
            onClick={handleLogout}
            variant="danger"
            className="gap-2"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </motion.div>
      </div>

      {/* Role Switch Modal */}
      <Modal
        isOpen={isRoleSwitchModal}
        onClose={() => setIsRoleSwitchModal(false)}
        title="Switch Role"
      >
        <div className="space-y-3">
          {roleOptions.map((role) => (
            <button
              key={role.key}
              onClick={() => handleRoleSwitch(role.key)}
              className={`w-full border-2 rounded-2xl p-4 text-left transition-all duration-200 hover:border-primary ${
                currentRole === role.key
                  ? 'border-primary bg-blue-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-secondary">{role.title}</h3>
                  <p className="text-sm text-gray-500">{role.description}</p>
                </div>
                {currentRole === role.key && (
                  <ChevronRight className="text-primary" size={20} />
                )}
              </div>
            </button>
          ))}
        </div>
      </Modal>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={isEditModal}
        onClose={() => setIsEditModal(false)}
        title="Edit Profile"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">Full Name</label>
            <input
              type="text"
              defaultValue={data.title}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary outline-none transition"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">Email</label>
            <input
              type="email"
              defaultValue={data.email}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary outline-none transition"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">Phone</label>
            <input
              type="tel"
              defaultValue={data.phone}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary outline-none transition"
              readOnly
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button onClick={() => setIsEditModal(false)} variant="outline" className="flex-1">
              Cancel
            </Button>
            <Button onClick={() => setIsEditModal(false)} className="flex-1">
              Save Changes
            </Button>
          </div>
        </div>
      </Modal>
    </MainLayout>
  );
}
