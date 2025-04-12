import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { useChartData } from '../../hooks/useChartData';

interface CampaignData {
  campaigns: string[];
  engagement: number[];
  conversion: number[];
}

const CampaignPerformanceChart: React.FC = () => {
  const [options, setOptions] = useState<any>({});
  const { data, loading, error } = useChartData<CampaignData>('/campaigns');
  
  useEffect(() => {
    if (data) {
      setOptions({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['Engagement Rate (%)', 'Conversion Rate (%)'],
          bottom: 0
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLine: { lineStyle: { color: '#ddd' } }
        },
        yAxis: {
          type: 'category',
          data: data.campaigns,
          axisLine: { lineStyle: { color: '#ddd' } }
        },
        series: [
          {
            name: 'Engagement Rate (%)',
            type: 'bar',
            data: data.engagement,
            itemStyle: {
              color: '#91cc75'
            }
          },
          {
            name: 'Conversion Rate (%)',
            type: 'bar',
            data: data.conversion,
            itemStyle: {
              color: '#fac858'
            }
          }
        ]
      });
    }
  }, [data]);

  if (loading) return <div>Loading campaign data...</div>;
  if (error) return <div>Error loading campaign data: {error}</div>;
  if (!data) return <div>No campaign data available</div>;

  return <ReactECharts option={options} style={{ height: '300px' }} />;
};

export default CampaignPerformanceChart;