import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore.ts';

// Auth Pages
import { LoginPage } from './pages/LoginPage.tsx';
import { AccessDeniedPage } from './pages/AccessDenied.tsx';

// Dashboard Pages
import { SuperAdminDashboard } from './pages/SuperAdminDashboard.tsx';
import { AdminDashboard } from './pages/AdminDashboard.tsx';
import { WatchmanDashboard } from './pages/WatchmanDashboard.tsx';
import { MemberDashboard } from './pages/MemberDashboard.tsx';
import { ProfilePage } from './pages/ProfilePage.tsx';

// Admin Pages
import { ResidentsPage } from './pages/ResidentsPage.tsx';
import { VisitorsPage } from './pages/VisitorsPage.tsx';
import { ComplaintsPage } from './pages/ComplaintsPage.tsx';
import { NoticesPage } from './pages/NoticesPage.tsx';
import { PollsPage } from './pages/PollsPage.tsx';
import { FunctionsPage } from './pages/FunctionsPage.tsx';
import { BillingPage } from './pages/BillingPage.tsx';
import { FlatsPage } from './pages/FlatsPage.tsx';
import { VehiclesPage } from './pages/PlaceholderPages.tsx';
import { StaffPage } from './pages/StaffPage.tsx';
import { DocumentsPage } from './pages/DocumentsPage.tsx';
import { ReportsPage } from './pages/ReportsPage.tsx';
import { SettingsPage } from './pages/SettingsPage.tsx';

function ProtectedRoute({ 
  children, 
  requiredRoles 
}: { 
  children: React.ReactNode;
  requiredRoles: string[];
}) {
  const { isAuthenticated, user } = useAuthStore();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (!requiredRoles.includes(user?.role || '')) {
    return <AccessDeniedPage />;
  }
  
  return children;
}

export function App() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to={`/${user?.role}/dashboard`} replace /> : <LoginPage />}
        />

        {/* Access Denied */}
        <Route path="/access-denied" element={<AccessDeniedPage />} />

        {/* SUPER ADMIN ROUTES */}
        <Route
          path="/super-admin/dashboard"
          element={
            <ProtectedRoute requiredRoles={['super-admin']}>
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/societies"
          element={
            <ProtectedRoute requiredRoles={['super-admin']}>
              <ResidentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/subscriptions"
          element={
            <ProtectedRoute requiredRoles={['super-admin']}>
              <BillingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/revenue"
          element={
            <ProtectedRoute requiredRoles={['super-admin']}>
              <ReportsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/users"
          element={
            <ProtectedRoute requiredRoles={['super-admin']}>
              <ResidentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/reports"
          element={
            <ProtectedRoute requiredRoles={['super-admin']}>
              <ReportsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/support"
          element={
            <ProtectedRoute requiredRoles={['super-admin']}>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admin/settings"
          element={
            <ProtectedRoute requiredRoles={['super-admin']}>
              <SettingsPage />
            </ProtectedRoute>
          }
        />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/residents"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <ResidentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/flats"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <FlatsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/visitors"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <VisitorsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/complaints"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <ComplaintsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notices"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <NoticesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/polls"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <PollsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/functions"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <FunctionsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/billing"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <BillingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/vehicles"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <VehiclesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/staff"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <StaffPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/documents"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <DocumentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <ReportsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute requiredRoles={['admin']}>
              <SettingsPage />
            </ProtectedRoute>
          }
        />

        {/* WATCHMAN ROUTES */}
        <Route
          path="/watchman/dashboard"
          element={
            <ProtectedRoute requiredRoles={['watchman']}>
              <WatchmanDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchman/visitor-entry"
          element={
            <ProtectedRoute requiredRoles={['watchman']}>
              <VisitorsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchman/visitors"
          element={
            <ProtectedRoute requiredRoles={['watchman']}>
              <VisitorsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchman/deliveries"
          element={
            <ProtectedRoute requiredRoles={['watchman']}>
              <NoticesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchman/guest-verification"
          element={
            <ProtectedRoute requiredRoles={['watchman']}>
              <VisitorsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchman/emergency"
          element={
            <ProtectedRoute requiredRoles={['watchman']}>
              <SettingsPage />
            </ProtectedRoute>
          }
        />

        {/* MEMBER ROUTES */}
        <Route
          path="/member/dashboard"
          element={
            <ProtectedRoute requiredRoles={['member']}>
              <MemberDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member/profile"
          element={
            <ProtectedRoute requiredRoles={['member']}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member/family"
          element={
            <ProtectedRoute requiredRoles={['member']}>
              <ResidentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member/visitors"
          element={
            <ProtectedRoute requiredRoles={['member']}>
              <VisitorsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member/complaints"
          element={
            <ProtectedRoute requiredRoles={['member']}>
              <ComplaintsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member/notices"
          element={
            <ProtectedRoute requiredRoles={['member']}>
              <NoticesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member/polls"
          element={
            <ProtectedRoute requiredRoles={['member']}>
              <PollsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member/functions"
          element={
            <ProtectedRoute requiredRoles={['member']}>
              <FunctionsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member/payments"
          element={
            <ProtectedRoute requiredRoles={['member']}>
              <BillingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member/documents"
          element={
            <ProtectedRoute requiredRoles={['member']}>
              <DocumentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member/vehicles"
          element={
            <ProtectedRoute requiredRoles={['member']}>
              <VehiclesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member/emergency"
          element={
            <ProtectedRoute requiredRoles={['member']}>
              <SettingsPage />
            </ProtectedRoute>
          }
        />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
