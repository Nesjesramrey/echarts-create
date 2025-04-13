'use client';

import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { getImporteByCreador } from '../../services/dataService';
import { EChartsOption } from 'echarts';
import type { CallbackDataParams } from 'echarts/types/dist/shared';
import Select, { StylesConfig } from 'react-select';

interface CreadorOption {
  value: string;
  label: string;
}

const ImporteByCreadorChart: React.FC = () => {
  const [options, setOptions] = useState<EChartsOption>({});
  const [allCreadores, setAllCreadores] = useState<CreadorOption[]>([]);
  const [selectedCreadores, setSelectedCreadores] = useState<CreadorOption[]>([]);
  const [importeData, setImporteData] = useState<[string, number][]>([]);

  useEffect(() => {
    const importeByCreador = getImporteByCreador();
    console.log(importeByCreador);
    const sortedData = Object.entries(importeByCreador)
      .sort((a, b) => b[1] - a[1]);
    
    setImporteData(sortedData);
    
    // Create options for the select dropdown
    const creadorOptions = sortedData.map(([creador]) => ({
      value: creador,
      label: creador
    }));
    
    setAllCreadores(creadorOptions);
    // Initially select top 10 creators
    setSelectedCreadores(creadorOptions.slice(0, 10));
  }, []);

  useEffect(() => {
    if (selectedCreadores.length === 0 || importeData.length === 0) return;

    // Filter data based on selected creators
    const filteredData = importeData.filter(([creador]) => 
      selectedCreadores.some(selected => selected.value === creador)
    );

    const creadores = filteredData.map(item => item[0]);
    const importes = filteredData.map(item => item[1]);

    setOptions({
      title: {
        text: 'Creadores por Importe',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params: CallbackDataParams | CallbackDataParams[]) {
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
  }, [selectedCreadores, importeData]);

  const handleCreadorChange = (selected: readonly CreadorOption[]) => {
    setSelectedCreadores([...selected]);
  };

  // Custom styles for the Select component
  const selectStyles: StylesConfig<CreadorOption, true> = {
    control: (base) => ({
      ...base,
      fontFamily: '"Segoe UI", Arial, sans-serif',
      fontSize: '14px',
      color: 'red',
    }),
    option: (base) => ({
      ...base,
      fontFamily: '"Segoe UI", Arial, sans-serif',
      fontSize: '14px',
      color: 'blue',

    }),
    placeholder: (base) => ({
      ...base,
      fontFamily: '"Segoe UI", Arial, sans-serif',
      fontSize: '14px',
    }),
    singleValue: (base) => ({
      ...base,
      fontFamily: '"Segoe UI", Arial, sans-serif',
      fontSize: '14px',
      color: 'red',
    }),
    multiValue: (base) => ({
      ...base,
      fontFamily: '"Segoe UI", Arial, sans-serif',
      color: 'red',
    }),
    multiValueLabel: (base) => ({
      ...base,
      fontSize: '14px',
    }),
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontFamily: '"Segoe UI", Arial, sans-serif' }}>
          Seleccionar Creadores:
        </label>
        <Select
          isMulti
          options={allCreadores}
          value={selectedCreadores}
          onChange={handleCreadorChange}
          placeholder="Seleccionar creadores..."
          className="basic-multi-select"
          classNamePrefix="select"
          styles={selectStyles}
        />
      </div>
      <ReactECharts option={options} style={{ height: '400px' }} />
    </div>
  );
};

export default ImporteByCreadorChart;