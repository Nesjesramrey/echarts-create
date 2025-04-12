import { useState, useEffect } from 'react';

// Generic type parameter T for the data structure
export function useChartData<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock data based on endpoint
        let mockData: any;
        
        if (endpoint === '/revenue') {
          mockData = {
            dates: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            revenue: [12000, 19000, 15000, 22000, 24000, 28000]
          };
        } else if (endpoint === '/influencers') {
          mockData = {
            influencers: ['@user1', '@user2', '@user3', '@user4', '@user5'],
            followers: [100000, 250000, 180000, 320000, 150000],
            engagement: [3.2, 4.5, 2.8, 3.9, 5.1],
            revenue: [5000, 12000, 7500, 15000, 8200]
          };
        } else if (endpoint === '/revenue-sources') {
          mockData = {
            sources: ['Sponsored Posts', 'Affiliate Links', 'Product Sales', 'Subscriptions'],
            values: [45000, 32000, 28000, 15000]
          };
        } else {
          mockData = {};
        }
        
        setData(mockData as T);
        setError(null);
      } catch (err) {
        // Convert error to string
        setError(err instanceof Error ? err.message : String(err));
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [endpoint]);

  return { data, loading, error };
}