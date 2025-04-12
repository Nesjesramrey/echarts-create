import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { getContratoVsNoContrato } from '../../services/dataService';

const ContratoChart: React.FC = () => {
  const [options, setOptions] = useState<any>({});
  
  useEffect(() => {
    const { conContrato, sinContrato } = getContratoVsNoContrato();
    
    setOptions({
      title: {
        text: 'Importe Con Contrato vs Sin Contrato',
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
          name: 'Estado de Contrato',
          type: 'pie',
          radius: '50%',
          data: [
            { value: conContrato, name: 'Con Contrato', itemStyle: { color: '#5470c6' } },
            { value: sinContrato, name: 'Sin Contrato', itemStyle: { color: '#fac858' } }
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

export default ContratoChart;