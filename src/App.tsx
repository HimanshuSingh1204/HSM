import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore.ts';

// Pages
import { LoginPage } from './pages/LoginPage.tsx';
import { DashboardPage } from './pages/DashboardPage.tsx';
import { ResidentsPage } from './pages/ResidentsPage.tsx';
import { VisitorsPage } from './pages/VisitorsPage.tsx';
import { ComplaintsPage } from './pages/ComplaintsPage.tsx';
import { NoticesPage } from './pages/NoticesPage.tsx';
import { PollsPage } from './pages/PollsPage.tsx';
import { FunctionsPage } from './pages/FunctionsPage.tsx';
import { BillingPage } from './pages/BillingPage.tsx';
import { FlatsPage } from './pages/FlatsPage.tsx';
import {
  VehiclesPage,
  StaffPage,
  DocumentsPage,
  ReportsPage,
  SettingsPage,
} from './pages/PlaceholderPages.tsx';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/residents"
          element={
            <ProtectedRoute>
              <ResidentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/flats"
          element={
            <ProtectedRoute>
              <FlatsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/visitors"
          element={
            <ProtectedRoute>
              <VisitorsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/complaints"
          element={
            <ProtectedRoute>
              <ComplaintsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notices"
          element={
            <ProtectedRoute>
              <NoticesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/polls"
          element={
            <ProtectedRoute>
              <PollsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/functions"
          element={
            <ProtectedRoute>
              <FunctionsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/billing"
          element={
            <ProtectedRoute>
              <BillingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vehicles"
          element={
            <ProtectedRoute>
              <VehiclesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/staff"
          element={
            <ProtectedRoute>
              <StaffPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/documents"
          element={
            <ProtectedRoute>
              <DocumentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <ReportsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
