'use client';

import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { getImporteByMonth } from '../../services/dataService';
import { EChartsOption } from 'echarts';
import type { CallbackDataParams } from 'echarts/types/dist/shared';

const ImporteByMonthChart: React.FC = () => {
  const [options, setOptions] = useState<EChartsOption>({});
  
  useEffect(() => {
    const importeByMonth = getImporteByMonth();
    
    // Remove the undefined key if it exists
    if ('undefined' in importeByMonth) {
      delete importeByMonth['undefined'];
    }
    
    // Filter out any problematic keys and sort by date
    const sortedData = Object.entries(importeByMonth)
      .filter(([key]) => {
        // Ensure key is valid and has the expected format
        if (!key || key === 'undefined') return false;
        
        const parts = key.split('/');
        if (parts.length !== 2) return false;
        
        const [month, year] = parts;
        return !isNaN(parseInt(month)) && !isNaN(parseInt(year));
      })
      .sort((a, b) => {
        const [monthA, yearA] = a[0].split('/');
        const [monthB, yearB] = b[0].split('/');
        
        const numYearA = parseInt(yearA);
        const numYearB = parseInt(yearB);
        const numMonthA = parseInt(monthA);
        const numMonthB = parseInt(monthB);
        
        if (numYearA !== numYearB) return numYearA - numYearB;
        return numMonthA - numMonthB;
      });
    
    
    // Format month labels to be more readable
    const months = sortedData.map(item => {
      const [month, year] = item[0].split('/');
      const monthNames = [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ];
      const monthIndex = parseInt(month) - 1;
      return `${monthNames[monthIndex]} ${year}`;
    });
    
    const importes = sortedData.map(item => item[1]);
    
    setOptions({
      title: {
        text: 'Importe por Mes de Facturación',
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
        data: months,
        axisLabel: {
          rotate: 45
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
          type: 'line',
          data: importes,
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

export default ImporteByMonthChart;