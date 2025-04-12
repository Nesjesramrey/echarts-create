import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { useChartData } from '../../hooks/useChartData';

interface InfluencerData {
  influencers: string[];
  followers: number[];
  engagement: number[];
  revenue: number[];
}

const InfluencerComparisonChart: React.FC = () => {
  const [options, setOptions] = useState<any>({});
  const { data, loading, error } = useChartData<InfluencerData>('/influencers');
  
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
          data: ['Followers (K)', 'Engagement Rate (%)', 'Revenue (K $)'],
          top: 0
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: data.influencers,
          axisLine: { lineStyle: { color: '#ddd' } }
        },
        yAxis: [
          {
            type: 'value',
            name: 'Followers (K)',
            position: 'left',
            axisLine: { lineStyle: { color: '#5470c6' } },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: 'Engagement (%)',
            position: 'right',
            offset: 80,
            axisLine: { lineStyle: { color: '#91cc75' } },
            axisLabel: {
              formatter: '{value}%'
            }
          },
          {
            type: 'value',
            name: 'Revenue (K $)',
            position: 'right',
            axisLine: { lineStyle: { color: '#ee6666' } },
            axisLabel: {
              formatter: '${value}K'
            }
          }
        ],
        series: [
          {
            name: 'Followers (K)',
            type: 'bar',
            data: data.followers.map(val => val / 1000),
            itemStyle: {
              color: '#5470c6'
            }
          },
          {
            name: 'Engagement Rate (%)',
            type: 'line',
            yAxisIndex: 1,
            data: data.engagement,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#91cc75'
            },
            lineStyle: {
              width: 3
            }
          },
          {
            name: 'Revenue (K $)',
            type: 'line',
            yAxisIndex: 2,
            data: data.revenue.map(val => val / 1000),
            symbol: 'diamond',
            symbolSize: 8,
            itemStyle: {
              color: '#ee6666'
            },
            lineStyle: {
              width: 3
            }
          }
        ]
      });
    }
  }, [data]);

  if (loading) return <div>Loading influencer data...</div>;
  if (error) return <div>Error loading influencer data: {error}</div>;
  if (!data) return <div>No influencer data available</div>;

  return <ReactECharts option={options} style={{ height: '400px' }} />;
};

export default InfluencerComparisonChart;