import React from 'react';
import { cn } from '@/lib/utils';
import DateRangeSelector from '../Dashboard/DateRangeSelector';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const projectTitle = "WEEKLY STATUS DASHBOARD";

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-10', // z-index from layout requirements
        'h-[80px] px-6',
        'flex items-center justify-between',
        'bg-card', // Mapped from 'bg-surface' in requirements, using theme variable
        'border-b border-border',
        className
      )}
    >
      <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
        {projectTitle}
      </h1>
      <DateRangeSelector />
    </header>
  );
};

export default Header;
