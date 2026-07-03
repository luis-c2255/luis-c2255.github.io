export interface ProjectLink {
  label: {
    en: string;
    es: string;
  };
  url: string;
  type: 'github' | 'demo' | 'documentation' | 'other';
}

export interface ChartData {
  type: 'bar' | 'line' | 'pie' | 'doughnut' | 'bubble' | 'radar';
  title: {
    en: string;
    es: string;
  };
  data: {
    labels: {
      en: string[];
      es: string[];
    };
    datasets: {
      label: string;
      data: number[] | { x: number; y: number; r?: number }[];
      backgroundColor?: string | string[];
      borderColor?: string | string[];
    }[];
  };
}

export interface Project {
  id: string;
  title: {
    en: string;
    es: string;
  };
  shortDescription: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  technologies: string[];
  features: {
    en: string[];
    es: string[];
  };
  image: string; // Main thumbnail image
  gallery?: string[]; // Additional project images
  links?: ProjectLink[]; // External links
  charts?: ChartData[]; // Data visualizations
  category: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-analysis',
    title: {
      en: 'Retail Sector Analysis Dashboard',
      es: 'Panel de análisis de sector minorista',
    },
    shortDescription: {
      en: 'An interactive dashboard created with Streamlit for analyzing customers and sales in the retail sector.',
      es: 'Un panel de control interactivo creado con Streamlit para el análisis de clientes y ventas en el sector minorista.',
    },
    description: {
      en: 'This project showcases advanced techniques such as RFM segmentation, sales performance, and geographic breakdowns—designed to provide an at-a-glance view of customer value and business trends.',
      es: 'Este proyecto demuestra técnicas avanzadas como segmentación RFM, rendimiento de ventas y desgloses geográficos— diseñado para explorar el valor de los clientes y las tendencias comerciales de un solo vistazo.',
    },
    technologies: ['Python', 'Pandas', 'NumPy', 'Plotly'],
    features: {
      en: [
        'Global KPIs: revenue, profit, margin, number of orders, average order value, and active customers - all of which can be filtered.',
        'RFM customer segmentation: automatic scoring (recency, frequency, monetary value) that classifies customers into VIP, at-risk, new, inactive, and regular segments, with a searchable customer explorer by segment where you can search and download data.',
        'Sales and Product Performance: monthly revenue and profit trends, a tree map color-coded by profit per category and subcategory, and a ranking of the top 10 best-selling products.',
        'Geographic View: a choropleth map of the U.S. and the 10 states with the highest revenue, with automatic normalization of city names (e.g. Chicago, Houston) by state.',
      ],
      es: [
        'KPI globales: ingresos, beneficios, margen, número de pedidos, valor medio por pedido y clientes activos, todos ellos adaptables a los filtros.',
        'Segmentación de clientes RFM: puntuación automática (reciencia, frecuencia, valor monetario) que clasifica a los clientes en segmentos VIP, en riesgo, nuevos, inactivos y habituales, con un explorador de clientes por segmento en el que se pueden realizar búsquedas y descargar datos.',
        'Rendimiento de ventas y productos: tendencia mensual de ingresos y beneficios, un mapa de árbol con colores según los beneficios por categoría y subcategoría, y una clasificación de los 10 productos más vendidos.',
        'Vista geográfica: un mapa coroplético de EE. UU. y los 10 estados con mayores ingresos, con normalización automática de los nombres de las ciudades (p. ej., Chicago, Houston) según su estado.',
      ],
    },
    image: '/images/dash.svg',
    gallery: [
      '/images/12.png',
      '/images/13.png',
      '/images/14.png',
    ],
    links: [
      {
        label: {
          en: 'View on GitHub',
          es: 'Ver en GitHub',
        },
        url: 'https://github.com/luis-c2255/new_customers/tree/main',
        type: 'github',
      },
      {
        label: {
          en: 'Live Demo',
          es: 'Demo en Vivo',
        },
        url: 'https://newcustomers.streamlit.app/',
        type: 'demo',
      },
      {
        label: {
          en: 'Documentation',
          es: 'Documentación',
        },
        url: 'https://github.com/luis-c2255/new_customers/blob/main/README.md',
        type: 'documentation',
      },
    ],
    charts: [
      {
        type: 'bar',
        title: {
          en: 'Distribution of Customer Value',
          es: 'Distribucion del Valor de Clientes',
        },
        data: {
          labels: {
            en: ['Sleeping Customers', 'VIP Customers', 'New Customers', 'Regular Customers', 'At Risk of Churn'],
            es: ['Clientes Dormidos', 'Campeones (VIP)', 'Nuevos Clientes', 'Clientes Regulares', 'En Riesgo de Abandono'],
          },
          datasets: [
            {
              label: 'Customers',
              data: [1397, 947, 743, 717, 476],
              backgroundColor: [
                'rgba(6, 182, 212, 0.8)',
                'rgba(6, 169, 198, 0.4)',
                'rgba(6, 135, 157, 0.6)',
                'rgba(6, 182, 212, 0.8)',
                'rgba(34, 211, 238, 0.8)',
              ],
              borderColor: [
                'rgba(6, 182, 212, 0.8)',
                'rgba(34, 211, 238, 0.2)',
                'rgba(103, 232, 249, 1)',
                'rgba(165, 243, 252, 1)',
                'rgba(215, 250, 254, 1)'
              ]
            },
          ],
        },
      },
      {
        type: 'pie',
        title: {
          en: 'Customer Gender Distribution',
          es: 'Distribución de clientes por genero',
        },
        data: {
          labels: {
            en: ['Female', 'Male', 'Other'],
            es: ['Masculino', 'Femenino', 'Otro'],
          },
          datasets: [
            {
              label: 'Genero',
              data: [1432, 2533, 315],
              backgroundColor: [
                'rgba(6, 182, 212, 0.1)',
                'rgba(6, 169, 198, 0.4)',
                'rgba(6, 135, 157, 0.6)'
              ],
              borderColor: [
                'rgba(103, 232, 249, 1)',
                'rgba(165, 243, 252, 1)',
                'rgba(215, 250, 254, 1)'
              ],
            },
          ],
        },
      },
      {
        type: 'line',
        title: {
          en: 'Historical Sales Trends',
          es: 'Evolucion Historica de Ventas',
        },
        data: {
          labels: {
            en: ['Jan 2022', 'Apr 2022', 'Jul 2022', 'Oct 2022', 'Jan 2023', 'Apr 2023', 'Jul 2023', 'Oct 2023', 'Jan 2024'],
            es: ['Ene 2022', 'Abr 2022', 'Jul 2022', 'Oct 2022', 'Ene 2023', 'Abr 2023', 'Jul 2023', 'Oct 2023', 'Ene 2024'],
          },
          datasets: [
            {
              label: 'USD',
              data: [23.4698, 21.598, 22.1181, 20.0101, 12.8421, 22.1513, 17.4998, 20.5180],
              backgroundColor: [
                'rgba(6, 182, 212, 0.8)'
              ],
              borderColor: [
                'rgba(6, 169, 198, 0.4)'
              ],
            },
          ],
        },
      },
    ],
    category: 'Data Analysis',
  },

  {
    id: 'customer_segmentation',
    title: {
      en: 'Demand, Inventory, and Pricing Management Dashboard',
      es: 'Análisis de gestión de la demanda, inventario y los precios',
    },
    shortDescription: {
      en: 'Demand forecasting, inventory optimization, and dynamic pricing strategy for a multi-store retail chain.',
      es: 'Pronostico de demanda, optimizacion de inventario y estrategia de precios dinamicos para una cadena minorista multi-tienda.',
    },
    description: {
      en: 'A Streamlit dashboard covering three use cases related to retail analytics: demand forecasting using time series analysis, inventory optimization, and dynamic pricing, based on daily sales and inventory data at the store and product levels.',
      es: 'Un panel de Streamlit que abarca tres casos de uso relacionados con el análisis del sector minorista: previsión de la demanda mediante series temporales, optimización de existencias y fijación dinámica de precios, basado en datos diarios de ventas y existencias a nivel de tienda y de producto.',
    },
    technologies: ['Python', 'Plotly', 'Pandas', 'Statsmodel'],
    features: {
      en: [
        'Demand Forecasting: An independent Holt-Winters exponential smoothing model, trained solely on actual historical data (not on the “reported forecasts” column), with a backtest covering the last 30 days and a configurable forward forecast (7 to 60 days) with an approximate confidence interval.',
        'Inventory Optimization: Inventory turnover by category and a detailed graph showing inventory levels over time compared to reorder point and safety stock lines.',
        'Dynamic Pricing: A log-log regression of price elasticity of demand (taking into account discounts and holidays/promotions), including the coefficient, the p-value, R², and an interpretation in plain language.',
      ],
      es: [
        'Previsión de la demanda: Un modelo de suavizado exponencial de Holt-Winters independiente, entrenado únicamente con datos históricos reales (no con la columna de previsiones declaradas), con una prueba retrospectiva de los últimos 30 días y una previsión prospectiva configurable (de 7 a 60 días) con un intervalo de confianza aproximado.',
        'Optimización de inventario: Rotación de inventario por categoría y un gráfico detallado que muestra el nivel de inventario a lo largo del tiempo en comparación con las líneas del punto de reposición y el stock de seguridad.',
        'Fijación dinámica de precios: Una regresión log-log de la elasticidad de la demanda respecto al precio (teniendo en cuenta los descuentos y las fiestas/promociones), con el coeficiente, el valor p, el R² y una interpretación en lenguaje sencillo.',
      ],
    },
    image: '/images/inventory.svg',
    gallery: [
      '/images/inve.svg',
      '/images/model.svg',
      '/images/precio.svg',
    ],
    links: [
      {
        label: { en: 'GitHub', es: 'GitHub' },
        url: 'https://github.com/luis-c2255/Demand-inventory',
        type: 'github',
      },
      {
        label: { en: 'Live Demo', es: 'Demo en Vivo' },
        url: 'https://demand-inventory-pricing.streamlit.app/',
        type: 'demo',
      },
      {
        label: { en: 'Documentation', es: 'Documentación' },
        url: 'https://github.com/luis-c2255/Demand-inventory/blob/main/README.md',
        type: 'documentation',
      },
    ],
    charts: [
      {
        type: 'doughnut',
        title: { en: 'Distribution of Inventory Statuses', es: 'Distribución de Estados de Inventario' },
        data: {
          labels: { en: ['Stockout Risk', 'Optimal', 'Reorder Soon', 'Overstock'], es: ['Riesgo de agotamiento de existencias', 'Óptimo', 'Reponer pronto', 'Exceso de existencias'] },
          datasets: [{
            label: 'States',
            data: [34, 31, 28, 7],
            backgroundColor: [
              'rgba(6, 169, 198, 0.4)',
              'rgba(6, 135, 157, 0.6)',
              'rgba(6, 182, 212, 0.8)',
              'rgba(34, 211, 238, 0.8)',
            ],
            borderColor: [
              'rgba(34, 211, 238, 1)',
              'rgba(103, 232, 249, 1)',
              'rgba(165, 243, 252, 1)',
              'rgba(215, 250, 254, 1)',
            ],
          }],
        },
      },
      {
        type: 'line',
        title: { en: 'Statistical Model: Exponential Smoothing (Holt-Winters)', es: 'Modelo Estadistico: Suavizado Exponencial (Holt-Winters)' },
        data: {
          labels: {
            en: ['Oct 8', 'Oct 22', 'Nov 5', 'Nov 19', 'Dec 3', 'Dec 17', 'Dec 31'],
            es: ['Oct 8', 'Oct 22', 'Nov 5', 'Nov 19', 'Dic 3', 'Dic 17', 'Dic 31'],
          },
          datasets: [{
            label: 'Unidades',
            data: [24, 152, 109.22, 21, 105, 122, 55, 26],
            backgroundColor: [
              'rgba(6, 182, 212, 1)'
            ],
            borderColor: [
              'rgba(180, 239, 247, 0.4)'
            ],
          }],
        },
      },
      {
        type: 'bar',
        title: { en: 'Inventory Turnover by Category', es: 'Rotacion de Inventario por Categoria' },
        data: {
          labels: {
            en: ['Furniture', 'Clothing', 'Toys', 'Groceries', 'Electronics'],
            es: ['Muebles', 'Ropa', 'Juguetes', 'Productos alimenticios', 'Electrónica'],
          },
          datasets: [{
            label: 'Unidades vendidas',
            data: [
              7.341, 7.280, 7.273, 7.254, 7.193 
            ],
            backgroundColor: [
              'rgba(6, 182, 212, 0.4)',
              'rgba(6, 169, 198, 0.4)',
              'rgba(6, 135, 157, 0.4)',
              'rgba(6, 182, 212, 0.4)',
              'rgba(34, 211, 238, 0.4)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(34, 211, 238, 1)',
              'rgba(103, 232, 249, 1)',
              'rgba(165, 243, 252, 1)',
              'rgba(215, 250, 254, 1)'
            ],
          }],
        },
      },
    ],
    category: 'Data Analysis',
  },
];
// Template for adding new projects
// {
//   id: 'project-id',
//   title: {
//     en: 'Project Title',
//     es: 'Título del Proyecto',
//   },
//   shortDescription: {
//     en: 'Brief description for gallery view',
//     es: 'Breve descripción para vista de galería',
//   },
//   description: {
//     en: 'Detailed project description',
//     es: 'Descripción detallada del proyecto',
//   },
//   technologies: ['Tech1', 'Tech2', 'Tech3'],
//   features: {
//     en: ['Feature 1', 'Feature 2', 'Feature 3'],
//     es: ['Característica 1', 'Característica 2', 'Característica 3'],
//   },
//   image: 'https://example.com/thumbnail.jpg',
//   gallery: [
//     'https://example.com/image1.jpg',
//     'https://example.com/image2.jpg',
//   ],
//   links: [
//     {
//       label: { en: 'GitHub', es: 'GitHub' },
//       url: 'https://github.com/username/repo',
//       type: 'github',
//     },
//   ],
//   charts: [
//     {
//       type: 'bar',
//       title: { en: 'Chart Title', es: 'Título del Gráfico' },
//       data: {
//         labels: ['A', 'B', 'C'],
//         datasets: [{
//           label: 'Dataset',
//           data: [10, 20, 30],
//           backgroundColor: 'rgba(6, 182, 212, 0.5)',
//           borderColor: 'rgba(6, 182, 212, 1)',
//         }],
//       },
//     },
//   ],
//   category: 'Category Name',
// },
//];
