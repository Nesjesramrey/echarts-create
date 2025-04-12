'use client';

import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { useChartData } from '../../hooks/useChartData';
import { EChartsOption } from 'echarts';
import type { CallbackDataParams } from 'echarts/types/dist/shared';

interface RevenueData {
  dates: string[];
  revenue: number[];
}

interface RevenueChartProps {
  dateRange: string;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ dateRange }) => {
  const [options, setOptions] = useState<EChartsOption>({});
  const { data, loading, error } = useChartData<RevenueData>(`/revenue?range=${dateRange}`);
  console.log(loading, error)
  
  useEffect(() => {
    if (data) {
      setOptions({
        tooltip: {
          trigger: 'axis',
          formatter: function(params: CallbackDataParams | CallbackDataParams[]) {
            if (Array.isArray(params) && params.length > 0 && params[0]) {
              const value = params[0].value;
              if (typeof value === 'number') {
                return `${params[0].name}: $${value.toLocaleString()}`;
              }
              return `${params[0].name}: ${value}`;
            }
            return '';
          }
        },
        legend: {
          data: ['Actual Revenue', 'Projected Revenue'],
          bottom: 0
        },
        xAxis: {
          type: 'category',
          data: data.dates,
          axisLine: { lineStyle: { color: '#ddd' } }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '${value}'
          },
          axisLine: { lineStyle: { color: '#ddd' } }
        },
        series: [
          {
            name: 'Actual Revenue',
            data: data.revenue,
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 4,
              color: '#5470c6'
            },
            itemStyle: {
              color: '#5470c6'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(84, 112, 198, 0.5)' },
                  { offset: 1, color: 'rgba(84, 112, 198, 0.1)' }
                ]
              }
            }
          },
          {
            name: 'Projected Revenue',
            data: data.revenue.map(val => val * 1.1), // Projected revenue as 10% increase
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 3,
              type: 'dashed',
              color: '#91cc75'
            },
            itemStyle: {
              color: '#91cc75'
            }
          }
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true
        }
      });
    }
  }, [data, dateRange]);

    return <ReactECharts option={options} style={{ height: '300px' }} />;
};

export default RevenueChart;