'use client';

import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { useChartData } from '../../hooks/useChartData';
import { EChartsOption } from 'echarts';

interface RevenueSourcesData {
  sources: string[];
  values: number[];
}

const RevenueSources: React.FC = () => {
  const [options, setOptions] = useState<EChartsOption>({});
  const { data, loading, error } = useChartData<RevenueSourcesData>('/revenue-sources');
  
  useEffect(() => {
    if (data) {
      setOptions({
        tooltip: {
          trigger: 'item',
          formatter: '{b}: ${c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 'center'
        },
        series: [
          {
            name: 'Revenue Sources',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: data.sources.map((source, index) => ({
              name: source,
              value: data.values[index]
            })),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    }
  }, [data]);

  if (loading) return <div>Loading revenue sources data...</div>;
  if (error) return <div>Error loading revenue sources data: {error}</div>;
  if (!data) return <div>No revenue sources data available</div>;

  return <ReactECharts option={options} style={{ height: '300px' }} />;
};

export default RevenueSources;