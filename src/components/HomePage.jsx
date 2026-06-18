import React from 'react';
import { Grid, Column, Button } from '@carbon/react';
import { Menu, ArrowRight, ChevronDown } from '@carbon/icons-react';
import CapabilityCard from './CapabilityCard';
import EnvironmentCard from './EnvironmentCard';
import './HomePage.scss';

const environmentData = [
  {
    id: 'websphere',
    title: 'WebSphere',
    servers: 5,
    apps: 12,
    status: '2 Issues',
    statusType: 'warning',
    activeIssues: 2,
    optimizations: 1
  },
  {
    id: 'liberty',
    title: 'Liberty',
    servers: 8,
    apps: 15,
    status: '1 Issue',
    statusType: 'warning',
    activeIssues: 1,
    optimizations: 2
  },
  {
    id: 'quarkus',
    title: 'Quarkus',
    servers: 3,
    apps: 6,
    status: 'Healthy',
    statusType: 'healthy',
    activeIssues: 0,
    optimizations: 0
  },
  {
    id: 'jvm',
    title: 'JVM',
    servers: 16,
    apps: 33,
    status: '3 Issues',
    statusType: 'warning',
    activeIssues: 3,
    optimizations: 3
  }
];

const activeIssues = [
  {
    id: 1,
    title: 'Service disruption',
    description: 'Response Time Degradation causing service disruption.',
    timestamp: 'Since 3 h ago',
    tags: [
      { label: 'High priority', type: 'red' },
      { label: 'JVM', type: 'teal' },
      { label: 'App server', type: 'purple' }
    ],
    showActionButton: true,
    onClick: () => {
      window.location.hash = '#service-disruption';
    }
  },
  {
    id: 2,
    title: 'Memory leak',
    description: 'Memory leak from retained objects',
    timestamp: 'Since 3 h ago',
    tags: [
      { label: 'High priority', type: 'red' },
      { label: 'JVM', type: 'teal' }
    ],
    showActionButton: true
  },
  {
    id: 3,
    title: 'Hung threads with memory impact',
    description: 'Threads blocked causing memory buildup. High priority',
    timestamp: 'Since 3 h ago',
    tags: [
      { label: 'High priority', type: 'red' },
      { label: 'JVM', type: 'teal' }
    ],
    showActionButton: true
  }
];

const recommendations = [
  {
    id: 7,
    title: 'Optimisation',
    description: '3 optimisation alerts ready to explore.',
    timestamp: 'Since 3 h ago',
    tags: [
      { label: 'High priority', type: 'red' },
      { label: 'JVM', type: 'teal' }
    ],
    showActionButton: false
  },
  {
    id: 8,
    title: 'Optimisation',
    description: '3 optimisation alerts ready to explore.',
    timestamp: 'Since 3 h ago',
    tags: [
      { label: 'Medium priority', type: 'gray' },
      { label: 'App server', type: 'purple' }
    ],
    showActionButton: false
  },
  {
    id: 10,
    title: 'Traffic Anomaly Detection (Baseline Deviation)',
    description: 'Uses historical traffic patterns to flag unusual behaviour early.',
    timestamp: 'Since 3 h ago',
    tags: [
      { label: 'Medium priority', type: 'gray' },
      { label: 'App server', type: 'purple' }
    ],
    showActionButton: false,
    onClick: () => {
      window.location.hash = '#optimization';
    }
  }
];

function HomePage() {
  return (
    <div className="home-page">
      {/* Header */}
      <div className="home-page__header">
        <div className="home-page__header-content">
          <button className="home-page__menu-button" aria-label="Open menu">
            <Menu size={20} />
          </button>
          <div className="home-page__header-title">
            <span className="home-page__header-title-ibm">IBM</span>
            <span className="home-page__header-title-product">Java Container Diagnostics</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="home-page__hero">
        <Grid>
          <Column sm={4} md={8} lg={16}>
            <h1 className="home-page__hero-title">Maintain stability across Java services</h1>
            <p className="home-page__hero-description">
              Resolve active JVM issues to prevent disruptions in your containerized environments
            </p>
          </Column>
        </Grid>
      </div>

      {/* Environment Overview Section */}
      <div className="home-page__environment-section">
        <Grid>
          <Column sm={4} md={8} lg={16}>
            <h2 className="home-page__environment-title">Environment Overview</h2>
          </Column>
        </Grid>
        <Grid className="home-page__environment-grid">
          {environmentData.map((env) => (
            <Column key={env.id} sm={4} md={4} lg={4}>
              <EnvironmentCard {...env} />
            </Column>
          ))}
        </Grid>
      </div>

      {/* Active Issues Section */}
      <div className="home-page__section-wrapper">
        <div className="home-page__section">
          <div className="home-page__sidebar">
            <div className="home-page__sidebar-content">
              <h2 className="home-page__section-title">Resolve active issues</h2>
              <p className="home-page__section-description">
                Address critical problems affecting your services right now.
              </p>
              <ul className="home-page__feature-list">
                <li>Get AI-powered root cause analysis</li>
                <li>Follow step-by-step resolution guides</li>
                <li>Automate fixes with one-click deployment</li>
              </ul>
              <Button
                kind="tertiary"
                size="sm"
                renderIcon={ArrowRight}
                className="home-page__view-all-button"
              >
                View all
              </Button>
            </div>
          </div>

          <div className="home-page__divider" />

          <div className="home-page__content">
            <div className="home-page__content-header">
              <h3 className="home-page__content-title">Active issues (3)</h3>
              <Button
                kind="ghost"
                size="sm"
                renderIcon={ChevronDown}
                className="home-page__show-more"
              >
                Show more
              </Button>
            </div>
            <div className="home-page__cards-wrapper">
              <Grid narrow>
                {activeIssues.map((issue) => (
                  <Column key={issue.id} sm={4} md={4} lg={5}>
                    <CapabilityCard {...issue} />
                  </Column>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="home-page__section-wrapper">
        <div className="home-page__section">
          <div className="home-page__sidebar">
            <div className="home-page__sidebar-content">
              <h2 className="home-page__section-title">Optimisation recommendations</h2>
              <p className="home-page__section-description">
                Prevent future issues and improve system performance
              </p>
              <ul className="home-page__feature-list">
                <li>Identify potential risks before they occur</li>
                <li>Optimize JVM settings for better performance</li>
                <li>Strengthen system reliability proactively</li>
              </ul>
              <Button
                kind="tertiary"
                size="sm"
                renderIcon={ArrowRight}
                className="home-page__view-all-button"
              >
                View all
              </Button>
            </div>
          </div>

          <div className="home-page__divider" />

          <div className="home-page__content">
            <div className="home-page__content-header">
              <h3 className="home-page__content-title">Recommendations (3)</h3>
              <Button
                kind="ghost"
                size="sm"
                renderIcon={ChevronDown}
                className="home-page__show-more"
              >
                Show more
              </Button>
            </div>
            <div className="home-page__cards-wrapper">
              <Grid narrow>
                {recommendations.map((recommendation) => (
                  <Column key={recommendation.id} sm={4} md={4} lg={5}>
                    <CapabilityCard {...recommendation} />
                  </Column>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

// Made with Bob
