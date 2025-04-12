'use client';

import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { getImporteByCreador } from '../../services/dataService';
import { EChartsOption } from 'echarts';
import type { CallbackDataParams } from 'echarts/types/dist/shared';

const ImporteByCreadorChart: React.FC = () => {
  const [options, setOptions] = useState<EChartsOption>({});
  
  useEffect(() => {
    const importeByCreador = getImporteByCreador();
    const sortedData = Object.entries(importeByCreador)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10); // Top 10 creators
    
    const creadores = sortedData.map(item => item[0]);
    const importes = sortedData.map(item => item[1]);
    
    setOptions({
      title: {
        text: 'Top 10 Creadores por Importe',
        left: 'center'
      },
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
      xAxis: {
        type: 'category',
        data: creadores,
        axisLabel: {
          rotate: 45,
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '${value}'
        }
      },
      series: [
        {
          name: 'Importe',
          type: 'bar',
          data: importes,
          itemStyle: {
            color: '#5470c6'
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
  }, []);

  return <ReactECharts option={options} style={{ height: '400px' }} />;
};

export default ImporteByCreadorChart;