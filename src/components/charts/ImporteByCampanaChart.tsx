'use client';

import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { getImporteByCampana } from '../../services/dataService';
import { EChartsOption } from 'echarts';

const ImporteByCampanaChart: React.FC = () => {
  const [options, setOptions] = useState<EChartsOption>({});
  
  useEffect(() => {
    const importeByCampana = getImporteByCampana();
    const sortedData = Object.entries(importeByCampana)
      .sort((a, b) => b[1] - a[1]);
    
    const campanas = sortedData.map(item => item[0]);
    const importes = sortedData.map(item => item[1]);
    console.log(campanas);
    console.log(importes);
    setOptions({
      title: {
        text: 'Distribución de Importe por Campaña',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: ${c} ({d}%)'
      },
      series: [
        {
          name: 'Importe por Campaña',
          type: 'pie',
          radius: '60%',
          data: sortedData.map(([name, value]) => ({
            name,
            value
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
  }, []);

  return <ReactECharts option={options} style={{ height: '400px' }} />;
};

export default ImporteByCampanaChart;