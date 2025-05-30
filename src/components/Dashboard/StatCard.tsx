import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  unit?: string;
  icon?: LucideIcon;
  className?: string;
  valueClassName?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, unit, icon: Icon, className, valueClassName }) => {
  return (
    <Card className={cn('bg-card text-card-foreground shadow-lg', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-4 px-4 md:px-6">
        <CardTitle className="text-xs md:text-sm font-medium uppercase text-muted-foreground">
          {title}
        </CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent className="pb-4 px-4 md:px-6">
        <div className={cn('text-2xl md:text-3xl font-bold text-foreground', valueClassName)}>
          {value}{unit && <span className={unit === '%' ? '' : 'ml-1'}>{unit}</span>}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
