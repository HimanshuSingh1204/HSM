import { Resident, Visitor, Complaint, Notice, Poll, FunctionApproval, Invoice, Vehicle, Staff, DashboardMetrics, Flat } from '../types/index';

// Mock Residents
export const mockResidents: Resident[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    phone: '+91 98765 43210',
    flatNumber: '101',
    occupancyStatus: 'occupied',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh',
    familyMembers: 4,
    moveInDate: '2022-01-15',
    vehicleCount: 2,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    phone: '+91 98765 43211',
    flatNumber: '102',
    occupancyStatus: 'occupied',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    familyMembers: 3,
    moveInDate: '2023-06-10',
    vehicleCount: 1,
  },
  {
    id: '3',
    name: 'Amit Patel',
    email: 'amit@example.com',
    phone: '+91 98765 43212',
    flatNumber: '103',
    occupancyStatus: 'occupied',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amit',
    familyMembers: 2,
    moveInDate: '2021-03-20',
    vehicleCount: 1,
  },
  {
    id: '4',
    name: 'Neha Gupta',
    email: 'neha@example.com',
    phone: '+91 98765 43213',
    flatNumber: '104',
    occupancyStatus: 'vacant',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=neha',
  },
  {
    id: '5',
    name: 'Vikram Singh',
    email: 'vikram@example.com',
    phone: '+91 98765 43214',
    flatNumber: '201',
    occupancyStatus: 'occupied',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram',
    familyMembers: 5,
    moveInDate: '2020-05-12',
    vehicleCount: 2,
  },
];

// Mock Visitors
export const mockVisitors: Visitor[] = [
  {
    id: '1',
    name: 'Suresh Reddy',
    mobileNumber: '+91 98765 11111',
    flatNumber: '101',
    entryTime: '2026-06-16 10:30 AM',
    exitTime: '2026-06-16 12:00 PM',
    status: 'approved',
    purpose: 'Business Meeting',
    hostName: 'Rajesh Kumar',
  },
  {
    id: '2',
    name: 'Anita Menon',
    mobileNumber: '+91 98765 22222',
    flatNumber: '102',
    entryTime: '2026-06-16 02:15 PM',
    status: 'approved',
    purpose: 'Social Visit',
    hostName: 'Priya Sharma',
  },
  {
    id: '3',
    name: 'Ravi Verma',
    mobileNumber: '+91 98765 33333',
    flatNumber: '103',
    entryTime: '2026-06-16 03:45 PM',
    status: 'pending',
    purpose: 'Delivery',
  },
];

// Mock Complaints
export const mockComplaints: Complaint[] = [
  {
    id: '1',
    complaintId: 'COMP-001',
    residentName: 'Rajesh Kumar',
    category: 'maintenance',
    priority: 'high',
    title: 'Broken tap in common bathroom',
    description: 'The tap in the second floor common bathroom is leaking continuously.',
    date: '2026-06-15',
    status: 'in_progress',
    assignedTo: 'Ravi (Maintenance)',
    attachments: [],
  },
  {
    id: '2',
    complaintId: 'COMP-002',
    residentName: 'Priya Sharma',
    category: 'noise',
    priority: 'medium',
    title: 'Excessive noise from construction',
    description: 'Construction noise from flat 105 is disturbing.',
    date: '2026-06-14',
    status: 'assigned',
    assignedTo: 'Vikram (Manager)',
  },
  {
    id: '3',
    complaintId: 'COMP-003',
    residentName: 'Amit Patel',
    category: 'parking',
    priority: 'low',
    title: 'Unauthorized parking in my slot',
    description: 'A visitor vehicle is parked in my allocated slot.',
    date: '2026-06-16',
    status: 'new',
  },
  {
    id: '4',
    complaintId: 'COMP-004',
    residentName: 'Vikram Singh',
    category: 'cleanliness',
    priority: 'urgent',
    title: 'Water leakage in corridor',
    description: 'Water is seeping from the ceiling in the second floor corridor.',
    date: '2026-06-16',
    status: 'resolved',
  },
];

// Mock Notices
export const mockNotices: Notice[] = [
  {
    id: '1',
    title: 'Annual General Meeting Scheduled',
    description: 'The Annual General Meeting has been scheduled for June 30, 2026.',
    content: 'Dear Residents, The Annual General Meeting (AGM) of the housing society will be held on June 30, 2026 at 6:00 PM in the community hall. Agenda includes financial review, elections, and policy updates.',
    postedBy: 'Secretary',
    date: '2026-06-10',
    category: 'general',
    views: 245,
    likes: 32,
    comments: 18,
    isPinned: true,
  },
  {
    id: '2',
    title: 'Maintenance Work Scheduled',
    description: 'Plumbing maintenance will be conducted on June 20-22.',
    content: 'Plumbing maintenance and inspection will be conducted in phases. Wing A: June 20, Wing B: June 21, Wing C: June 22. Please keep your flats accessible.',
    postedBy: 'Manager',
    date: '2026-06-12',
    category: 'maintenance',
    views: 189,
    likes: 15,
    comments: 8,
    isPinned: true,
  },
  {
    id: '3',
    title: 'Emergency Water Shut-off',
    description: 'Water will be shut off on June 18 for emergency repairs.',
    content: 'Emergency water shut-off scheduled for June 18 from 6:00 AM to 12:00 PM for underground pipeline repairs.',
    postedBy: 'Manager',
    date: '2026-06-14',
    category: 'emergency',
    views: 412,
    likes: 25,
    comments: 35,
    isPinned: false,
  },
];

