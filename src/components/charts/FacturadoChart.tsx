'use client';

import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { getFacturadoVsNoFacturado } from '../../services/dataService';
import { EChartsOption } from 'echarts';

const FacturadoChart: React.FC = () => {
  const [options, setOptions] = useState<EChartsOption>({});
  
  useEffect(() => {
    const { facturado, noFacturado } = getFacturadoVsNoFacturado();
    
    setOptions({
      title: {
        text: 'Importe Facturado vs No Facturado',
        left: 'center'
      },
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
          name: 'Estado de Facturación',
          type: 'pie',
          radius: '50%',
          data: [
            { value: facturado, name: 'Facturado', itemStyle: { color: '#5470c6' } },
            { value: noFacturado, name: 'No Facturado', itemStyle: { color: '#91cc75' } }
          ],
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
  }, []);

  return <ReactECharts option={options} style={{ height: '400px' }} />;
};

export default FacturadoChart;