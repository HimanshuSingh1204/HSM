import { create } from 'zustand';
import { User, AuthState } from '../types/index';

// Mock user for demo
const mockUser: User = {
  id: '1',
  name: 'Rajesh Kumar',
  email: 'rajesh@society.com',
  role: 'admin',
  societyId: 'society-001',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh',
  phone: '+91 98765 43210',
};

export const useAuthStore = create<AuthState>((set) => ({
  user: mockUser,
  isAuthenticated: true,

  login: async (email: string, password: string) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        set({
          user: { ...mockUser, email },
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
}));
