# Housing Society Management System (HSMS)

A modern, premium SaaS application for managing residential societies with resident management, visitor tracking, complaints, notices, voting, billing, and more.

## 🎯 Overview

HSMS is a complete digital platform designed to simplify residential society operations. Built with React 19, Vite, Tailwind CSS, and modern web technologies, it provides a professional, intuitive interface for administrators, residents, and staff.

## ✨ Features

### Core Modules
- **Dashboard** - KPI metrics, revenue charts, complaint trends, and activity feed
- **Resident Management** - Add, edit, view, and manage all society residents
- **Visitor Management** - Track visitors with approval workflow
- **Complaint Management** - Kanban-style complaint tracking and status updates
- **Notice Management** - Social feed-style announcements and communications
- **Polls & Voting** - Community decision-making with live results
- **Function Approvals** - Event application and approval system
- **Billing & Payments** - Invoice management and payment tracking
- **Staff Management** - Track society workers and attendance
- **Vehicle Management** - Manage resident vehicles and parking
- **Document Management** - Store and organize society records
- **Reports & Analytics** - Operational insights and visualizations

### Design Features
✅ Premium SaaS aesthetic (Notion, Linear, Stripe inspired)
✅ Fully responsive design (Desktop, Tablet, Mobile)
✅ Modern animations and transitions
✅ Dark mode support
✅ Accessibility optimized
✅ Consistent design system

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI Framework |
| **Vite** | Build tool |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **ShadCN UI** | Component library |
| **Zustand** | State management |
| **React Hook Form** | Form handling |
| **Recharts** | Data visualization |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |
| **React Router** | Navigation |

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hsms
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

### Demo Credentials
- **Email:** rajesh@society.com
- **Password:** demo@123

## 🚀 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Header, Sidebar, PageHeader
│   ├── ui/              # Reusable UI components
│   └── modules/         # Feature-specific components
├── pages/               # Application pages
├── layouts/             # Page layouts
├── store/               # Zustand stores
├── hooks/               # Custom hooks
├── types/               # TypeScript types
├── utils/               # Helpers and mock data
├── styles/              # Global styles
├── App.tsx              # Main app component
└── main.tsx             # Entry point
```

## 🎨 Design System

### Colors
- **Primary:** #2563EB (Blue)
- **Secondary:** #0F172A (Dark Navy)
- **Success:** #22C55E (Green)
- **Warning:** #F59E0B (Amber)
- **Danger:** #EF4444 (Red)
- **Background:** #F8FAFC (Light Gray)

### Typography
- **Font:** Inter
- **Weights:** 300, 400, 500, 600, 700, 800

### Spacing
- **Grid:** 8px base unit
- **8px, 16px, 24px, 32px, 40px**

### Border Radius
- **Cards:** 20px
- **Buttons/Inputs:** 12px

## 🔐 Authentication

The app includes a mock authentication system:
- Session persistence with Zustand
- Protected routes using React Router
- Demo account for testing

## 📊 Mock Data

All pages include comprehensive mock data for immediate visualization:
- 5+ Residents
- 3+ Visitors
- 4+ Complaints
- 3+ Notices
- 2+ Active Polls
- 3+ Function Applications
- 3+ Invoices

## 🎯 MVP Screens Included

1. ✅ Login Page
2. ✅ Dashboard
3. ✅ Residents
4. ✅ Visitors
5. ✅ Complaints (Kanban)
6. ✅ Notices (Feed)
7. ✅ Polls (Voting)
8. ✅ Function Approvals
9. ✅ Billing
10. ✅ Placeholder pages for other modules

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy
The `dist` folder contains the production build. Deploy to:
- Vercel
- Netlify
- AWS Amplify
- Any static hosting service

## 📝 Development Guidelines

### Component Naming
- Use PascalCase for component files
- Descriptive names (e.g., `ResidentsPage`, `StatCard`)

### Styling
- Use Tailwind CSS utility classes
- Custom styles in `src/styles/`
- Use `cn()` utility for conditional classes

### State Management
- Zustand for global state
- React hooks for local state
- Custom hooks in `src/hooks/`

### Type Safety
- Define types in `src/types/index.ts`
- Use interfaces over types when possible
- Avoid `any` types

## 🐛 Known Limitations

- Backend API integration not included (mock data only)
- Authentication is not connected to real backend
- File uploads use mock implementation
- Some pages are placeholders

## 🔄 Future Enhancements

- Backend API integration
- Real authentication system
- File upload functionality
- Email notifications
- SMS alerts
- Mobile app
- Advanced reporting
- AI-powered insights

## 📄 License

This project is provided as-is for the Housing Society Management System.

## 📞 Support

For issues or questions:
1. Check the project documentation
2. Review the code comments
3. Refer to the design system

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Zustand](https://github.com/pmndrs/zustand)

---

**Version:** 1.0.0
**Last Updated:** June 2026
**Status:** Production Ready
