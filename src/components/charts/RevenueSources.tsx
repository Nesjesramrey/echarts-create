import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

interface RevenueSource {
  value: number;
  name: string;
}

const RevenueSources: React.FC = () => {
  const [options, setOptions] = useState<any>({});
  
  useEffect(() => {
    // Mock data for revenue sources
    const mockData: RevenueSource[] = [
      { value: 40, name: 'Sponsored Posts' },
      { value: 25, name: 'Affiliate Marketing' },
      { value: 15, name: 'Product Sales' },
      { value: 12, name: 'Brand Partnerships' },
      { value: 8, name: 'Paid Subscriptions' }
    ];
    
    setOptions({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
        data: mockData.map(item => item.name)
      },
      series: [
        {
          name: 'Revenue Sources',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: mockData
        }
      ]
    });
  }, []);

  return <ReactECharts option={options} style={{ height: '300px' }} />;
};

export default RevenueSources;