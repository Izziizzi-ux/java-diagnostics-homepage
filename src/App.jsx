import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import TrafficAnomalyOptimization from './components/TrafficAnomalyOptimization';
import ServiceDisruption from './components/ServiceDisruption';

function App() {
  // Toggle between HomePage and TrafficAnomalyOptimization
  // In a real app, this would use React Router
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#optimization') return 'optimization';
    if (hash === '#service-disruption') return 'service-disruption';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#optimization') {
        setCurrentPage('optimization');
      } else if (hash === '#service-disruption') {
        setCurrentPage('service-disruption');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  if (currentPage === 'optimization') return <TrafficAnomalyOptimization />;
  if (currentPage === 'service-disruption') return <ServiceDisruption />;
  return <HomePage />;
}

export default App;

// Made with Bob
