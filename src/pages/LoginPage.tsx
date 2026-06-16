import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useForm } from 'react-hook-form';
import { AuthLayout } from '../layouts/AuthLayout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { motion } from 'framer-motion';
import { Mail, Lock, ShieldCheck, Eye, User, Shield } from 'lucide-react';
import { User as UserType } from '../types/index';

interface LoginForm {
  email: string;
  password: string;
}

const roleOptions: Array<{
  key: UserType['role'];
  title: string;
  description: string;
  icon: React.ReactNode;
}> = [
  {
    key: 'admin',
    title: 'Admin',
    description: 'Manage society operations',
    icon: <ShieldCheck size={22} />,
  },
  {
    key: 'watchman',
    title: 'Watchman',
    description: 'Guard society entry',
    icon: <Eye size={22} />,
  },
  {
    key: 'member',
    title: 'Member',
    description: 'View member dashboard',
    icon: <User size={22} />,
  },
  {
    key: 'super-admin',
    title: 'Super Admin Platform',
    description: 'Super admin platform access',
    icon: <Shield size={22} />,
  },
];

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [selectedRole, setSelectedRole] = useState<UserType['role']>('admin');
  const [roleError, setRoleError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    if (!selectedRole) {
      setRoleError('Select a role to continue');
      return;
    }

    setRoleError('');
    setIsLoading(true);

    try {
      await login(data.email, data.password, selectedRole);
      navigate(`/${selectedRole}/dashboard`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async (role: UserType['role']) => {
    setSelectedRole(role);
    setRoleError('');
    setIsLoading(true);

    try {
      await login(`${role}@demo.com`, 'demo@123', role);
      navigate(`/${role}/dashboard`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-secondary mb-2">Welcome Back!</h2>
          <p className="text-gray-600">Select your role to continue</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
          {roleOptions.map((role) => (
            <button
              key={role.key}
              type="button"
              onClick={() => {
                setSelectedRole(role.key);
                setRoleError('');
              }}
              className={`border rounded-2xl p-4 text-left transition-all duration-200 hover:border-primary ${
                selectedRole === role.key ? 'border-primary bg-blue-50' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  {role.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">{role.title}</h3>
                  <p className="text-sm text-gray-500">{role.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {roleError && <p className="text-sm text-danger mb-4">{roleError}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            icon={<Mail size={18} />}
            error={errors.email?.message}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            icon={<Lock size={18} />}
            error={errors.password?.message}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-primary hover:text-blue-700 font-medium">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            isLoading={isLoading}
            className="w-full"
            size="lg"
          >
            Continue as {roleOptions.find((item) => item.key === selectedRole)?.title}
          </Button>
        </form>

        <div className="mt-8 rounded-3xl border border-gray-200 bg-slate-50 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Quick Demo Access</p>
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-gray-400">Demo</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 mb-4">
            {roleOptions.map((role) => (
              <Button
                key={role.key}
                type="button"
                variant={selectedRole === role.key ? 'primary' : 'outline'}
                onClick={() => handleDemoLogin(role.key)}
                className="w-full"
              >
                {role.title} Demo
              </Button>
            ))}
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setSelectedRole('admin');
              setRoleError('');
            }}
            className="w-full"
          >
            Reset Demo Data
          </Button>
        </div>
      </motion.div>
    </AuthLayout>
  );
}
