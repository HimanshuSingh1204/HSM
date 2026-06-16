/**
 * HSMS Real-time Server
 * Socket.IO server for live updates on Flats, Residents, Visitors, etc.
 * 
 * Usage:
 *   npm run dev:server
 * 
 * This runs on port 3001 and connects to the Vite dev server at http://localhost:5173
 */

import http from 'http';
import { Server } from 'socket.io';

const PORT = 3001;

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: ['GET', 'POST'],
  },
});

// Track connected users
const connectedUsers = new Map();

// Initial state
let appState = {
  flats: [
    { id: '1', number: '101', wing: 'A', floor: 1, area: 1050, type: '2bhk', occupancyStatus: 'occupied' },
    { id: '2', number: '102', wing: 'A', floor: 1, area: 950, type: '1bhk', occupancyStatus: 'occupied' },
    { id: '3', number: '103', wing: 'A', floor: 1, area: 1050, type: '2bhk', occupancyStatus: 'occupied' },
    { id: '4', number: '104', wing: 'A', floor: 1, area: 850, type: 'studio', occupancyStatus: 'vacant' },
    { id: '5', number: '201', wing: 'A', floor: 2, area: 1200, type: '3bhk', occupancyStatus: 'occupied' },
    { id: '6', number: '202', wing: 'A', floor: 2, area: 1050, type: '2bhk', occupancyStatus: 'vacant' },
  ],
  visitors: [],
  complaints: [
    { id: '1', complaintId: 'COMP-001', status: 'in_progress', title: 'Broken tap in common bathroom' },
  ],
  metrics: {
    totalResidents: 125,
    visitorsToday: 8,
    openComplaints: 12,
    pendingPayments: 18,
  },
};

io.on('connection', (socket) => {
  console.log(`✅ User connected: ${socket.id}`);
  connectedUsers.set(socket.id, { id: socket.id, timestamp: new Date() });

  // Send current state to newly connected user
  socket.emit('sync:state', appState);
  io.emit('users:count', connectedUsers.size);

  // Handle flat updates
  socket.on('flat:create', (flat) => {
    flat.id = String(appState.flats.length + 1);
    appState.flats.push(flat);
    io.emit('flat:created', flat);
    io.emit('metrics:update', { totalFlats: appState.flats.length });
  });

  socket.on('flat:update', (updatedFlat) => {
    appState.flats = appState.flats.map((f) => (f.id === updatedFlat.id ? updatedFlat : f));
    io.emit('flat:updated', updatedFlat);
  });

  socket.on('flat:delete', (flatId) => {
    appState.flats = appState.flats.filter((f) => f.id !== flatId);
    io.emit('flat:deleted', flatId);
  });

  // Handle visitor check-ins
  socket.on('visitor:checkin', (visitor) => {
    visitor.id = String(Date.now());
    visitor.entryTime = new Date().toLocaleString();
    appState.visitors.push(visitor);
    appState.metrics.visitorsToday = appState.visitors.filter(
      (v) => !v.exitTime && new Date(v.entryTime).toDateString() === new Date().toDateString()
    ).length;
    io.emit('visitor:checkin', visitor);
    io.emit('metrics:update', appState.metrics);
  });

  socket.on('visitor:checkout', (visitorId) => {
    const visitor = appState.visitors.find((v) => v.id === visitorId);
    if (visitor) {
      visitor.exitTime = new Date().toLocaleString();
      appState.metrics.visitorsToday = appState.visitors.filter(
        (v) => !v.exitTime && new Date(v.entryTime).toDateString() === new Date().toDateString()
      ).length;
      io.emit('visitor:checkout', visitor);
      io.emit('metrics:update', appState.metrics);
    }
  });

  // Handle complaint status updates
  socket.on('complaint:update', (complaint) => {
    appState.complaints = appState.complaints.map((c) => (c.id === complaint.id ? complaint : c));
    appState.metrics.openComplaints = appState.complaints.filter((c) => c.status !== 'resolved').length;
    io.emit('complaint:updated', complaint);
    io.emit('metrics:update', appState.metrics);
  });

  // Broadcast user activity
  socket.on('user:activity', (activity) => {
    io.emit('activity:log', { userId: socket.id, activity, timestamp: new Date() });
  });

  // Disconnect handler
  socket.on('disconnect', () => {
    console.log(`❌ User disconnected: ${socket.id}`);
    connectedUsers.delete(socket.id);
    io.emit('users:count', connectedUsers.size);
  });

  socket.on('error', (error) => {
    console.error(`Socket error from ${socket.id}:`, error);
  });
});

// Broadcast live metrics every 5 seconds
setInterval(() => {
  io.emit('metrics:live', {
    onlineUsers: connectedUsers.size,
    uptime: process.uptime(),
    timestamp: new Date(),
  });
}, 5000);

server.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════╗
║                                                   ║
║    🏘️  HSMS Real-time Server                     ║
║    📡 Socket.IO running on port ${PORT}             ║
║    ✅ Ready for connections                      ║
║                                                   ║
║    Frontend: http://localhost:5173                ║
║    Clients Connected: ${connectedUsers.size}                        ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
  `);
});
