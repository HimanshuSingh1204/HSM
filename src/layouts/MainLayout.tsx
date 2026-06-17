import { ReactNode } from 'react';
import { Header } from '../components/common/Header';
import { RoleBasedSidebar } from '../components/common/RoleBasedSidebar';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <RoleBasedSidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-56">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex-1 overflow-y-auto"
        >
          <div className="max-w-5xl mx-auto px-4 py-4 md:px-5 md:py-5">{children}</div>
        </motion.main>
      </div>
    </div>
  );
}
