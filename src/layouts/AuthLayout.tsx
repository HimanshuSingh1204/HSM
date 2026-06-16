import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-7xl"
      >
        <div className="flex items-center justify-between mb-8 px-2 text-white">
          <div>
            <p className="text-lg font-semibold">NexSchoolify</p>
            <p className="text-sm text-blue-100">Smart School Management ERP</p>
          </div>
          <button className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10">
            Switch to dark mode
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <div className="text-white">
              <div className="text-6xl font-bold mb-4">NexSchoolify</div>
              <p className="text-xl text-blue-100 mb-8">
                Smart School Management ERP
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl">
                    👩‍🏫
                  </div>
                  <div>
                    <p className="font-semibold">Admin Management</p>
                    <p className="text-blue-100 text-sm">Manage all campus operations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl">
                    🛡️
                  </div>
                  <div>
                    <p className="font-semibold">Security Control</p>
                    <p className="text-blue-100 text-sm">Monitor entry and safety</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl">
                    👥
                  </div>
                  <div>
                    <p className="font-semibold">Member Access</p>
                    <p className="text-blue-100 text-sm">Secure role-based login</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-card shadow-2xl p-8"
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
