'use client';

import React, { useState } from 'react';
import RevenueChart from './charts/RevenueChart';
import CampaignPerformanceChart from './charts/CampaignPerformanceChart';
import InfluencerComparisonChart from './charts/InfluencerComparisonChart';
import RevenueSources from './charts/RevenueSources';
import ImporteByCreadorChart from './charts/ImporteByCreadorChart';
import ImporteByCampanaChart from './charts/ImporteByCampanaChart';
import ImporteByMonthChart from './charts/ImporteByMonthChart';
import CostoPromedioChart from './charts/CostoPromedioChart';
import FacturadoChart from './charts/FacturadoChart';
import ContratoChart from './charts/ContratoChart';
import Header from './Header';
import { useTheme } from '../context/ThemeContext';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { darkMode } = useTheme();
  const [dateRange, setDateRange] = useState<string>('last30days');
  const [activeTab, setActiveTab] = useState<string>('influencer');
  
  const handleDateRangeChange = (newRange: string) => {
    setDateRange(newRange);
    // In a real app, you would fetch new data based on the date range
    console.log(`Date range changed to: ${newRange}`);
  };
  
  return (
    <div className={`dashboard ${darkMode ? 'dark-theme' : ''}`}>
      <Header onDateRangeChange={handleDateRangeChange} />
      
      <div className="tabs-container">
        <button 
          className={`tab-button ${activeTab === 'influencer' ? 'active' : ''}`}
          onClick={() => setActiveTab('influencer')}
        >
          Influencer Analytics
        </button>
        <button 
          className={`tab-button ${activeTab === 'campaign' ? 'active' : ''}`}
          onClick={() => setActiveTab('campaign')}
        >
          Campaign Analytics
        </button>
      </div>
      
      {activeTab === 'influencer' && (
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
      )}
      
      {activeTab === 'campaign' && (
        <div className="chart-container">
          <div className="chart-card">
            <h2>Top Creadores por Importe</h2>
            <p className="subtitle">Mostrando los 10 creadores con mayor importe</p>
            <ImporteByCreadorChart />
          </div>
          
          <div className="chart-card">
            <h2>Distribución por Campaña</h2>
            <p className="subtitle">Distribución de importes por campaña</p>
            <ImporteByCampanaChart />
          </div>
          
          <div className="chart-card">
            <h2>Importe por Mes</h2>
            <p className="subtitle">Tendencia de importes por mes de facturación</p>
            <ImporteByMonthChart />
          </div>
          
          <div className="chart-card">
            <h2>Costo Promedio</h2>
            <p className="subtitle">Porcentaje de costo promedio</p>
            <CostoPromedioChart />
          </div>
          
          <div className="chart-card">
            <h2>Estado de Facturación</h2>
            <p className="subtitle">Importes facturados vs no facturados</p>
            <FacturadoChart />
          </div>
          
          <div className="chart-card">
            <h2>Estado de Contratos</h2>
            <p className="subtitle">Importes con contrato vs sin contrato</p>
            <ContratoChart />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;