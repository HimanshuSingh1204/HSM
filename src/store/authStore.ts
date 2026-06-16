import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, AuthState } from '../types/index';

// Mock users for each role
const mockUsers: Record<User['role'], User> = {
  'super-admin': {
    id: '1',
    name: 'Platform Admin',
    email: 'superadmin@platform.com',
    role: 'super-admin',
    societyId: 'platform',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=superadmin',
    phone: '+91 99999 99999',
  },
  'admin': {
    id: '2',
    name: 'Rajesh Kumar',
    email: 'admin@society.com',
    role: 'admin',
    societyId: 'society-001',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh',
    phone: '+91 98765 43210',
  },
  'watchman': {
    id: '3',
    name: 'Vikram Singh',
    email: 'watchman@society.com',
    role: 'watchman',
    societyId: 'society-001',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram',
    phone: '+91 87654 32109',
  },
  'member': {
    id: '4',
    name: 'Priya Sharma',
    email: 'member@society.com',
    role: 'member',
    societyId: 'society-001',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    phone: '+91 76543 21098',
  },
};

export const useAuthStore = create<AuthState>(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string, role: User['role'] = 'admin') => {
        // Simulate API call
        return new Promise((resolve) => {
          setTimeout(() => {
            set({
              user: { ...mockUsers[role], email },
              isAuthenticated: true,
            });
            resolve();
          }, 500);
        });
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

