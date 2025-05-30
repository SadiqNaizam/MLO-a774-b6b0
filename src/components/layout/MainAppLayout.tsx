import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn('min-h-screen bg-background', className)}>
      <Header />
      <main
        className={cn(
          'pt-[80px]', // Account for fixed header height (h-[80px])
          'min-w-0 overflow-y-auto' // Sizing from layout requirements for main content
        )}
      >
        {/* Padding for main content area, as per mainContent.layout */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
