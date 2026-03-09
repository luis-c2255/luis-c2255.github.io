import { useEffect } from 'react';

// Replace this with YOUR Google Analytics Measurement ID
// Get it from https://analytics.google.com/
const GA_MEASUREMENT_ID = "G-EQHMR0W2CY"; // TODO: Replace with your actual ID

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const Analytics = () => {
  useEffect(() => {
    // Only load in production
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.warn('⚠️ Google Analytics not configured. Add your Measurement ID to Analytics.tsx');
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    `;
    document.head.appendChild(script2);

    console.log('✅ Google Analytics initialized');

    return () => {
      // Cleanup
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};

// Track page views manually
export const trackPageView = (pageName: string, path: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_path: path,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined tracking functions for common actions
export const analytics = {
  // Track resume downloads
  trackResumeDownload: (language: 'en' | 'es') => {
    trackEvent('download', 'Resume', language === 'en' ? 'English' : 'Spanish');
  },

  // Track project views
  trackProjectView: (projectTitle: string) => {
    trackEvent('view', 'Project', projectTitle);
  },

  // Track certificate clicks
  trackCertificateClick: (certificateTitle: string) => {
    trackEvent('click', 'Certificate', certificateTitle);
  },

  // Track language changes
  trackLanguageChange: (newLanguage: 'en' | 'es') => {
    trackEvent('change', 'Language', newLanguage);
  },

  // Track navigation
  trackNavigation: (section: string) => {
    trackEvent('navigate', 'Navigation', section);
  },

  // Track contact form submission
  trackContactSubmit: () => {
    trackEvent('submit', 'Contact Form', 'Form Submitted');
  },

  // Track section views
  trackSectionView: (section: 'home' | 'projects' | 'skills' | 'contact' | 'about') => {
    trackPageView(
      section.charAt(0).toUpperCase() + section.slice(1),
      `/${section}`
    );
  },

  // Track social link clicks
  trackSocialClick: (platform: 'github' | 'linkedin' | 'email') => {
    trackEvent('click', 'Social Link', platform);
  },

  // Track project gallery interactions
  trackProjectGalleryImage: (projectTitle: string, imageIndex: number) => {
    trackEvent('view', 'Project Gallery', `${projectTitle} - Image ${imageIndex + 1}`);
  },

  // Track chart interactions (if you want to track which charts users view)
  trackChartView: (chartTitle: string) => {
    trackEvent('view', 'Chart', chartTitle);
  },
};


export default Analytics;

