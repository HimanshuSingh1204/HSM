import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/ui/Card';
import { Table } from '../components/ui/Table';
import { Avatar } from '../components/ui/Avatar';
import { mockStaff } from '../utils/mockData';

export function StaffPage() {
  const columns = [
    { key: 'name', label: 'Name', render: (_: any, row: any) => (
      <div className="flex items-center gap-3">
        <Avatar src={row.photo} name={row.name} size="md" />
        <div>
          <div className="font-medium text-secondary">{row.name}</div>
          <div className="text-sm text-gray-500">{row.role}</div>
        </div>
      </div>
    ) },
    { key: 'phone', label: 'Phone' },
    { key: 'email', label: 'Email' },
    { key: 'joinDate', label: 'Join Date' },
    { key: 'status', label: 'Status', render: (val: string) => (
      <span className={val === 'active' ? 'text-green-600' : 'text-gray-500'}>{val}</span>
    ) },
    { key: 'attendance', label: 'Attendance', render: (val: number) => `${val}%` },
  ];

  return (
    <MainLayout>
      <PageHeader title="Staff" description="Track society workers and assignments" />
      <Card>
        <Table columns={columns} data={mockStaff} />
      </Card>
    </MainLayout>
  );
}
