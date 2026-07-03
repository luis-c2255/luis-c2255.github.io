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
    image: '/images/11.png',
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
      en: 'Mall Customers Analytics Dashboard',
      es: 'Análisis de clientes de un centro comercial',
    },
    shortDescription: {
      en: 'A complete end to end customer segmentation and behavioral insights project',
      es: 'Un proyecto completo de segmentación de clientes y análisis del comportamiento de principio a fin.',
    },
    description: {
      en: 'This project transforms the classic Mall Customers dataset into a fully interactive analytics product. The goal is to demonstrate how even a small dataset can support a complete analytical workflow and a polished, user-friendly dashboard.',
      es: 'Este proyecto transforma el conjunto de datos clásico «Mall Customers» en un producto analítico totalmente interactivo. El objetivo es demostrar cómo incluso un conjunto de datos pequeño puede respaldar un flujo de trabajo analítico completo y un panel de control pulido y fácil de usar.',
    },
    technologies: ['Python', 'Plotly', 'Pandas', 'Matplotlib', 'Scikit-Learn'],
    features: {
      en: [
        'Overview: Executive summary of customer demographics, spending patterns, and key insights.',
        'Distribution Analysis: Explore distributions of age, income, spending score, and other key variables.',
        'Relationship Analysis: Analyze correlations between variables to uncover hidden patterns and customer behaviors.',
        'Segmentation: Apply clustering algorithms to segment customers into distinct groups based on their characteristics and behaviors.',
        'Behavioral Insights: Analyze spending patterns, preferences, and behaviors of different customer segments.',
        'Modeling: Build predictive models to forecast customer behavior, such as spending score or segment membership.'
      ],
      es: [
        'Resumen ejecutivo: resumen ejecutivo de los datos demográficos de los clientes, los patrones de gasto y la información clave.',
        'Análisis de distribución: explora las distribuciones de edad, ingresos, puntuación de gasto y otras variables clave.',
        'Análisis de relaciones: analiza las correlaciones entre variables para descubrir patrones ocultos y comportamientos de los clientes.',
        'Segmentación: aplica algoritmos de agrupamiento para segmentar a los clientes en grupos distintos basados en sus características y comportamientos.',
        'Insights comportamentales: analiza los patrones de gasto, preferencias y comportamientos de diferentes segmentos de clientes.',
        'Modelado: construye modelos predictivos para predecir el comportamiento del cliente, como la puntuación de gasto o la membresía en un segmento.'
      ],
    },
    image: '/images/mall.png',
    gallery: [
      '/images/mall.png',
      '/images/dash1.png',
    ],
    links: [
      {
        label: { en: 'GitHub', es: 'GitHub' },
        url: 'https://github.com/luis-c2255/mall_customers_segmentation',
        type: 'github',
      },
      {
        label: { en: 'Live Demo', es: 'Demo en Vivo' },
        url: 'https://huggingface.co/spaces/Luismodesto86/Customer_Segmentation',
        type: 'demo',
      },
      {
        label: { en: 'Documentation', es: 'Documentación' },
        url: 'https://huggingface.co/spaces/Luismodesto86/Customer_Segmentation/blob/main/README.md',
        type: 'documentation',
      },
    ],
    charts: [
      {
        type: 'pie',
        title: { en: 'Customer Distribution by Gender', es: 'Distribución de clientes por género' },
        data: {
          labels: { en: ['Male', 'Female'], es: ['Hombre', 'Mujer'] },
          datasets: [{
            label: 'Number of Customers',
            data: [88, 112],
            backgroundColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(103, 232, 249, 1)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 0.4)',
              'rgba(103, 232, 249, 0.4)'
            ],
          }],
        },
      },
      {
        type: 'line',
        title: { en: 'Elbow Method (2D: Income + Score)', es: 'Método del codo (2D: Ingreso + Puntuación)' },
        data: {
          labels: {
            en: ['2', '3', '4', '5', '6', '7', '8', '9', '10'],
            es: ['2', '3', '4', '5', '6', '7', '8', '9', '10'],
          },
          datasets: [{
            label: 'Inertia',
            data: [273.66, 157.70, 109.22, 65.56, 60.13, 49.66, 37.31, 32.49, 30.05],
            backgroundColor: [
              'rgba(6, 182, 212, 1)',
              'rgba(41, 193, 219, 1)',
              'rgba(32, 191, 217, 1)',
              'rgba(58, 199, 223, 1)',
              'rgba(84, 208, 228, 1)',
              'rgba(76, 205, 226, 1)',
              'rgba(111, 216, 233, 1)',
              'rgba(145, 227, 240, 1)',
              'rgba(180, 239, 247, 1)',
              'rgba(215, 250, 254, 1)'
            ],
            borderColor: [
              'rgba(6, 182, 212, 0.4)',
              'rgba(41, 193, 219, 0.4)',
              'rgba(32, 191, 217, 0.4)',
              'rgba(58, 199, 223, 0.4)',
              'rgba(84, 208, 228, 0.4)',
              'rgba(76, 205, 226, 0.4)',
              'rgba(111, 216, 233, 0.4)',
              'rgba(145, 227, 240, 0.4)',
              'rgba(180, 239, 247, 0.4)',
              'rgba(215, 250, 254, 0.4)'
            ],
          }],
        },
      },
      {
        type: 'bubble',
        title: { en: 'Segmentation: Income vs Spending', es: 'Segmentación: Ingreso vs Gasto' },
        data: {
          labels: {
            en: ['Low income, high score', 'High income, low score', 'High income, high score', 'Low income, low score'],
            es: ['Bajo ingreso, alta puntuación', 'Alto ingreso, baja puntuación', 'Alto ingreso, alta puntuación', 'Bajo ingreso, baja puntuación'],
          },
          datasets: [{
            label: 'Customer Segments',
            data: [
              { x: 46, y: 55, r: 19 },
              { x: 65, y: 50, r: 19 },
              { x: 46, y: 56, r: 19 },
              { x: 50, y: 56, r: 2 },
              { x: 18, y: 6, r: 15 },
              { x: 38, y: 35, r: 20 },
              { x: 70, y: 97, r: 30 },
              { x: 90, y: 91, r: 20 },
              { x: 19, y: 81, r: 21 },
              { x: 25, y: 73, r: 31 },
              { x: 70, y: 18, r: 5 },
              { x: 78, y: 22, r: 34 },
            ],
            backgroundColor: 'rgba(6, 182, 212, 0.5)',
            borderColor: 'rgba(6, 182, 212, 1)',
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
