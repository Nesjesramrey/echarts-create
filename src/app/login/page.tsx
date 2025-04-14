'use client';

import React from 'react';
import Login from '@/components/Login';
import { useRouter } from 'next/navigation';
import styles from '../page.module.css';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (username: string, password: string) => {
    // In a real app, you would validate credentials against a backend
    // For now, we'll use a simple check
    if (username && password) {
      // Store authentication state
      localStorage.setItem('isAuthenticated', 'true');
      // Redirect to dashboard
      router.push('/');
    }
  };

  return (
    <main className={styles.main}>
      <Login onLogin={handleLogin} />
    </main>
  );
}