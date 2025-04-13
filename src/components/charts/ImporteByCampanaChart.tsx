'use client';

import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { getImporteByCampana } from '../../services/dataService';
import { EChartsOption } from 'echarts';
import Select, { StylesConfig } from 'react-select';

interface CampanaOption {
  value: string;
  label: string;
}

const ImporteByCampanaChart: React.FC = () => {
  const [options, setOptions] = useState<EChartsOption>({});
  const [allCampanas, setAllCampanas] = useState<CampanaOption[]>([]);
  const [selectedCampanas, setSelectedCampanas] = useState<CampanaOption[]>([]);
  const [importeData, setImporteData] = useState<[string, number][]>([]);
  
  // Custom styles for the Select component
  const selectStyles: StylesConfig<CampanaOption, true> = {
    control: (base) => ({
      ...base,
      fontFamily: '"Segoe UI", Arial, sans-serif',
      fontSize: '14px',
    }),
    option: (base) => ({
      ...base,
      fontFamily: '"Segoe UI", Arial, sans-serif',
      fontSize: '14px',
      color: 'blue', // Cambia el color del texto
    }),
    placeholder: (base) => ({
      ...base,
      fontFamily: '"Segoe UI", Arial, sans-serif',
      fontSize: '14px',
    }),
    multiValue: (base) => ({
      ...base,
      fontFamily: '"Segoe UI", Arial, sans-serif',
    }),
    multiValueLabel: (base) => ({
      ...base,
      fontSize: '14px',
    }),
  };
  
  useEffect(() => {
    const importeByCampana = getImporteByCampana();
    const sortedData = Object.entries(importeByCampana)
      .sort((a, b) => b[1] - a[1]);
    
    setImporteData(sortedData);
    
    // Create options for the select dropdown
    const campanaOptions = sortedData.map(([campana]) => ({
      value: campana,
      label: campana
    }));
    
    setAllCampanas(campanaOptions);
    // Initially select top 10 campaigns or all if less than 10
    setSelectedCampanas(campanaOptions.slice(0, Math.min(10, campanaOptions.length)));
  }, []);

  useEffect(() => {
    if (selectedCampanas.length === 0 || importeData.length === 0) return;

    // Filter data based on selected campaigns
    const filteredData = importeData.filter(([campana]) => 
      selectedCampanas.some(selected => selected.value === campana)
    );
    
    const campanas = filteredData.map(item => item[0]);
    const importes = filteredData.map(item => item[1]);
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
          data: filteredData.map(([name, value]) => ({
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
  }, [selectedCampanas, importeData]);

  const handleCampanaChange = (selected: readonly CampanaOption[]) => {
    setSelectedCampanas([...selected]);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontFamily: '"Segoe UI", Arial, sans-serif' }}>
          Seleccionar Campañas:
        </label>
        <Select
          isMulti
          options={allCampanas}
          value={selectedCampanas}
          onChange={handleCampanaChange}
          placeholder="Seleccionar campañas..."
          className="basic-multi-select"
          classNamePrefix="select"
          styles={selectStyles}
        />
      </div>
      <ReactECharts option={options} style={{ height: '400px' }} />
    </div>
  );
};

export default ImporteByCampanaChart;