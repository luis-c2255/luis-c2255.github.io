export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    home: string;
    projects: string;
    skills: string;
    about: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  projects: {
    title: string;
    viewProject: string;
    backToGallery: string;
    technologies: string;
    overview: string;
    keyFeatures: string;
  };
  skills: {
    title: string;
    certifications: string;
  };
  footer: {
    rights: string;
  };
  about: {
    title: string;
    subtitle: string;
    softSkills: string;
    experience: string;
    dataApproach: string;
    workStyle: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I\'m',
      title: 'Luis Modesto',
      subtitle: 'Data Analyst | Process Optimizer | Customer Service Specialist',
      cta: 'View My Work',
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      backToGallery: 'Back to Gallery',
      technologies: 'Technologies',
      overview: 'Overview',
      keyFeatures: 'Key Features',
    },
    skills: {
      title: 'Skills & Expertise',
      certifications: 'Certifications',
    },
    footer: {
      rights: 'All rights reserved',
    },
    about: {
      title: 'About Me',
      subtitle: 'A bit about my journey, my value, and how I approach data.',
      softSkills: 'Soft Skills',
      experience: 'Professional Experience',
      dataApproach: 'My Approach to Data',
      workStyle: 'How I work', 
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      skills: 'Habilidades',
      about: 'Sobre mi',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Luis Modesto',
      subtitle: 'Analista de Datos | Optimizador de Procesos | Especialista en Atención al Cliente',
      cta: 'Ver Mi Trabajo',
    },
    projects: {
      title: 'Proyectos',
      viewProject: 'Ver Proyecto',
      backToGallery: 'Volver a la Galería',
      technologies: 'Tecnologías',
      overview: 'Descripción General',
      keyFeatures: 'Características Clave',
    },
    skills: {
      title: 'Habilidades y Experiencia',
      certifications: 'Certificaciones',
    },
    footer: {
      rights: 'Todos los derechos reservados',
    },
    about: {
      title: 'Sobre Mi',
      subtitle: 'Un poco sobre mi trayectoria, mis valores y cómo trabajo con datos.',
      softSkills: 'Habilidades',
      experience: 'Experiencia Profesional',
      dataApproach: 'Mi Enfoque con los Datos',
      workStyle: 'Cómo Trabajo',    
    },
  },
};
