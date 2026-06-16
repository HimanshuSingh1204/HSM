import { useState, useEffect } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { motion } from 'framer-motion';
import { Plus, Search, Edit2, Trash2, Home, MapPin, Users, Zap, AlertCircle, Check } from 'lucide-react';
import { mockFlats } from '../utils/mockData';
import { Flat } from '../types/index';

export function FlatsPage() {
  const [flats, setFlats] = useState<Flat[]>(mockFlats);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'occupied' | 'vacant'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFlat, setEditingFlat] = useState<Flat | null>(null);
  const [formData, setFormData] = useState<Partial<Flat>>({});

  const filteredFlats = flats.filter((flat) => {
    const matchesSearch =
      flat.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flat.wing.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || flat.occupancyStatus === filter;
    return matchesSearch && matchesFilter;
  });

  const handleOpenModal = (flat?: Flat) => {
    if (flat) {
      setEditingFlat(flat);
      setFormData(flat);
    } else {
      setEditingFlat(null);
      setFormData({});
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingFlat(null);
    setFormData({});
  };

  const handleSave = () => {
    if (editingFlat) {
      setFlats(flats.map((f) => (f.id === editingFlat.id ? { ...editingFlat, ...formData } : f)));
    } else {
      const newFlat: Flat = {
        id: String(flats.length + 1),
        number: formData.number || '',
        wing: formData.wing || '',
        floor: formData.floor || 0,
        area: formData.area || 0,
        type: formData.type || '1bhk',
        occupancyStatus: formData.occupancyStatus || 'vacant',
      };
      setFlats([...flats, newFlat]);
    }
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    setFlats(flats.filter((f) => f.id !== id));
  };

  const stats = {
    total: flats.length,
    occupied: flats.filter((f) => f.occupancyStatus === 'occupied').length,
    vacant: flats.filter((f) => f.occupancyStatus === 'vacant').length,
  };

  return (
    <MainLayout>
      <PageHeader
        title="Flats Management"
        description="Manage residential units and their occupancy status"
        actions={
          <Button size="md" onClick={() => handleOpenModal()}>
            <Plus size={18} />
            Add Flat
          </Button>
        }
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div whileHover={{ y: -4 }}>
          <Card className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stats.total}</div>
            <p className="text-gray-600 text-sm font-medium">Total Flats</p>
          </Card>
        </motion.div>
        <motion.div whileHover={{ y: -4 }}>
          <Card className="text-center bg-green-50">
            <div className="text-3xl font-bold text-success mb-2">{stats.occupied}</div>
            <p className="text-gray-600 text-sm font-medium">Occupied</p>
          </Card>
        </motion.div>
        <motion.div whileHover={{ y: -4 }}>
          <Card className="text-center bg-orange-50">
            <div className="text-3xl font-bold text-warning mb-2">{stats.vacant}</div>
            <p className="text-gray-600 text-sm font-medium">Vacant</p>
          </Card>
        </motion.div>
      </div>

      {/* Filter and Search */}
      <Card className="mb-6 p-4 flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search by flat number or wing..."
            icon={<Search size={18} />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {(['all', 'occupied', 'vacant'] as const).map((status) => (
            <Button
              key={status}
              variant={filter === status ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter(status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Button>
          ))}
        </div>
      </Card>

      {/* Flats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFlats.map((flat, idx) => (
          <motion.div
            key={flat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <Card className="relative overflow-hidden cursor-pointer group">
              {/* Status Badge */}
              <div className="absolute top-3 right-3 z-10">
                <div
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    flat.occupancyStatus === 'occupied'
                      ? 'bg-success/20 text-success'
                      : 'bg-warning/20 text-warning'
                  }`}
                >
                  {flat.occupancyStatus === 'occupied' ? <Check size={14} /> : <AlertCircle size={14} />}
                  {flat.occupancyStatus.charAt(0).toUpperCase() + flat.occupancyStatus.slice(1)}
                </div>
              </div>

              {/* Flat Header */}
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Home size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary">Flat {flat.number}</h3>
                    <p className="text-sm text-gray-600">Wing {flat.wing}</p>
                  </div>
                </div>
              </div>

              {/* Flat Details */}
              <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Floor:</span>
                  <span className="font-semibold text-secondary">{flat.floor}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-semibold text-secondary">{flat.type.toUpperCase()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Area:</span>
                  <span className="font-semibold text-secondary">{flat.area} sq.ft</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => handleOpenModal(flat)}
                >
                  <Edit2 size={16} />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-danger hover:bg-danger/10"
                  onClick={() => handleDelete(flat.id)}
                >
                  <Trash2 size={16} />
                  Delete
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={editingFlat ? 'Edit Flat' : 'Add New Flat'}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Flat Number"
              value={formData.number || ''}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              placeholder="e.g., 101"
            />
            <Input
              label="Wing"
              value={formData.wing || ''}
              onChange={(e) => setFormData({ ...formData, wing: e.target.value })}
              placeholder="e.g., A"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Floor"
              type="number"
              value={formData.floor || ''}
              onChange={(e) => setFormData({ ...formData, floor: parseInt(e.target.value) })}
              placeholder="e.g., 1"
            />
            <Input
              label="Area (sq.ft)"
              type="number"
              value={formData.area || ''}
              onChange={(e) => setFormData({ ...formData, area: parseInt(e.target.value) })}
              placeholder="e.g., 1050"
            />
          </div>

          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.type || '1bhk'}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as Flat['type'] })}
          >
            <option value="studio">Studio</option>
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk">4 BHK</option>
          </select>

          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.occupancyStatus || 'vacant'}
            onChange={(e) =>
              setFormData({
                ...formData,
                occupancyStatus: e.target.value as Flat['occupancyStatus'],
              })
            }
          >
            <option value="vacant">Vacant</option>
            <option value="occupied">Occupied</option>
          </select>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={handleCloseModal} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleSave} className="flex-1">
              {editingFlat ? 'Update' : 'Create'}
            </Button>
          </div>
        </div>
      </Modal>
    </MainLayout>
  );
}
