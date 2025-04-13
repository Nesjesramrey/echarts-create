export interface Deal {
  "Razon Social": string;
  "Agencia": string | number;
  "id_trato": number;
  "Campana": string;
  "Creador": string;
  "Acciones": string | null;
  "No de acciones": number | null;
  "Mes de acuerdo": string;
  "Mes ejecucion": string | null;
  "Mes facturacion": string | null;
  "Mes de cobro": string | null;
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
    "Acciones": null,
    "No de acciones": 0,
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
    "Acciones": "Tiktok",
    "No de acciones": 1,
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
    "Acciones": null,
    "No de acciones": NaN,
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
    "Acciones": null,
    "No de acciones": NaN,
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
    "Acciones": null,
    "No de acciones": NaN,
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
    "Acciones": null,
    "No de acciones": NaN,
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
    "Acciones": "Tiktok",
    "No de acciones": 1,
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
    "Acciones": null,
    "No de acciones": NaN,
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
    "Acciones": null,
    "No de acciones": NaN,
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
    "Acciones": null,
    "No de acciones": NaN,
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
    "Acciones": "Tiktok",
    "No de acciones": 0,
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
    "Acciones": "Tiktok",
    "No de acciones": 1,
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
    "Acciones": "Tiktok",
    "No de acciones": 1,
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
    "Creador": "Locofer",
    "Acciones": "Tiktok",
    "No de acciones": 1,
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "02/01/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 15000.0,
    "% Costo": 80.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "ITALKI HK LIMITED",
    "Agencia": NaN,
    "id_trato": 12.0,
    "Campana": "Italki",
    "Creador": "MayraNotes",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "02/01/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 19480.0,
    "% Costo": 73.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "BLANK SPACE JERAX",
    "Agencia": NaN,
    "id_trato": 13.0,
    "Campana": "Broxel",
    "Creador": "Pao Almontes/ finanzasconproposito",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "02/12/2024",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 175000.0,
    "% Costo": 80.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "IML INFLUENCE MEDIA LAB MEXICO",
    "Agencia": NaN,
    "id_trato": 14.0,
    "Campana": "Disney",
    "Creador": "Locofer",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "02/01/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": null,
    "Importe": 52800.0,
    "% Costo": 80.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "BLANK SPACE JERAX",
    "Agencia": NaN,
    "id_trato": 15.0,
    "Campana": "Broxel",
    "Creador": "Pao Almontes/ finanzasconproposito",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "01/12/2024",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": null,
    "Importe": 54800.0,
    "% Costo": 80.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  
   { "Razon Social": "BLANK SPACE JERAX",
    "Agencia": NaN,
    "id_trato": 16.0,
    "Campana": "Broxel",
    "Creador": "Carlos Estrada",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "0101/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 10000.0,
    "% Costo": 73.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "AMSTERDAM COMUNICACION",
    "Agencia": NaN,
    "id_trato": 17.0,
    "Campana": "Mifel",
    "Creador": "Pepe Nieves",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": "01/03/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 206625.0,
    "% Costo": 75.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "AMSTERDAM COMUNICACION",
    "Agencia": NaN,
    "id_trato": 17.0,
    "Campana": "Mifel",
    "Creador": "Pepe Nieves",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": "01/03/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": null,
    "Importe": 206625.0,
    "% Costo": 75.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "DEVIO",
    "Agencia": NaN,
    "id_trato": 18.0,
    "Campana": "XTB",
    "Creador": "Eduardo/AprendeInvierte",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "0101/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 50750.0,
    "% Costo": 73.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "DEVIO",
    "Agencia": NaN,
    "id_trato": 18.0,
    "Campana": "XTB",
    "Creador": "EmilioCovi",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "0101/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 20300.0,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "RFC GENERICO EXTRANJERO",
    "Agencia": NaN,
    "id_trato": 19.0,
    "Campana": "Esika",
    "Creador": "MiriamVaez",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "0112/2024",
    "Mes facturacion": "02/01/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 13635.23,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "RFC GENERICO EXTRANJERO",
    "Agencia": NaN,
    "id_trato": 20.0,
    "Campana": "Halara",
    "Creador": "MiriamVaez",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "0112/2024",
    "Mes facturacion": "02/01/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 18706.25,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "TALENTO STARTUP",
    "Agencia": NaN,
    "id_trato": 21.0,
    "Campana": "Degree",
    "Creador": "Georgie/leeme_entre_lineas",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": "01/02/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01null/2025",
    "Importe": 10000.0,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "TALENTO STARTUP",
    "Agencia": NaN,
    "id_trato": 21.0,
    "Campana": "Degree",
    "Creador": "Georgie/leeme_entre_lineas",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": "01/04/2025",
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 10000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "TALENTO STARTUP",
    "Agencia": NaN,
    "id_trato": 21.0,
    "Campana": "Degree",
    "Creador": "Georgie/leeme_entre_lineas",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": "01/05/2025",
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 10000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "TALENTO STARTUP",
    "Agencia": NaN,
    "id_trato": 21.0,
    "Campana": "Degree",
    "Creador": "Georgie/leeme_entre_lineas",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": "01/06/2025",
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 10000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "TALENTO STARTUP",
    "Agencia": NaN,
    "id_trato": 21.0,
    "Campana": "Degree",
    "Creador": "Georgie/leeme_entre_lineas",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": "01/-7/2025",
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 10000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "ERRE LAB",
    "Agencia": NaN,
    "id_trato": 22.0,
    "Campana": "Finamex",
    "Creador": "Pao Almontes/ finanzasconproposito",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "0101/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": null,
    "Importe": 140000.0,
    "% Costo": 80.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "ERRE LAB",
    "Agencia": NaN,
    "id_trato": 23.0,
    "Campana": "Finamex",
    "Creador": "Pao Almontes/ finanzasconproposito",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "0101/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/03/2025",
    "Importe": 45000.0,
    "% Costo": 80.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "ERRE LAB",
    "Agencia": NaN,
    "id_trato": 24.0,
    "Campana": "Finamex",
    "Creador": "Pao Almontes/ finanzasconproposito",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "0101/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/03/2025",
    "Importe": 25000.0,
    "% Costo": 80.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "Público en General",
    "Agencia": NaN,
    "id_trato": 25.0,
    "Campana": "MexWin",
    "Creador": "Locofer",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "0102/2025",
    "Mes facturacion": "01/02/2025",
    "Mes de cobro": "01/02/2025",
    "Importe": 8620.69,
    "% Costo": 80.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "RFC GENERICO EXTRANJERO",
    "Agencia": NaN,
    "id_trato": 26.0,
    "Campana": "LetyShops",
    "Creador": "MiriamVaez",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/12/2024",
    "Mes ejecucion": "0112/2024",
    "Mes facturacion": "02/01/2025",
    "Mes de cobro": "01/03/2025",
    "Importe": 19517.4,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "ITALKI HK LIMITED",
    "Agencia": NaN,
    "id_trato": 27.0,
    "Campana": "Italki",
    "Creador": "Julls",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "0103/2025",
    "Mes facturacion": "01/03/2025",
    "Mes de cobro": "01/03/2025",
    "Importe": 15584.0,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "DEVIO",
    "Agencia": NaN,
    "id_trato": 18.0,
    "Campana": "XTB",
    "Creador": "EmilioCovi",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "0102/2025",
    "Mes facturacion": "01/03/2025",
    "Mes de cobro": "01/03/2025",
    "Importe": 20100.0,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "DEVIO",
    "Agencia": NaN,
    "id_trato": 18.0,
    "Campana": "XTB",
    "Creador": "Eduardo/AprendeInvierte",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "0102/2025",
    "Mes facturacion": "01/03/2025",
    "Mes de cobro": "01/03/2025",
    "Importe": 50250.0,
    "% Costo": 73.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "PLATAFORMA INMOBILIARIA CIEN LADRILLOS SOCIEDAD ANONIMA PROMOTORA DE INVERSION DE CAPITAL VARIABLE, INSTITUCION DE FINANCIAMIENTO COLECTIVO",
    "Agencia": NaN,
    "id_trato": 28.0,
    "Campana": "100Ladrillos",
    "Creador": "Pao Almontes/ finanzasconproposito",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": "0103/2025",
    "Mes facturacion": "01/03/2025",
    "Mes de cobro": "01/03/2025",
    "Importe": 72000.0,
    "% Costo": 80.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "GLOBAL MARKETING PROVOCARTE",
    "Agencia": NaN,
    "id_trato": 29.0,
    "Campana": "Banco Azteca / Chedraui",
    "Creador": "Pao Almontes/ finanzasconproposito",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": "0103/2025",
    "Mes facturacion": "01/03/2025",
    "Mes de cobro": null,
    "Importe": 50000.0,
    "% Costo": 80.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "ARTOOL ECUADOR S.A.S.",
    "Agencia": NaN,
    "id_trato": 30.0,
    "Campana": "Exness",
    "Creador": "Georgie/leeme_entre_lineas",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": "0103/2025",
    "Mes facturacion": "01/03/2025",
    "Mes de cobro": null,
    "Importe": 30000.0,
    "% Costo": 70.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "RFC GENERICO EXTRANJERO",
    "Agencia": NaN,
    "id_trato": 31.0,
    "Campana": "QYC",
    "Creador": "MayraNotes",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": "0103/2025",
    "Mes facturacion": "01/03/2025",
    "Mes de cobro": "01/03/2025",
    "Importe": 6090.0,
    "% Costo": 73.0,
    "Ya se facturo": true,
    "Hay contrato": false
  },
  {
    "Razon Social": "DEVIO",
    "Agencia": NaN,
    "id_trato": 18.0,
    "Campana": "XTB",
    "Creador": "EmilioCovi",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "0103/2025",
    "Mes facturacion": "01/04/2025",
    "Mes de cobro": "01/04/2025",
    "Importe": 20100.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "DEVIO",
    "Agencia": NaN,
    "id_trato": 18.0,
    "Campana": "XTB",
    "Creador": "Eduardo/AprendeInvierte",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "0103/2025",
    "Mes facturacion": "01/04/2025",
    "Mes de cobro": "01/04/2025",
    "Importe": 50250.0,
    "% Costo": 73.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "Quantfury",
    "Agencia": NaN,
    "id_trato": 32.0,
    "Campana": "QuantFury",
    "Creador": "Pepe Nieves",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "0101/2025",
    "Mes facturacion": null,
    "Mes de cobro": "01/02/2025",
    "Importe": 160000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "Quantfury",
    "Agencia": NaN,
    "id_trato": 32.0,
    "Campana": "QuantFury",
    "Creador": "Pepe Nieves",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "01/01/2025",
    "Mes facturacion": null,
    "Mes de cobro": "01/03/2025",
    "Importe": 160000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "Quantfury",
    "Agencia": NaN,
    "id_trato": 32.0,
    "Campana": "QuantFury",
    "Creador": "Pepe Nieves",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "01/01/2025",
    "Mes facturacion": null,
    "Mes de cobro": "01/04/2025",
    "Importe": 160000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "DEVIO",
    "Agencia": NaN,
    "id_trato": 33.0,
    "Campana": "XTB",
    "Creador": "EmilioCovi",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/04/2025",
    "Mes ejecucion": "01/04/2025",
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 20100.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "DEVIO",
    "Agencia": NaN,
    "id_trato": 33.0,
    "Campana": "XTB",
    "Creador": "Eduardo/AprendeInvierte",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/04/2025",
    "Mes ejecucion": "01/04/2025",
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 50250.0,
    "% Costo": 73.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "DEVIO",
    "Agencia": NaN,
    "id_trato": 33.0,
    "Campana": "XTB",
    "Creador": "EmilioCovi",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/04/2025",
    "Mes ejecucion": "01/01/2025",
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 20100.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "DEVIO",
    "Agencia": NaN,
    "id_trato": 33.0,
    "Campana": "XTB",
    "Creador": "Eduardo/AprendeInvierte",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/04/2025",
    "Mes ejecucion": "01/01/2025",
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 50250.0,
    "% Costo": 73.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "DEVIO",
    "Agencia": NaN,
    "id_trato": 33.0,
    "Campana": "XTB",
    "Creador": "EmilioCovi",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/04/2025",
    "Mes ejecucion": "01/01/2025",
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 20100.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "DEVIO",
    "Agencia": NaN,
    "id_trato": 33.0,
    "Campana": "XTB",
    "Creador": "Eduardo/AprendeInvierte",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/04/2025",
    "Mes ejecucion": "01/01/2025",
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 50250.0,
    "% Costo": 73.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "Quantfury",
    "Agencia": NaN,
    "id_trato": 34.0,
    "Campana": "QuantFury",
    "Creador": "Pepe Nieves",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/04/2025",
    "Mes ejecucion": "01/04/2025",
    "Mes facturacion": null,
    "Mes de cobro": "01/04/2025",
    "Importe": 160000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "Quantfury",
    "Agencia": NaN,
    "id_trato": 34.0,
    "Campana": "QuantFury",
    "Creador": "Pepe Nieves",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/04/2025",
    "Mes ejecucion": "01/01/2025",
    "Mes facturacion": null,
    "Mes de cobro": "01/04/2025",
    "Importe": 160000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "Quantfury",
    "Agencia": NaN,
    "id_trato": 34.0,
    "Campana": "QuantFury",
    "Creador": "Pepe Nieves",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/04/2025",
    "Mes ejecucion": "01/01/2025",
    "Mes facturacion": null,
    "Mes de cobro": "01/04/2025",
    "Importe": 160000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "FxPro",
    "Agencia": NaN,
    "id_trato": 35.0,
    "Campana": "FxPro",
    "Creador": "AngelPinto",
    "Acciones": null,
    "No de acciones": 0,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "01/03/2025",
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 65000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "EFFECT AWESOME MARKETING",
    "Agencia": NaN,
    "id_trato": 36.0,
    "Campana": "Nu",
    "Creador": "Georgie/leeme_entre_lineas",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/01/2025",
    "Mes ejecucion": "01/03/2025",
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 220000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "Buk",
    "Agencia": NaN,
    "id_trato": 37.0,
    "Campana": "Buk",
    "Creador": "Georgie/leeme_entre_lineas",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": null,
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 33000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "BLANK SPACE JERAX",
    "Agencia": NaN,
    "id_trato": 38.0,
    "Campana": "Santander",
    "Creador": "Pao Almontes/ finanzasconproposito",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/02/2025",
    "Mes ejecucion": null,
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 50000.0,
    "% Costo": 80.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "Openbank",
    "Agencia": NaN,
    "id_trato": 39.0,
    "Campana": "Openbank",
    "Creador": "Pao Almontes/ finanzasconproposito",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/03/2025",
    "Mes ejecucion": null,
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 640000.0,
    "% Costo": 80.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "Huawei",
    "Agencia": NaN,
    "id_trato": 40.0,
    "Campana": "Huawei",
    "Creador": "MayraNotes",
    "Acciones": null,
    "No de acciones": NaN,
    "Mes de acuerdo": "01/03/2025",
    "Mes ejecucion": null,
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 24000.0,
    "% Costo": 73.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  {
    "Razon Social": "Airalo",
    "Agencia": NaN,
    "id_trato": 41.0,
    "Campana": "Airalo",
    "Creador": "MiriamVaez",
    "Acciones": null,
    "No de acciones": 0,
    "Mes de acuerdo": "01/03/2025",
    "Mes ejecucion": null,
    "Mes facturacion": null,
    "Mes de cobro": null,
    "Importe": 10000.0,
    "% Costo": 70.0,
    "Ya se facturo": false,
    "Hay contrato": false
  },
  

]

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
    const dateParts = deal["Mes facturacion"] ? deal["Mes facturacion"].split('/') : [];
    const monthYear = `${dateParts[1]}/${dateParts[2]}`;
    
    if (!result[monthYear]) {
      result[monthYear] = 0;
    }
    result[monthYear] += deal.Importe;
  });
  
  return result;
};

// Add the missing function
export const getTotalImporte = () => {
  return dealsData.reduce((total, deal) => total + deal.Importe, 0);
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
  
  // Return object with both values
  return { conContrato, sinContrato };
};

export const getAccionesTikTok = () => {
  return dealsData.filter(deal => 
    deal["Acciones"] === "Tiktok"
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



// Original mock data functions
export const fetchInfluencerRevenue = async (): Promise<RevenueData> => {
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