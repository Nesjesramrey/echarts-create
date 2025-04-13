import React from 'react';
import Dashboard from '@/components/Dashboard';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  );
}
