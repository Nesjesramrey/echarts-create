import { useState, useEffect } from 'react';
import axios from 'axios';

interface ChartDataState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

export function useChartData<T>(endpoint: string, defaultData: T | null = null): ChartDataState<T> {
  const [state, setState] = useState<ChartDataState<T>>({
    data: defaultData,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true }));
        
        // For development, use mock data if no API is available
        if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_API_URL) {
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 800));
          
          // Return mock data based on endpoint
          let mockData: any = null;
          
          if (endpoint === '/revenue') {
            mockData = {
              months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              revenue: [12000, 19000, 15000, 22000, 24000, 30000, 28000, 32000, 34000, 36000, 40000, 45000],
              projectedRevenue: [11000, 18000, 16000, 21000, 25000, 29000, 30000, 33000, 36000, 38000, 42000, 48000]
            };
          } else if (endpoint === '/campaigns') {
            mockData = {
              campaigns: ['Instagram Story', 'YouTube Video', 'TikTok Challenge', 'Instagram Post', 'YouTube Short'],
              engagement: [85, 63, 92, 78, 56],
              conversion: [23, 42, 35, 27, 15]
            };
          } else if (endpoint === '/influencers') {
            mockData = {
              influencers: ['@fashionista', '@techguru', '@foodlover', '@travelbug', '@fitnessguru'],
              followers: [1200000, 850000, 920000, 1500000, 750000],
              engagement: [3.2, 4.5, 5.1, 2.8, 6.7],
              revenue: [45000, 38000, 42000, 55000, 36000]
            };
          } else if (endpoint === '/revenue-sources') {
            mockData = [
              { value: 40, name: 'Sponsored Posts' },
              { value: 25, name: 'Affiliate Marketing' },
              { value: 15, name: 'Product Sales' },
              { value: 12, name: 'Brand Partnerships' },
              { value: 8, name: 'Paid Subscriptions' }
            ];
          }
          
          setState({
            data: mockData as T,
            loading: false,
            error: null
          });
        } else {
          // Real API call
          const response = await axios.get<T>(`${API_BASE_URL}${endpoint}`);
          setState({
            data: response.data,
            loading: false,
            error: null
          });
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching data';
        setState({
          data: null,
          loading: false,
          error: errorMessage
        });
        console.error('Error fetching chart data:', err);
      }
    };

    fetchData();
  }, [endpoint]);

  return state;
}