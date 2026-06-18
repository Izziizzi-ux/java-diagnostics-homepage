# IBM Java Container Diagnostics Homepage

A Carbon React implementation of the IBM Java Container Diagnostics homepage, featuring active issues and optimization recommendations for Java containerized environments.

## Features

- **Dark Header** with IBM branding and hamburger menu
- **Hero Section** with main title and description
- **Active Issues Section** displaying 6 capability cards with:
  - Layer badges (Java layer, Application runtimes layer)
  - Issue titles and descriptions
  - Timestamps
  - Clickable navigation
- **Recommendations Section** with optimization suggestions
- **Responsive Grid Layout** using Carbon Grid system
- **Carbon Design System** components and tokens throughout

## Prerequisites

- Node.js 18+ and npm

## Installation

1. Navigate to the project directory:
```bash
cd java-diagnostics-homepage
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
java-diagnostics-homepage/
├── src/
│   ├── components/
│   │   ├── HomePage.jsx          # Main page component
│   │   ├── HomePage.scss         # Page styles
│   │   ├── CapabilityCard.jsx    # Reusable card component
│   │   └── CapabilityCard.scss   # Card styles
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # Entry point
│   └── index.scss                # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## Technologies Used

- **React 18** - UI library
- **Carbon React v11** - IBM's design system
- **Carbon Icons** - Icon library
- **Vite** - Build tool and dev server
- **SCSS** - Styling with Carbon design tokens

## Carbon Components Used

- `Grid` and `Column` - Responsive layout
- `Layer` - Theme context for nested components
- `Button` (ghost variant) - "View all" actions
- `ClickableTile` - Interactive capability cards
- Icons: `Menu`, `ArrowRight`, `ChevronDown`

## Design Tokens

The implementation uses Carbon design tokens for:
- **Colors**: `$background`, `$text-primary`, `$layer`, etc.
- **Spacing**: `$spacing-02` through `$spacing-07`
- **Typography**: `heading-03`, `heading-04`, `body-long-01`, etc.

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader compatible
- Proper color contrast ratios

## Responsive Behavior

- **Mobile (sm)**: Cards stack vertically, sidebar above content
- **Tablet (md)**: 2-column card layout
- **Desktop (lg)**: 3-column card layout, sidebar beside content

## License

This is a demonstration project implementing IBM Carbon Design System.