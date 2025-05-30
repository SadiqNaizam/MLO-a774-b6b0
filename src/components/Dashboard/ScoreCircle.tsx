import React from 'react';
import { cn } from '@/lib/utils';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface ScoreCircleProps {
  score: number; // 0-100
  label: string;
  className?: string;
  size?: number; 
  strokeWidth?: number;
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({
  score,
  label,
  className,
  size = 100, 
  strokeWidth = 10
}) => {
  const data = [
    { name: 'score', value: score },
    { name: 'remaining', value: 100 - score },
  ];

  const scoreColor = 'hsl(var(--primary))';
  // For dark theme, card-foreground is white. Use with opacity for track.
  const trackColor = 'hsl(var(--foreground), 0.15)'; 

  const COLORS = [scoreColor, trackColor];

  const innerRadiusPercent = `${100 * ((size / 2) - strokeWidth) / (size / 2)}%`;
  const outerRadiusPercent = "100%";

  return (
    <div className={cn('flex flex-col items-center', className)} style={{ width: size }}>
      <div style={{ width: size, height: size }} className="relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadiusPercent}
              outerRadius={outerRadiusPercent}
              startAngle={90} // Start from top
              endAngle={-270} // Go clockwise, full circle for calculations
              paddingAngle={0} 
              dataKey="value"
              stroke="none"
              cornerRadius={(score > 0 && score < 100) ? strokeWidth / 1.5 : 0} // Apply rounding if it's a partial circle
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="font-bold text-primary"
            style={{ fontSize: `${Math.max(12, size * 0.22)}px` }} // Ensure minimum size, scale with circle
          >
            {score}
          </span>
        </div>
      </div>
      <p 
        className="mt-2 text-center text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-wider w-full truncate"
        title={label}
      >
        {label}
      </p>
    </div>
  );
};

export default ScoreCircle;
