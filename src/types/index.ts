// Auth Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'secretary' | 'resident' | 'security' | 'staff';
  societyId: string;
  avatar?: string;
  phone?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Resident Types
export interface Resident {
  id: string;
  name: string;
  email: string;
  phone: string;
  flatNumber: string;
  occupancyStatus: 'occupied' | 'vacant' | 'owner';
  photo?: string;
  familyMembers?: number;
  moveInDate?: string;
  vehicleCount?: number;
}

// Flat Types
export interface Flat {
  id: string;
  number: string;
  wing: string;
  floor: number;
  area: number;
  type: 'studio' | '1bhk' | '2bhk' | '3bhk' | '4bhk';
  residentId?: string;
  occupancyStatus: 'occupied' | 'vacant';
}

// Visitor Types
export interface Visitor {
  id: string;
  name: string;
  mobileNumber: string;
  flatNumber: string;
  entryTime: string;
  exitTime?: string;
  status: 'pending' | 'approved' | 'rejected';
  purpose?: string;
  hostName?: string;
}

// Complaint Types
export interface Complaint {
  id: string;
  complaintId: string;
  residentName: string;
  category: 'maintenance' | 'noise' | 'parking' | 'cleanliness' | 'other';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  title: string;
  description: string;
  date: string;
  status: 'new' | 'assigned' | 'in_progress' | 'resolved' | 'completed';
  assignedTo?: string;
  attachments?: string[];
}

// Notice Types
export interface Notice {
  id: string;
  title: string;
  description: string;
  content: string;
  postedBy: string;
  date: string;
  category: 'maintenance' | 'general' | 'emergency' | 'event';
  views: number;
  likes: number;
  comments: number;
  attachments?: string[];
  isPinned: boolean;
}

// Poll Types
export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  createdBy: string;
  createdDate: string;
  endDate: string;
  totalVotes: number;
  status: 'active' | 'closed';
  comments?: PollComment[];
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
  percentage: number;
}

export interface PollComment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

// Function Approval Types
export interface FunctionApproval {
  id: string;
  applicant: string;
  flatNumber: string;
  eventType: 'wedding' | 'birthday' | 'anniversary' | 'other';
  guestCount: number;
  date: string;
  time: string;
  duration: number;
  status: 'pending' | 'approved' | 'rejected' | 'changes_requested';
  description?: string;
  attachments?: string[];
}

// Billing Types
export interface Invoice {
  id: string;
  invoiceNumber: string;
  flatNumber: string;
  amount: number;
  dueDate: string;
  paymentStatus: 'paid' | 'pending' | 'overdue';
  paymentDate?: string;
  type: 'maintenance' | 'water' | 'electricity' | 'other';
  generatedDate: string;
}

// Vehicle Types
export interface Vehicle {
  id: string;
  vehicleNumber: string;
  owner: string;
  flatNumber: string;
  vehicleType: 'car' | 'bike' | 'auto' | 'van';
  parkingSlot: string;
  registrationDate: string;
}

// Staff Types
export interface Staff {
  id: string;
  name: string;
  role: 'security' | 'maintenance' | 'cleaner' | 'gardener' | 'admin';
  phone: string;
  email?: string;
  joinDate: string;
  status: 'active' | 'inactive';
  photo?: string;
  attendance?: number;
}

// Dashboard Types
export interface DashboardMetrics {
  totalResidents: number;
  totalFlats: number;
  visitorsToday: number;
  openComplaints: number;
  pendingPayments: number;
  collectedRevenue: number;
  monthlyRevenue: number[];
  complaintTrend: number[];
}

// Document Types
export interface Document {
  id: string;
  name: string;
  category: 'resident' | 'society' | 'audit' | 'maintenance';
  uploadDate: string;
  uploadedBy: string;
  size: number;
  url: string;
  type: string;
}
