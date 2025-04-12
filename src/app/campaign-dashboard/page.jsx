'use client';

import React from 'react';
import ImporteByCreadorChart from '../../components/charts/ImporteByCreadorChart';
import ImporteByCampanaChart from '../../components/charts/ImporteByCampanaChart';
import ImporteByMonthChart from '../../components/charts/ImporteByMonthChart';
import CostoPromedioChart from '../../components/charts/CostoPromedioChart';
import FacturadoChart from '../../components/charts/FacturadoChart';
import ContratoChart from '../../components/charts/ContratoChart';
import { getTotalImporte } from '../../services/dataService';
import styles from './page.module.css';

export default function CampaignDashboard() {
  const totalImporte = getTotalImporte();
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard de Análisis de Campañas</h1>
      
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <h3>Importe Total</h3>
          <p className={styles.statValue}>${totalImporte.toLocaleString()}</p>
        </div>
      </div>
      
      <div className={styles.chartGrid}>
        <div className={styles.chartCard}>
          <ImporteByCreadorChart />
        </div>
        
        <div className={styles.chartCard}>
          <ImporteByCampanaChart />
        </div>
        
        <div className={styles.chartCard}>
          <ImporteByMonthChart />
        </div>
        
        <div className={styles.chartCard}>
          <CostoPromedioChart />
        </div>
        
        <div className={styles.chartCard}>
          <FacturadoChart />
        </div>
        
        <div className={styles.chartCard}>
          <ContratoChart />
        </div>
      </div>
    </div>
  );
}