import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { getCostoPromedio } from '../../services/dataservice';

const CostoPromedioChart = () => {
  const [options, setOptions] = useState({});
  
  useEffect(() => {
    const costoPromedio = getCostoPromedio();
    
    setOptions({
      title: {
        text: 'Porcentaje de Costo Promedio',
        left: 'center'
      },
      tooltip: {
        formatter: '{b}: {c}%'
      },
      series: [
        {
          name: 'Costo Promedio',
          type: 'gauge',
          detail: { formatter: '{value}%' },
          data: [{ value: costoPromedio.toFixed(2), name: 'Costo' }],
          min: 0,
          max: 100,
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 16
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}%',
            color: 'auto',
            fontSize: 30
          }
        }
      ]
    });
  }, []);

  return <ReactECharts option={options} style={{ height: '400px' }} />;
};

export default CostoPromedioChart;