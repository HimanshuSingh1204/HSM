import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatTime(time: string): string {
  const date = new Date(`2024-01-01 ${time}`);
  return date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'active':
    case 'approved':
    case 'occupied':
    case 'paid':
      return 'bg-success text-white';
    case 'pending':
    case 'draft':
      return 'bg-warning text-white';
    case 'rejected':
    case 'inactive':
    case 'overdue':
      return 'bg-danger text-white';
    case 'processing':
    case 'in_progress':
      return 'bg-blue-500 text-white';
    default:
      return 'bg-gray-200 text-gray-800';
  }
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'urgent':
      return 'bg-danger text-white';
    case 'high':
      return 'bg-orange-500 text-white';
    case 'medium':
      return 'bg-warning text-white';
    case 'low':
      return 'bg-success text-white';
    default:
      return 'bg-gray-200 text-gray-800';
  }
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    maintenance: 'bg-blue-100 text-blue-800',
    noise: 'bg-orange-100 text-orange-800',
    parking: 'bg-purple-100 text-purple-800',
    cleanliness: 'bg-green-100 text-green-800',
    emergency: 'bg-red-100 text-red-800',
    general: 'bg-gray-100 text-gray-800',
    event: 'bg-pink-100 text-pink-800',
    other: 'bg-indigo-100 text-indigo-800',
  };
  return colors[category] || colors['other'];
}

export const menuItems = [
  { icon: 'LayoutDashboard', label: 'Dashboard', path: '/dashboard' },
  { icon: 'Users', label: 'Residents', path: '/residents' },
  { icon: 'Home', label: 'Flats', path: '/flats' },
  { icon: 'UserCheck', label: 'Visitors', path: '/visitors' },
  { icon: 'AlertCircle', label: 'Complaints', path: '/complaints' },
  { icon: 'FileText', label: 'Notices', path: '/notices' },
  { icon: 'Vote', label: 'Polls', path: '/polls' },
  { icon: 'Calendar', label: 'Functions', path: '/functions' },
  { icon: 'CreditCard', label: 'Billing', path: '/billing' },
  { icon: 'Car', label: 'Vehicles', path: '/vehicles' },
  { icon: 'Shield', label: 'Staff', path: '/staff' },
  { icon: 'FileStack', label: 'Documents', path: '/documents' },
  { icon: 'BarChart3', label: 'Reports', path: '/reports' },
  { icon: 'Settings', label: 'Settings', path: '/settings' },
];