// Mock Polls
export const mockPolls: Poll[] = [
  {
    id: '1',
    question: 'Should we install solar panels on the building?',
    options: [
      { id: '1', text: 'Yes, definitely', votes: 45, percentage: 45 },
      { id: '2', text: 'No, not needed', votes: 25, percentage: 25 },
      { id: '3', text: 'Need more information', votes: 30, percentage: 30 },
    ],
    createdBy: 'Secretary',
    createdDate: '2026-06-05',
    endDate: '2026-06-25',
    totalVotes: 100,
    status: 'active',
  },
  {
    id: '2',
    question: 'Best time for community exercise program?',
    options: [
      { id: '1', text: 'Early morning (6-7 AM)', votes: 60, percentage: 60 },
      { id: '2', text: 'Evening (5-6 PM)', votes: 30, percentage: 30 },
      { id: '3', text: 'Weekend only', votes: 10, percentage: 10 },
    ],
    createdBy: 'Events Committee',
    createdDate: '2026-06-01',
    endDate: '2026-06-30',
    totalVotes: 100,
    status: 'active',
  },
];

// Mock Function Approvals
export const mockFunctionApprovals: FunctionApproval[] = [
  {
    id: '1',
    applicant: 'Rajesh Kumar',
    flatNumber: '101',
    eventType: 'wedding',
    guestCount: 200,
    date: '2026-07-15',
    time: '6:00 PM',
    duration: 4,
    status: 'approved',
    description: 'Wedding celebration function',
  },
  {
    id: '2',
    applicant: 'Priya Sharma',
    flatNumber: '102',
    eventType: 'birthday',
    guestCount: 50,
    date: '2026-07-20',
    time: '5:00 PM',
    duration: 3,
    status: 'pending',
    description: 'Birthday party for daughter',
  },
  {
    id: '3',
    applicant: 'Amit Patel',
    flatNumber: '103',
    eventType: 'anniversary',
    guestCount: 80,
    date: '2026-08-10',
    time: '7:00 PM',
    duration: 3,
    status: 'approved',
    description: 'Wedding anniversary celebration',
  },
];

// Mock Invoices
export const mockInvoices: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-001',
    flatNumber: '101',
    amount: 5000,
    dueDate: '2026-06-30',
    paymentStatus: 'paid',
    paymentDate: '2026-06-25',
    type: 'maintenance',
    generatedDate: '2026-06-01',
  },
  {
    id: '2',
    invoiceNumber: 'INV-002',
    flatNumber: '102',
    amount: 3500,
    dueDate: '2026-06-30',
    paymentStatus: 'pending',
    type: 'maintenance',
    generatedDate: '2026-06-01',
  },
  {
    id: '3',
    invoiceNumber: 'INV-003',
    flatNumber: '103',
    amount: 5000,
    dueDate: '2026-06-15',
    paymentStatus: 'overdue',
    type: 'maintenance',
    generatedDate: '2026-05-15',
  },
];

// Mock Vehicles
export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    vehicleNumber: 'MH-01-AB-1234',
    owner: 'Rajesh Kumar',
    flatNumber: '101',
    vehicleType: 'car',
    parkingSlot: 'A-101',
    registrationDate: '2020-03-15',
  },
  {
    id: '2',
    vehicleNumber: 'MH-02-CD-5678',
    owner: 'Priya Sharma',
    flatNumber: '102',
    vehicleType: 'car',
    parkingSlot: 'A-102',
    registrationDate: '2021-06-10',
  },
];

// Mock Staff
export const mockStaff: Staff[] = [
  {
    id: '1',
    name: 'Ravi Kumar',
    role: 'security',
    phone: '+91 98765 55555',
    email: 'ravi.security@society.com',
    joinDate: '2019-01-10',
    status: 'active',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ravi',
    attendance: 95,
  },
  {
    id: '2',
    name: 'Mahesh Singh',
    role: 'maintenance',
    phone: '+91 98765 66666',
    email: 'mahesh.maint@society.com',
    joinDate: '2020-05-20',
    status: 'active',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mahesh',
    attendance: 88,
  },
];

// Mock Flats
export const mockFlats: Flat[] = [
  { id: '1', number: '101', wing: 'A', floor: 1, area: 1050, type: '2bhk', residentId: '1', occupancyStatus: 'occupied' },
  { id: '2', number: '102', wing: 'A', floor: 1, area: 950, type: '1bhk', residentId: '2', occupancyStatus: 'occupied' },
  { id: '3', number: '103', wing: 'A', floor: 1, area: 1050, type: '2bhk', residentId: '3', occupancyStatus: 'occupied' },
  { id: '4', number: '104', wing: 'A', floor: 1, area: 850, type: 'studio', occupancyStatus: 'vacant' },
  { id: '5', number: '201', wing: 'A', floor: 2, area: 1200, type: '3bhk', residentId: '5', occupancyStatus: 'occupied' },
  { id: '6', number: '202', wing: 'A', floor: 2, area: 1050, type: '2bhk', occupancyStatus: 'vacant' },
  { id: '7', number: '301', wing: 'B', floor: 3, area: 950, type: '1bhk', occupancyStatus: 'vacant' },
  { id: '8', number: '302', wing: 'B', floor: 3, area: 1200, type: '3bhk', occupancyStatus: 'occupied' },
];

// Mock Dashboard Metrics
export const mockDashboardMetrics: DashboardMetrics = {
  totalResidents: 125,
  totalFlats: 150,
  visitorsToday: 8,
  openComplaints: 12,
  pendingPayments: 18,
  collectedRevenue: 4500000,
  monthlyRevenue: [450000, 480000, 520000, 495000, 530000, 550000],
  complaintTrend: [15, 12, 18, 10, 12, 15],
};
