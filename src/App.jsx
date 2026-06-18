import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import TrafficAnomalyOptimization from './components/TrafficAnomalyOptimization';

function App() {
  // Toggle between HomePage and TrafficAnomalyOptimization
  // In a real app, this would use React Router
  const [showOptimization, setShowOptimization] = useState(
    window.location.hash === '#optimization'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setShowOptimization(window.location.hash === '#optimization');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  return showOptimization ? <TrafficAnomalyOptimization /> : <HomePage />;
}

export default App;

// Made with Bob
