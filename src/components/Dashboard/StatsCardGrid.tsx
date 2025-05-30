import React from 'react';
import StatCard from './StatCard';
import { cn } from '@/lib/utils';
// Icons could be imported here if needed for specific cards, e.g.:
// import { DollarSign, BarChart3, Smile, UserCheck } from 'lucide-react';

interface StatsCardGridProps {
  className?: string;
}

const statsData = [
  { id: 'revenue' as const, title: 'Revenue', value: '$92,463', unit: '' },
  { id: 'production' as const, title: 'Production Output', value: '315', unit: '' },
  { id: 'satisfaction' as const, title: 'Customer Satisfaction Score', value: '91', unit: '%' },
  { id: 'attendance' as const, title: 'Employee Attendance', value: '96', unit: '%' },
];

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6', className)}>
      {statsData.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          unit={stat.unit}
          // Example: icon={stat.id === 'revenue' ? DollarSign : undefined}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
