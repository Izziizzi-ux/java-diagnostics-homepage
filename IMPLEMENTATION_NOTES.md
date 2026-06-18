# Traffic Anomaly Detection Optimization - Implementation Notes

## Overview
Created a new optimization recommendation page for Traffic Anomaly Detection (Baseline Deviation) - a runtime layer optimization that monitors request volume patterns and identifies deviations from established baselines.

## Files Created

### 1. TrafficAnomalyOptimization.jsx
- Full-featured optimization page component
- Includes: Page header, breadcrumb navigation, risk assessment tile, content switcher, chart visualization, and tabbed recommendations
- Runtime-specific metrics: Request Volume, Response Time, Error Rate
- Configuration recommendations for rate limiting, auto-scaling, and connection timeouts

### 2. TrafficAnomalyOptimization.scss
- Complete styling using Carbon design tokens
- Follows existing project patterns from HomePage.scss
- Responsive layout with proper spacing and typography

## Files Modified

### 1. App.jsx
- Added simple hash-based routing to toggle between HomePage and TrafficAnomalyOptimization
- Navigate to optimization page using `#optimization` hash

### 2. CapabilityCard.jsx
- Added optional `onClick` prop to make cards clickable
- Maintains backward compatibility with existing cards

### 3. HomePage.jsx
- Added click handler to Traffic Anomaly Detection card (id: 10)
- Clicking the card navigates to the optimization page

## Required Package Installation

**IMPORTANT:** You need to install the Carbon Charts package:

```bash
npm install @carbon/charts-react @carbon/charts
```

This package is required for the LineChart component used to visualize traffic patterns.

## Key Features

### Runtime-Specific Adaptations
- **Metrics**: Request Volume, Response Time, Error Rate (instead of CPU/Memory/Heap)
- **Chart**: Shows traffic patterns with baseline, actual usage, and threshold lines
- **Configuration Table**: Runtime/ingress settings (rate limits, auto-scaling, replicas, timeouts)
- **Implementation Steps**: Detailed guide for applying runtime configuration changes

### Navigation
- Click "Traffic Anomaly Detection (Baseline Deviation)" card in Recommendations section
- Breadcrumb "Home" link returns to homepage
- Simple hash-based routing (#optimization)

### Component Structure
1. **Header**: Global navigation with IBM branding
2. **Breadcrumb**: Navigation path
3. **Page Header**: Title, description, tags (Application runtimes layer, High priority), action button
4. **Risk Assessment Tile**: Expandable accordion with data collection details
5. **Content Switcher**: Toggle between different metrics
6. **Chart**: Line chart showing traffic patterns over time
7. **Tabs**: Recommendations and Implementation sections with configuration table

## Design Fidelity
- Follows Carbon Design System guidelines
- Uses Carbon design tokens for colors, spacing, and typography
- Responsive grid layout with proper column spans
- Accessibility compliant (ARIA labels, keyboard navigation)

## Next Steps
1. Install @carbon/charts-react package
2. Test the implementation in browser
3. Verify navigation between HomePage and optimization page
4. Check responsive behavior at different breakpoints
5. Validate chart rendering and data visualization

## Usage
- Start dev server: `npm run dev`
- View homepage: `http://localhost:5173/`
- View optimization page: `http://localhost:5173/#optimization`
- Or click the "Traffic Anomaly Detection (Baseline Deviation)" card in the Recommendations section