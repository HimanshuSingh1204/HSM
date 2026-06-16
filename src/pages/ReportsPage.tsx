import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { StatCard } from '../components/ui/StatCard';
import { mockDashboardMetrics } from '../utils/mockData';

export function ReportsPage() {
  const metrics = mockDashboardMetrics;
  return (
    <MainLayout>
      <PageHeader title="Reports & Analytics" description="View operational insights and analytics" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Total Residents" value={String(metrics.totalResidents)} icon={<span>👥</span>} />
        <StatCard label="Total Flats" value={String(metrics.totalFlats)} icon={<span>🏠</span>} />
        <StatCard label="Visitors Today" value={String(metrics.visitorsToday)} icon={<span>👤</span>} />
        <StatCard label="Open Complaints" value={String(metrics.openComplaints)} icon={<span>⚠️</span>} />
        <StatCard label="Pending Payments" value={String(metrics.pendingPayments)} icon={<span>💳</span>} />
        <StatCard label="Collected Revenue" value={`₹ ${metrics.collectedRevenue.toLocaleString()}`} icon={<span>📈</span>} />
      </div>
    </MainLayout>
  );
}
