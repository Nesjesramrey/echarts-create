import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

interface HeaderProps {
  onDateRangeChange: (range: string) => void;
  onLogout: () => void; // Add this line to include the onLogout prop
}

const Header: React.FC<HeaderProps> = ({ onDateRangeChange, onLogout }) => {
  const { darkMode, setDarkMode } = useTheme();
  const [dateRange, setDateRange] = useState<string>('last30days');
  
  const handleDateRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRange = e.target.value;
    setDateRange(newRange);
    if (onDateRangeChange) {
      onDateRangeChange(newRange);
    }
  };
  
  // Create a toggle function locally if it doesn't exist in the context
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1>Analytics Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="date-range-selector">
          {/* <label htmlFor="dateRange">Date Range:</label>
          <select 
            id="dateRange" 
            value={dateRange} 
            onChange={handleDateRangeChange}
          >
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="last90days">Last 90 Days</option>
            <option value="lastYear">Last Year</option>
          </select> */}
        </div>
        <button 
          className="theme-toggle" 
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button 
          className="logout-button" 
          onClick={onLogout}
          aria-label="Logout"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;