import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { Package } from 'lucide-react';

interface ProductSalesChartProps {
  className?: string;
}

const salesData = [
  { name: 'Region 1', sales: 70 },
  { name: 'Region 2', sales: 103 },
  { name: 'Region 3', sales: 116 },
  { name: 'Region 4', sales: 35 },
  { name: 'Region 5', sales: 40 },
].sort((a,b) => a.sales - b.sales);

const totalProductsSold = 364;
const dateRange = "06/19/2024 - 06/25/2024";

const ProductSalesChart: React.FC<ProductSalesChartProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground shadow-lg col-span-3 lg:col-span-2', className)}>
      <CardHeader className="pb-2 pt-4 px-4 md:px-6">
        <CardTitle className="text-base md:text-lg font-semibold uppercase text-foreground">Product Sales</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6 pt-2 md:pt-4">
        <div className="md:col-span-2 h-[250px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis 
                dataKey="name" 
                type="category" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={10} 
                tickLine={false} 
                axisLine={false}
                width={60}
              />
              <Tooltip
                cursor={{ fill: 'hsl(var(--muted), 0.3)' }}
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  color: 'hsl(var(--popover-foreground))',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={16}>
                <LabelList dataKey="sales" position="right" style={{ fill: 'hsl(var(--foreground))', fontSize: 10 }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="md:col-span-1 flex flex-col items-center justify-center p-4 bg-card-foreground/5 rounded-lg min-h-[150px] md:min-h-full">
          <h3 className="text-xs md:text-sm font-medium uppercase text-muted-foreground mb-2 text-center">Total Products Sold</h3>
          <Package className="w-12 h-12 md:w-16 md:h-16 text-primary mb-2 md:mb-3" />
          <p className="text-3xl md:text-5xl font-bold text-primary">{totalProductsSold}</p>
          <p className="text-xs text-muted-foreground mt-1 md:mt-2">{dateRange}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductSalesChart;
