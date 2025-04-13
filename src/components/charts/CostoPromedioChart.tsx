'use client';

import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { getCostoPromedio } from '../../services/dataService';
import { EChartsOption } from 'echarts';

const CostoPromedioChart: React.FC = () => {
  const [options, setOptions] = useState<EChartsOption>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const costoPromedio = getCostoPromedio();
      // Ensure the value is valid and within reasonable range
      const validCosto = isNaN(costoPromedio) ? 0 :
        costoPromedio > 100 ? 100 :
          costoPromedio < 0 ? 0 : costoPromedio;

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
            data: [{
              // Convert to number instead of string
              value: Number(validCosto.toFixed(2)),
              name: 'Costo'
            }],
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
                color: 'inherit'
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
    } catch (error) {
      console.error("Error loading cost average data:", error);
      // Set a fallback option if there's an error
      setOptions({
        title: {
          text: 'Porcentaje de Costo Promedio',
          left: 'center',
          subtext: 'Error loading data'
        }
      });
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading cost data...</div>;
  }

  return <ReactECharts option={options} style={{ height: '400px' }} />;
};

export default CostoPromedioChart;