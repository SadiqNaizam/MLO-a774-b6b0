import React from 'react';
// Using relative paths for project components as per critical guidelines
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import ProductSalesChart from '../components/Dashboard/ProductSalesChart';
import TrafficAnalyticsChart from '../components/Dashboard/TrafficAnalyticsChart';
import ScoreCircleGrid from '../components/Dashboard/ScoreCircleGrid';

const WeeklyStatusDashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        Main content container as per Layout Requirements:
        - mainContent.container: "grid grid-cols-3 gap-6"
        This creates a 3-column grid structure for its direct children.
      */}
      <div className="grid grid-cols-3 gap-6">
        {/* 
          StatsCardGrid: This component internally lays out multiple stat cards.
          To make the StatsCardGrid itself occupy the full width of the parent 3-column grid,
          we assign it 'col-span-3'. Its internal grid (e.g., lg:grid-cols-4) will then arrange
          the individual stat cards within this full-width container.
        */}
        <StatsCardGrid className="col-span-3" />

        {/* 
          ProductSalesChart: This component has its own responsive column spanning defined
          in its implementation (e.g., 'col-span-3 lg:col-span-2').
          - On screens smaller than 'lg', it typically spans 3 columns (full width of this grid).
          - On 'lg' screens and larger, it might span 2 columns.
          No explicit className is needed here from the page for column spanning,
          as the component manages its own width within the grid. The CSS grid's auto-flow
          will handle placement.
        */}
        <ProductSalesChart />

        {/* 
          TrafficAnalyticsChart: This component is typically defined with 'col-span-3' internally.
          It will occupy the full width of the 3-column grid.
          If ProductSalesChart is, for example, lg:col-span-2, this TrafficAnalyticsChart component
          (being col-span-3) will correctly wrap to a new row in the grid flow, maintaining the layout integrity.
        */}
        <TrafficAnalyticsChart />
        
        {/* 
          ScoreCircleGrid: This component is also typically defined with 'col-span-3' internally.
          It will occupy the full width of the 3-column grid, starting on a new row.
        */}
        <ScoreCircleGrid />
      </div>
    </MainAppLayout>
  );
};

export default WeeklyStatusDashboardPage;
