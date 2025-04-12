import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { getImporteByMonth } from '../../services/dataservice';

const ImporteByMonthChart = () => {
  const [options, setOptions] = useState({});
  
  useEffect(() => {
    const importeByMonth = getImporteByMonth();
    
    // Sort by date
    const sortedData = Object.entries(importeByMonth)
      .sort((a, b) => {
        const [monthA, yearA] = a[0].split('/');
        const [monthB, yearB] = b[0].split('/');
        
        if (yearA !== yearB) return parseInt(yearA) - parseInt(yearB);
        return parseInt(monthA) - parseInt(monthB);
      });
    
    const months = sortedData.map(item => item[0]);
    const importes = sortedData.map(item => item[1]);
    
    setOptions({
      title: {
        text: 'Importe por Mes de Facturación',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function(params) {
          return `${params[0].name}: $${params[0].value.toLocaleString()}`;
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