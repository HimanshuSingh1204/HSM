import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Avatar } from '../components/ui/Avatar';
import { Input } from '../components/ui/Input';
import { Table } from '../components/ui/Table';
import { motion } from 'framer-motion';
import { Search, Plus, Eye, Edit2, Trash2, Download } from 'lucide-react';
import { mockResidents } from '../utils/mockData';
import { useSearch } from '../hooks';

export function ResidentsPage() {
  const [residents] = useState(mockResidents);
  const [searchedResidents, setSearchQuery] = useSearch(residents, ['name', 'flatNumber', 'phone']);

  const columns = [
    {
      key: 'photo',
      label: 'Resident',
      render: (value: any, row: any) => (
        <div className="flex items-center gap-3">
          <Avatar src={row.photo} name={row.name} size="md" />
          <div>
            <p className="font-semibold text-secondary">{row.name}</p>
            <p className="text-xs text-gray-500">Flat {row.flatNumber}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'phone',
      label: 'Contact',
      render: (value: any) => (
        <div>
          <p className="text-secondary">{value}</p>
        </div>
      ),
    },
    {
      key: 'occupancyStatus',
      label: 'Status',
      render: (value: any) => (
        <Badge
          variant={value === 'occupied' ? 'success' : 'secondary'}
        >
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Badge>
      ),
    },
    {
      key: 'familyMembers',
      label: 'Family Members',
      render: (value: any) => value || '-',
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="View"
          >
            <Eye size={18} className="text-primary" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Edit"
          >
            <Edit2 size={18} className="text-blue-500" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Delete"
          >
            <Trash2 size={18} className="text-danger" />
          </motion.button>
        </div>
      ),
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Residents"
        description="Manage all society residents"
        actions={
          <div className="flex gap-3">
            <Button variant="outline" size="md">
              <Download size={18} />
              Export
            </Button>
            <Button size="md">
              <Plus size={18} />
              Add Resident
            </Button>
          </div>
        }
      />

      <Card className="mb-6">
        <Input
          placeholder="Search residents by name, flat number, or phone..."
          icon={<Search size={18} />}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Card>

      <Card>
        <Table columns={columns} data={searchedResidents} />
      </Card>
    </MainLayout>
  );
}
