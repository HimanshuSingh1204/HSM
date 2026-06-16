import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/ui/Card';
import { Table } from '../components/ui/Table';

type Doc = { id: string; name: string; uploadedBy: string; date: string };

const initial: Doc[] = [
  { id: '1', name: 'Society_Bylaws.pdf', uploadedBy: 'Secretary', date: '2026-01-10' },
  { id: '2', name: 'Maintenance_Report_May.xlsx', uploadedBy: 'Manager', date: '2026-06-01' },
];

export function DocumentsPage() {
  const [docs, setDocs] = useState<Doc[]>(initial);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'uploadedBy', label: 'Uploaded By' },
    { key: 'date', label: 'Date' },
  ];

  return (
    <MainLayout>
      <PageHeader title="Documents" description="Store and manage society records" />
      <Card>
        <div className="mb-4 flex justify-end">
          <label className="btn btn-outline">
            Upload
            <input type="file" className="hidden" onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const newDoc: Doc = { id: String(Date.now()), name: file.name, uploadedBy: 'You', date: new Date().toISOString().split('T')[0] };
                setDocs(prev => [newDoc, ...prev]);
              }
            }} />
          </label>
        </div>
        <Table columns={columns} data={docs} />
      </Card>
    </MainLayout>
  );
}
