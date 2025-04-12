export interface Deal {
  "Razon Social": string;
  "Agencia": string | number;
  "id_trato": number;
  "Campana": string;
  "Creador": string;
  "Acciones": number | null;
  "No de acciones": string | null;
  "Mes de acuerdo": string;
  "Mes ejecucion": string;
  "Mes facturacion": string;
  "Mes de cobro": string;
  "Importe": number;
  "% Costo": number;
  "Ya se facturo": boolean;
  "Hay contrato": boolean;
}

export const dealsData: Deal[] = [
  {
    "Razon Social": "JORGE ALBERTO VEGA TORRES",
    "Agencia": NaN,
    "id_trato": 1.0,
    "Campana": "Monte de Piedad",
    "Creador": "LuisMI",
    "Acciones": NaN,
    "No de acciones": "0",
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "02/12/2024",
    "Mes facturacion": "02/01/2025",
    "Mes de cobro": "02/01/2025",
    "Importe": 534000.0,
    "% Costo": 67.98,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "RFC GENERICO EXTRANJERO",
    "Agencia": NaN,
    "id_trato": 2.0,
    "Campana": "Manuel Turizo",
    "Creador": "Melissa",
    "Acciones": 1.0,
    "No de acciones": "TikTok",
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "02/12/2024",
    "Mes facturacion": "02/01/2025",
    "Mes de cobro": "02/01/2025",
    "Importe": 23201.46,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "DOSSIER",
    "Agencia": NaN,
    "id_trato": 3.0,
    "Campana": "Dossier",
    "Creador": "MiriamVaez",
    "Acciones": NaN,
    "No de acciones": "0",
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "02/12/2024",
    "Mes facturacion": "02/01/2025",
    "Mes de cobro": "02/12/2024",
    "Importe": 13283.17,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "ITALKI HK LIMITED",
    "Agencia": "Italki",
    "id_trato": 4.0,
    "Campana": "Italki",
    "Creador": "EmilioPego",
    "Acciones": NaN,
    "No de acciones": "0",
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "02/01/2025",
    "Mes facturacion": "02/01/2025",
    "Mes de cobro": "02/01/2025",
    "Importe": 29220.0,
    "% Costo": 7000.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "ERRE LAB",
    "Agencia": NaN,
    "id_trato": 5.0,
    "Campana": "Finamex",
    "Creador": "Pao Almontes/ finanzasconproposito",
    "Acciones": NaN,
    "No de acciones": "0",
    "Mes de acuerdo": "01/11/2024",
    "Mes ejecucion": "02/11/2024",
    "Mes facturacion": "02/01/2025",
    "Mes de cobro": "01/03/2025",
    "Importe": 65000.0,
    "% Costo": 80.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "SAMY ROAD INC",
    "Agencia": NaN,
    "id_trato": 6.0,
    "Campana": "Novotel",
    "Creador": "Sozen",
    "Acciones": NaN,
    "No de acciones": "0",
    "Mes de acuerdo": "01/11/2024",
    "Mes ejecucion": "02/12/2024",
    "Mes facturacion": "02/01/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 118955.0,
    "% Costo": 50.44,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "COMUNIDAD DE PRESTAMOS, SAPI DE CV, INSTITUCION DE FINANCIAMIENTO COLECTIVO",
    "Agencia": NaN,
    "id_trato": 7.0,
    "Campana": "YoTePresto",
    "Creador": "Georgie/leeme_entre_lineas",
    "Acciones": 1.0,
    "No de acciones": "TikTok",
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "02/01/2025",
    "Mes facturacion": "02/01/2025",
    "Mes de cobro": "02/01/2025",
    "Importe": 20000.0,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "BLANK SPACE JERAX",
    "Agencia": NaN,
    "id_trato": 8.0,
    "Campana": "Broxel",
    "Creador": "Pao Almontes/ finanzasconproposito",
    "Acciones": NaN,
    "No de acciones": "0",
    "Mes de acuerdo": "01/11/2024",
    "Mes ejecucion": "02/11/2024",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 55000.0,
    "% Costo": 80.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "EFFECT AWESOME MARKETING",
    "Agencia": NaN,
    "id_trato": 9.0,
    "Campana": "Nu",
    "Creador": "Georgie/leeme_entre_lineas",
    "Acciones": NaN,
    "No de acciones": "0",
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "02/01/2025",
    "Mes facturacion": "02/01/2025",
    "Mes de cobro": "01/03/2025",
    "Importe": 40000.0,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "GRUPO NURICAAA",
    "Agencia": NaN,
    "id_trato": 10.0,
    "Campana": "Edenred",
    "Creador": "Georgie/leeme_entre_lineas",
    "Acciones": NaN,
    "No de acciones": "0",
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "02/01/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 18000.0,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "FARMACIAS DE SIMILARES",
    "Agencia": NaN,
    "id_trato": 11.0,
    "Campana": "Farmacias Similares",
    "Creador": "Hans",
    "Acciones": 1.0,
    "No de acciones": "TikTok",
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "02/01/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 35000.0,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "FARMACIAS DE SIMILARES",
    "Agencia": NaN,
    "id_trato": 11.0,
    "Campana": "Farmacias Similares",
    "Creador": "Gus",
    "Acciones": 1.0,
    "No de acciones": "TikTok",
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "02/01/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 25000.0,
    "% Costo": 73.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "FARMACIAS DE SIMILARES",
    "Agencia": NaN,
    "id_trato": 11.0,
    "Campana": "Farmacias Similares",
    "Creador": "Georgie/leeme_entre_lineas",
    "Acciones": 1.0,
    "No de acciones": "TikTok",
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "02/01/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 25000.0,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  }
];

// Helper functions for data processing
export const getImporteByCreador = () => {
  const result: Record<string, number> = {};
  
  dealsData.forEach(deal => {
    const creador = deal.Creador;
    if (!result[creador]) {
      result[creador] = 0;
    }
    result[creador] += deal.Importe;
  });
  
  return result;
};

export const getImporteByCampana = () => {
  const result: Record<string, number> = {};
  
  dealsData.forEach(deal => {
    const campana = deal.Campana;
    if (!result[campana]) {
      result[campana] = 0;
    }
    result[campana] += deal.Importe;
  });
  
  return result;
};

export const getImporteByMonth = () => {
  const result: Record<string, number> = {};
  
  dealsData.forEach(deal => {
    // Extract month and year from "Mes de facturacion"
    const dateParts = deal["Mes facturacion"].split('/');
    const monthYear = `${dateParts[1]}/${dateParts[2]}`;
    
    if (!result[monthYear]) {
      result[monthYear] = 0;
    }
    result[monthYear] += deal.Importe;
  });
  
  return result;
};

export const getCostoPromedio = () => {
  let totalCosto = 0;
  let count = 0;
  
  dealsData.forEach(deal => {
    if (!isNaN(deal["% Costo"]) && deal["% Costo"] < 1000) { // Filter out outliers
      totalCosto += deal["% Costo"];
      count++;
    }
  });
  
  return totalCosto / count;
};

export const getFacturadoVsNoFacturado = () => {
  let facturado = 0;
  let noFacturado = 0;
  
  dealsData.forEach(deal => {
    if (deal["Ya se facturo"]) {
      facturado += deal.Importe;
    } else {
      noFacturado += deal.Importe;
    }
  });
  
  return { facturado, noFacturado };
};

export const getContratoVsNoContrato = () => {
  let conContrato = 0;
  let sinContrato = 0;
  
  dealsData.forEach(deal => {
    if (deal["Hay contrato"]) {
      conContrato += deal.Importe;
    } else {
      sinContrato += deal.Importe;
    }
  });
  
  return { conContrato, sinContrato };
};

export const getAccionesTikTok = () => {
  return dealsData.filter(deal => 
    deal["No de acciones"] === "TikTok"
  ).length;
};

// Remove unused imports and variables
// import axios from "axios";
// const BASE_URL = "https://api.example.com";

// Define types for the mock data
interface RevenueData {
  months: string[];
  revenue: number[];
}

interface CampaignData {
  campaigns: string[];
  engagement: number[];
  conversion: number[];
}

interface InfluencerData {
  influencers: string[];
  followers: number[];
  engagement: number[];
  revenue: number[];
}

// Original mock data functions
export const fetchInfluencerRevenue = async (_influencerId?: string, _timeRange?: string): Promise<RevenueData> => {
  try {
    // In a real app, this would be a real API call
    // const response = await axios.get(`${BASE_URL}/influencers/${influencerId}/revenue?timeRange=${timeRange}`);
    // return response.data;

    // For now, return mock data
    return {
      months: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
      revenue: [
        12000, 19000, 15000, 22000, 24000, 30000, 
        28000, 32000, 34000, 36000, 40000, 45000,
      ],
    };
  } catch (error) {
    console.error("Error fetching revenue data:", error);
    throw error;
  }
};

// Rest of your dataService code...