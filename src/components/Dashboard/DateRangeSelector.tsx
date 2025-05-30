import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface DateRangeSelectorProps {
  className?: string;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ className }) => {
  const [startDate, setStartDate] = React.useState<Date | undefined>(new Date('2024-06-19T00:00:00'));
  const [endDate, setEndDate] = React.useState<Date | undefined>(new Date('2024-06-25T00:00:00'));

  return (
    <div className={cn('flex items-center space-x-2 md:space-x-4 text-xs md:text-sm', className)}>
      <span className="uppercase text-muted-foreground hidden md:inline">Enter Start Date -&gt;</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-[130px] md:w-[160px] justify-start text-left font-normal',
              'bg-card text-foreground hover:bg-muted border-border focus-visible:ring-ring focus-visible:ring-offset-background',
              !startDate && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-1 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
            {startDate ? format(startDate, 'MM/dd/yyyy') : <span className="text-xs">Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-popover border-border" align="start">
          <Calendar
            mode="single"
            selected={startDate}
            onSelect={setStartDate}
            initialFocus
            className="bg-card"
          />
        </PopoverContent>
      </Popover>
      <span className="uppercase text-muted-foreground">Through</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-[130px] md:w-[160px] justify-start text-left font-normal',
              'bg-card text-foreground hover:bg-muted border-border focus-visible:ring-ring focus-visible:ring-offset-background',
              !endDate && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-1 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
            {endDate ? format(endDate, 'MM/dd/yyyy') : <span className="text-xs">Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-popover border-border" align="start">
          <Calendar
            mode="single"
            selected={endDate}
            onSelect={setEndDate}
            disabled={(date) =>
              startDate ? date < startDate : false
            }
            initialFocus
            className="bg-card"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateRangeSelector;
