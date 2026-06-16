import { useAuthStore } from '../store/authStore';
import { MainLayout } from './MainLayout';
import { AccessDeniedPage } from '../pages/AccessDenied';

interface RoleBasedLayoutProps {
  children: React.ReactNode;
  requiredRoles: string[];
}

export function RoleBasedLayout({ children, requiredRoles }: RoleBasedLayoutProps) {
  const { user } = useAuthStore();

  // Check if user has required role
  const hasAccess = user && requiredRoles.includes(user.role);

  if (!hasAccess) {
    return <AccessDeniedPage />;
  }

  return <MainLayout>{children}</MainLayout>;
}
