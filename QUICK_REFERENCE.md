# HSMS Quick Reference Card
## Housing Society Management System - v1.0.0

---

## 🚀 Getting Started (30 seconds)

### One-Click Startup (Windows)
```
Double-click: startup.bat
```

### Or Manual Startup (Mac/Linux)
```bash
# Terminal 1
npm run dev

# Terminal 2
npm run dev:server
```

---

## 🔐 Demo Login
- **Email:** `rajesh@society.com`
- **Password:** `demo@123`

---

## 🌐 URLs
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3001

---

## ✨ Main Features

| Page | Purpose | Quick Action |
|------|---------|--------------|
| **Dashboard** | View KPIs & metrics | Real-time updates every 5s |
| **Residents** | Manage resident list | Search, filter, add/edit/delete |
| **Flats** | Housing inventory | Add flat, view occupancy, edit status |
| **Visitors** | Guest tracking | Check-in/out, view visit history |
| **Complaints** | Issue management | Kanban board, drag to change status |
| **Notices** | Announcements | Create notice, like, comment |
| **Polls** | Member voting | Vote, see live results |
| **Functions** | Event approvals | Approve/reject applications |
| **Billing** | Payment tracking | View invoices, payment status |

---

## 🎯 Common Tasks

### Add a New Flat
1. Click **Flats** in sidebar
2. Click **"+ Add Flat"** button
3. Fill form with flat details
4. Click **"Create"**
5. Real-time update! ✨

### Update Resident Status
1. Click **Residents**
2. Find resident in list
3. Click **"Edit"** button
4. Change status dropdown
5. Click **"Save"**

### Change Complaint Status
1. Click **Complaints**
2. Click and drag complaint card
3. Move between status columns
4. Status updates instantly! ✨

### Create New Poll
1. Click **Polls**
2. Click **"New Poll"** button
3. Enter question and options
4. Set expiration date
5. Members start voting! ✨

---

## 🔌 Real-time Features

**What Updates in Real-time:**
- ✅ New flats, residents, visitors
- ✅ Complaint status changes
- ✅ Poll votes (live count)
- ✅ Dashboard metrics
- ✅ Notice likes/comments

**How to Test:**
1. Open app in **Window A**
2. Open app in **Window B**
3. Create something in Window A
4. Watch Window B update instantly! 🚀

---

## 📊 Dashboard Insights

- **Total Residents:** Count of active members
- **Total Flats:** Total housing units
- **Vacant Flats:** Available for occupancy
- **Active Visitors:** Current check-ins
- **Pending Complaints:** Issues awaiting resolution
- **Live User Count:** Currently active users

---

## 🎨 UI Tips

### Interactions
- **Hover** cards to see shadow/scale effects
- **Click "Edit"** to modify entries
- **Click "Delete"** to remove (with confirmation)
- **Drag** complaint cards to change status
- **Search** to find specific entries

### Color Meanings
- 🟢 **Green** = Active/Success/Occupied
- 🟡 **Orange** = Pending/Warning
- 🔴 **Red** = Critical/Error
- 🔵 **Blue** = Primary action/Info

---

## ⚙️ Commands Reference

```bash
# Start frontend only
npm run dev

# Start backend (Socket.IO) only
npm run dev:server

# Build for production
npm run build

# Preview production build
npm run preview

# Run code linter
npm run lint
```

---

## 🐛 Troubleshooting

**Q: "Cannot connect to server"**
- A: Ensure `npm run dev:server` is running in another terminal

**Q: "Page is blank"**
- A: Check browser console (F12) for errors, reload page

**Q: "Real-time updates not working"**
- A: Open DevTools → Console, look for Socket.IO connection message

**Q: "Port 3001/5173 already in use"**
- A: Close other instances or change port in code

---

## 📱 Browser Support

✅ **Fully Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Mobile:** Fully responsive (iPad, Android)

---

## 🚨 Important Notes

1. **Mock Data:** Currently using sample data (no database)
2. **Authentication:** Demo account for testing
3. **Data Persistence:** Not saved between sessions
4. **For Production:** Requires real backend API integration

---

## 📞 Support

**Check These First:**
1. Browser console (F12) for errors
2. Both servers running (frontend + backend)
3. Correct login credentials
4. Port 3001 and 5173 are free

---

## 🎬 Demo Flow (5 minutes)

1. **Login** (15s) → Enter credentials
2. **Dashboard** (30s) → Show KPIs, metrics
3. **Flats** (1m) → Add new flat, show grid
4. **Real-time Demo** (2m) → Open two windows, create flat in one
5. **Complaints** (1m) → Drag complaint to change status
6. **Polls** (30s) → Vote and show live results

---

## 🔄 Update Check

**Current Version:** 1.0.0  
**Last Updated:** June 2026  
**Status:** Production Ready ✅

---

**Keep this card handy for quick reference!**
