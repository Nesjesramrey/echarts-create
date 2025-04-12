import React, { useState } from 'react';
import RevenueChart from './charts/RevenueChart';
import CampaignPerformanceChart from './charts/CampaignPerformanceChart';
import InfluencerComparisonChart from './charts/InfluencerComparisonChart';
import RevenueSources from './charts/RevenueSources';
import Header from './Header';
import { useTheme } from '../context/ThemeContext';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { darkMode } = useTheme();
  const [dateRange, setDateRange] = useState<string>('last30days');
  
  const handleDateRangeChange = (newRange: string) => {
    setDateRange(newRange);
    // In a real app, you would fetch new data based on the date range
    console.log(`Date range changed to: ${newRange}`);
  };
  
  return (
    <div className={`dashboard ${darkMode ? 'dark-theme' : ''}`}>
      <Header onDateRangeChange={handleDateRangeChange} />
      
      <div className="chart-container">
        <div className="chart-card">
          <h2>Revenue Over Time</h2>
          <p className="subtitle">Showing data for: {dateRange}</p>
          <RevenueChart dateRange={dateRange} />
        </div>
        
        <div className="chart-card">
          <h2>Revenue Sources</h2>
          <p className="subtitle">Distribution of income streams</p>
          <RevenueSources />
        </div>
        
        <div className="chart-card">
          <h2>Campaign Performance</h2>
          <p className="subtitle">Engagement vs. Conversion rates</p>
          <CampaignPerformanceChart />
        </div>
        
        <div className="chart-card wide-card">
          <h2>Influencer Comparison</h2>
          <p className="subtitle">Followers, engagement, and revenue metrics</p>
          <InfluencerComparisonChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;