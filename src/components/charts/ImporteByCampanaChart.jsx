import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { getImporteByCampana } from '../../services/dataservice';

const ImporteByCampanaChart = () => {
  const [options, setOptions] = useState({});
  
  useEffect(() => {
    const importeByCampana = getImporteByCampana();
    const sortedData = Object.entries(importeByCampana)
      .sort((a, b) => b[1] - a[1]);
    
    // Take top 5 and group the rest as "Others"
    const top5 = sortedData.slice(0, 5);
    const others = sortedData.slice(5).reduce((sum, current) => sum + current[1], 0);
    
    const pieData = [
      ...top5.map(([name, value]) => ({ name, value })),
      { name: 'Otros', value: others }
    ];
    
    setOptions({
      title: {
        text: 'Distribución de Importe por Campaña',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: ${c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
        type: 'scroll'
      },
      series: [
        {
          name: 'Importe por Campaña',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false
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
          data: pieData
        }
      ]
    });
  }, []);

  return <ReactECharts option={options} style={{ height: '400px' }} />;
};

export default ImporteByCampanaChart;