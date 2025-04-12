import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiCalendar } from 'react-icons/fi';

interface HeaderProps {
  onDateRangeChange?: (range: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onDateRangeChange }) => {
  const { darkMode, toggleTheme } = useTheme();
  const [dateRange, setDateRange] = useState<string>('last30days');
  
  const handleDateRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRange = e.target.value;
    setDateRange(newRange);
    onDateRangeChange && onDateRangeChange(newRange);
  };
  
  return (
    <header className="header">
      <div className="logo">
        <h1>Influencer Analytics</h1>
      </div>
      
      <div className="controls">
        <div className="date-range-selector">
          <FiCalendar className="icon" />
          <select 
            value={dateRange} 
            onChange={handleDateRangeChange}
            className="date-select"
          >
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="last90days">Last 90 Days</option>
            <option value="lastYear">Last Year</option>
            <option value="allTime">All Time</option>
          </select>
        </div>
        
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <FiSun className="icon" /> : <FiMoon className="icon" />}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 2rem;
        }
        
        .logo h1 {
          margin: 0;
          font-size: 1.5rem;
        }
        
        .controls {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .date-range-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--bg-primary);
          padding: 0.5rem;
          border-radius: 4px;
          border: 1px solid var(--border-color);
        }
        
        .date-select {
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: 0.9rem;
          padding-right: 1rem;
        }
        
        .icon {
          margin-right: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          
          .controls {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;