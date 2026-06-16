import { useEffect, useState, useCallback, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

const SOCKET_SERVER_URL = process.env.VITE_SOCKET_URL || 'http://localhost:3001';

interface RealtimeState {
  flats: any[];
  visitors: any[];
  metrics: Record<string, any>;
  isConnected: boolean;
  activeUsers: number;
}

export function useRealtimeUpdates() {
  const socketRef = useRef<Socket | null>(null);
  const [state, setState] = useState<RealtimeState>({
    flats: [],
    visitors: [],
    metrics: {},
    isConnected: false,
    activeUsers: 0,
  });

  // Initialize socket connection
  useEffect(() => {
    console.log('🔌 Connecting to Socket.IO server...');
    socketRef.current = io(SOCKET_SERVER_URL, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });

    const socket = socketRef.current;

    socket.on('connect', () => {
      console.log('✅ Connected to real-time server');
      setState((prev) => ({ ...prev, isConnected: true }));
    });

    socket.on('disconnect', () => {
      console.log('❌ Disconnected from real-time server');
      setState((prev) => ({ ...prev, isConnected: false }));
    });

    socket.on('sync:state', (data) => {
      console.log('📊 Synced state from server:', data);
      setState((prev) => ({ ...prev, ...data }));
    });

    socket.on('flat:created', (flat) => {
      setState((prev) => ({ ...prev, flats: [...prev.flats, flat] }));
    });

    socket.on('flat:updated', (updatedFlat) => {
      setState((prev) => ({
        ...prev,
        flats: prev.flats.map((f) => (f.id === updatedFlat.id ? updatedFlat : f)),
      }));
    });

    socket.on('flat:deleted', (flatId) => {
      setState((prev) => ({ ...prev, flats: prev.flats.filter((f) => f.id !== flatId) }));
    });

    socket.on('visitor:checkin', (visitor) => {
      setState((prev) => ({ ...prev, visitors: [...prev.visitors, visitor] }));
    });

    socket.on('visitor:checkout', (visitor) => {
      setState((prev) => ({
        ...prev,
        visitors: prev.visitors.map((v) => (v.id === visitor.id ? visitor : v)),
      }));
    });

    socket.on('metrics:update', (metrics) => {
      setState((prev) => ({ ...prev, metrics }));
    });

    socket.on('metrics:live', (data) => {
      setState((prev) => ({ ...prev, activeUsers: data.onlineUsers }));
    });

    socket.on('users:count', (count) => {
      setState((prev) => ({ ...prev, activeUsers: count }));
    });

    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, []);

  // Action emitters
  const createFlat = useCallback((flat: any) => {
    socketRef.current?.emit('flat:create', flat);
  }, []);

  const updateFlat = useCallback((flat: any) => {
    socketRef.current?.emit('flat:update', flat);
  }, []);

  const deleteFlat = useCallback((flatId: string) => {
    socketRef.current?.emit('flat:delete', flatId);
  }, []);

  const checkinVisitor = useCallback((visitor: any) => {
    socketRef.current?.emit('visitor:checkin', visitor);
  }, []);

  const checkoutVisitor = useCallback((visitorId: string) => {
    socketRef.current?.emit('visitor:checkout', visitorId);
  }, []);

  const updateComplaint = useCallback((complaint: any) => {
    socketRef.current?.emit('complaint:update', complaint);
  }, []);

  return {
    state,
    createFlat,
    updateFlat,
    deleteFlat,
    checkinVisitor,
    checkoutVisitor,
    updateComplaint,
  };
}
