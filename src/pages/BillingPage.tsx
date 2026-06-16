import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { StatCard } from '../components/ui/StatCard';
import { Table } from '../components/ui/Table';
import { motion } from 'framer-motion';
import { Plus, Download, CreditCard, Clock, TrendingUp } from 'lucide-react';
import { mockInvoices } from '../utils/mockData';

export function BillingPage() {
  const [invoices] = useState(mockInvoices);

  const collectedAmount = invoices
    .filter((inv) => inv.paymentStatus === 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const pendingAmount = invoices
    .filter((inv) => inv.paymentStatus === 'pending')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const overdueAmount = invoices
    .filter((inv) => inv.paymentStatus === 'overdue')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const columns = [
    {
      key: 'invoiceNumber',
      label: 'Invoice Number',
      render: (value: any) => (
        <p className="font-semibold text-secondary">{value}</p>
      ),
    },
    {
      key: 'flatNumber',
      label: 'Flat',
      render: (value: any) => <p className="text-secondary">{value}</p>,
    },
    {
      key: 'amount',
      label: 'Amount',
      render: (value: any) => (
        <p className="font-semibold text-secondary">₹{value}</p>
      ),
    },
    {
      key: 'dueDate',
      label: 'Due Date',
      render: (value: any) => <p className="text-secondary">{value}</p>,
    },
    {
      key: 'paymentStatus',
      label: 'Status',
      render: (value: any) => {
        const colors: Record<string, string> = {
          paid: 'success',
          pending: 'warning',
          overdue: 'danger',
        };
        return (
          <Badge variant={colors[value] as any}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Badge>
        );
      },
    },
    {
      key: 'actions',
      label: 'Action',
      render: () => (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 hover:bg-blue-50 rounded-lg transition-colors text-primary"
          title="Download Receipt"
        >
          <Download size={18} />
        </motion.button>
      ),
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Billing"
        description="Manage maintenance payments and invoices"
        actions={
          <Button size="md">
            <Plus size={18} />
            Issue Invoice
          </Button>
        }
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div whileHover={{ y: -4 }}>
          <StatCard
            label="Amount Collected"
            value={`₹${collectedAmount}`}
            icon={<TrendingUp size={32} />}
            trend={{ direction: 'up', percentage: 8 }}
            backgroundColor="bg-green-50"
            textColor="text-success"
          />
        </motion.div>
        <motion.div whileHover={{ y: -4 }}>
          <StatCard
            label="Pending Amount"
            value={`₹${pendingAmount}`}
            icon={<Clock size={32} />}
            backgroundColor="bg-orange-50"
            textColor="text-warning"
          />
        </motion.div>
        <motion.div whileHover={{ y: -4 }}>
          <StatCard
            label="Overdue Amount"
            value={`₹${overdueAmount}`}
            icon={<CreditCard size={32} />}
            backgroundColor="bg-red-50"
            textColor="text-danger"
          />
        </motion.div>
      </div>

      <Card>
        <h3 className="text-lg font-bold text-secondary mb-6">Invoice List</h3>
        <Table columns={columns} data={invoices} />
      </Card>
    </MainLayout>
  );
}
