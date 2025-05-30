import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface TrafficAnalyticsChartProps {
  className?: string;
}

const trafficData = [
  { date: '06/19', visits: 65, pageViews: 30 },
  { date: '06/20', visits: 110, pageViews: 50 },
  { date: '06/21', visits: 42, pageViews: 18 },
  { date: '06/22', visits: 128, pageViews: 55 },
  { date: '06/23', visits: 70, pageViews: 35 },
  { date: '06/24', visits: 45, pageViews: 20 },
  { date: '06/25', visits: 85, pageViews: 42 },
];

const TrafficAnalyticsChart: React.FC<TrafficAnalyticsChartProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground shadow-lg col-span-3', className)}>
      <CardHeader className="pb-2 pt-4 px-4 md:px-6">
        <CardTitle className="text-base md:text-lg font-semibold uppercase text-foreground">Website Traffic</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] md:h-[350px] p-4 md:p-6 pt-2 md:pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={trafficData}
            margin={{
              top: 5,
              right: 20, 
              left: -10, 
              bottom: 20, 
            }}
          >
            <defs>
              <linearGradient id="colorVisitsArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={10} 
              tickLine={false} 
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tick={{ dy: 5 }}
            />
            <YAxis 
              yAxisId="left"
              stroke="hsl(var(--muted-foreground))" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              domain={[0, (dataMax: number) => Math.max(140, dataMax + 20)]}
              allowDecimals={false}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              stroke="hsl(var(--muted-foreground))" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              domain={[0, (dataMax: number) => Math.max(60, dataMax + 10)]}
              allowDecimals={false}
            />
            <Tooltip
              cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '3 3' }}
              contentStyle={{
                backgroundColor: 'hsl(var(--popover))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
                color: 'hsl(var(--popover-foreground))',
                fontSize: '12px',
              }}
              labelStyle={{ color: 'hsl(var(--muted-foreground))' }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={30}
              iconSize={10}
              wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }}
              formatter={(value) => (
                <span style={{ color: 'hsl(var(--muted-foreground))' }}>{value}</span>
              )}
            />
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="visits" 
              stroke="hsl(var(--primary))" 
              fillOpacity={1} 
              fill="url(#colorVisitsArea)" 
              strokeWidth={2} 
              name="Website Visits"
              dot={{ r: 3, strokeWidth: 1, fill: 'hsl(var(--background))', stroke: 'hsl(var(--primary))' }}
              activeDot={{ r: 4, stroke: 'hsl(var(--primary))', fill: 'hsl(var(--primary))', strokeWidth: 1 }}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="pageViews" 
              stroke="hsl(var(--foreground), 0.7)" 
              strokeWidth={2} 
              name="Website Page Views"
              dot={{ r: 3, strokeWidth: 1, fill: 'hsl(var(--background))', stroke: 'hsl(var(--foreground), 0.7)' }}
              activeDot={{ r: 4, stroke: 'hsl(var(--foreground), 0.7)', fill: 'hsl(var(--foreground), 0.7)', strokeWidth: 1 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TrafficAnalyticsChart;
