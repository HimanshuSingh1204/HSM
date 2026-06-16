import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <MainLayout>
      <PageHeader title={title} description={description} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="text-center py-16">
          <div className="flex justify-center mb-4">
            <Construction size={48} className="text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-secondary mb-2">Coming Soon</h3>
          <p className="text-gray-600">This module is under development. Check back soon!</p>
        </Card>
      </motion.div>
    </MainLayout>
  );
}

// Note: FlatsPage is now imported from FlatsPage.tsx (real implementation)

export function VehiclesPage() {
  return <PlaceholderPage title="Vehicles" description="Manage resident vehicles and parking" />;
}

export function StaffPage() {
  return <PlaceholderPage title="Staff" description="Track society workers and assignments" />;
}

export function DocumentsPage() {
  return <PlaceholderPage title="Documents" description="Store and manage society records" />;
}

export function ReportsPage() {
  return <PlaceholderPage title="Reports & Analytics" description="View operational insights and analytics" />;
}

export function SettingsPage() {
  return <PlaceholderPage title="Settings" description="Configure society settings and permissions" />;
}
