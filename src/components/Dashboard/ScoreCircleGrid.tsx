import React from 'react';
import ScoreCircle from './ScoreCircle';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ScoreCircleGridProps {
  className?: string;
}

const scoresData = [
  { id: 'score1' as const, label: 'Score #1', score: 85 },
  { id: 'score2' as const, label: 'Score #2', score: 73 },
  { id: 'score3' as const, label: 'Score #3', score: 92 },
  { id: 'score4' as const, label: 'Score #4', score: 54 },
  { id: 'score5' as const, label: 'Score #5', score: 75 },
];

const ScoreCircleGrid: React.FC<ScoreCircleGridProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground shadow-lg col-span-3', className)}>
      <CardContent className="p-4 md:p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center justify-around">
        {scoresData.map((data) => (
          <ScoreCircle 
            key={data.id} 
            score={data.score} 
            label={data.label}
            size={90}       // Adjusted for fitting 5 in a row
            strokeWidth={9} // Adjusted proportionally
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default ScoreCircleGrid;
