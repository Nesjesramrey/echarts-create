import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

interface RevenueChartProps {
  dateRange?: string;
}

interface RevenueData {
  months: string[];
  revenue: number[];
  projectedRevenue: number[];
}

const RevenueChart: React.FC<RevenueChartProps> = ({ dateRange = 'last30days' }) => {
  const [options, setOptions] = useState<any>({});
  
  useEffect(() => {
    // In a real app, you would fetch this data from an API based on dateRange
    const mockData: RevenueData = {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      revenue: [12000, 19000, 15000, 22000, 24000, 30000, 28000, 32000, 34000, 36000, 40000, 45000],
      projectedRevenue: [11000, 18000, 16000, 21000, 25000, 29000, 30000, 33000, 36000, 38000, 42000, 48000]
    };
    
    setOptions({
      tooltip: {
        trigger: 'axis',
        formatter: function(params: any[]) {
          const actual = params[0].data;
          const projected = params[1].data;
          return `${params[0].axisValue}<br/>
                 Actual: $${actual.toLocaleString()}<br/>
                 Projected: $${projected.toLocaleString()}<br/>
                 Difference: ${((actual-projected)/projected*100).toFixed(1)}%`;
        }
      },
      legend: {
        data: ['Actual Revenue', 'Projected Revenue'],
        bottom: 0
      },
      xAxis: {
        type: 'category',
        data: mockData.months,
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
          data: mockData.revenue,
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
          data: mockData.projectedRevenue,
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
  }, [dateRange]);

  return <ReactECharts option={options} style={{ height: '300px' }} />;
};

export default RevenueChart;