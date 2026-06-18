import React from 'react';
import { Grid, Column, Layer, Button } from '@carbon/react';
import { Menu, ArrowRight, ChevronDown } from '@carbon/icons-react';
import CapabilityCard from './CapabilityCard';
import './HomePage.scss';

const activeIssues = [
  {
    id: 1,
    layer: 'Java layer',
    layerType: 'java',
    title: 'Connection Pool Exhaustion',
    description: 'Detects exhausted database or service connection pools resulting in request failures and timeouts.',
    timestamp: 'Since 3hr ago'
  },
  {
    id: 2,
    layer: 'Application runtimes layer',
    layerType: 'runtime',
    title: 'CPU Utilisation Spikes',
    description: 'Identifies CPU usage exceeding capacity limits and determines whether spikes are expected or abnormal.',
    timestamp: 'Since 3hr ago'
  },
  {
    id: 3,
    layer: 'Java layer',
    layerType: 'java',
    title: 'Hanging Threads',
    description: 'Detects blocked or stalled threads that prevent requests from completing.',
    timestamp: 'Since 3hr ago'
  },
  {
    id: 4,
    layer: 'Application runtimes layer',
    layerType: 'runtime',
    title: 'Traffic Anomaly Detection',
    description: 'Identifies sudden spikes or drops in request volume that may indicate incidents or attacks.',
    timestamp: 'Since 3hr ago'
  },
  {
    id: 5,
    layer: 'Java layer',
    layerType: 'java',
    title: 'Classloader Conflicts',
    description: 'Detects classloading errors that cause application crashes or unpredictable behaviour.',
    timestamp: 'Since 3hr ago'
  },
  {
    id: 6,
    layer: 'Application runtimes layer',
    layerType: 'runtime',
    title: 'Error Rate Analysis (4xx / 5xx)',
    description: 'Detects abnormal increases in client or server errors indicating application or infrastructure failures.',
    timestamp: 'Since 3hr ago'
  }
];

const recommendations = [
  {
    id: 7,
    layer: 'Java layer',
    layerType: 'java',
    title: 'Out of Memory (OOM) Risk Patterns',
    description: 'Identifies memory growth trends and early signs of leaks before failure.',
    timestamp: 'Since 3 h ago'
  },
  {
    id: 8,
    layer: 'Application runtimes layer',
    layerType: 'runtime',
    title: 'CPU Utilisation Trends',
    description: 'Analyses sustained high CPU usage and capacity risks.',
    timestamp: 'Since 3 h ago'
  },
  {
    id: 9,
    layer: 'Java layer',
    layerType: 'java',
    title: 'Garbage Collection Efficiency Issues',
    description: 'Analyses GC behaviour over time to recommend tuning and configuration improvements.',
    timestamp: 'Since 3 h ago'
  },
  {
    id: 10,
    layer: 'Application runtimes layer',
    layerType: 'runtime',
    title: 'Traffic Anomaly Detection (Baseline Deviation)',
    description: 'Uses historical traffic patterns to flag unusual behaviour early.',
    timestamp: 'Since 3 h ago'
  },
  {
    id: 11,
    layer: 'Java layer',
    layerType: 'java',
    title: 'Connection Pool Saturation Trends',
    description: 'Identifies near-exhaustion patterns and misconfigured pool sizes.',
    timestamp: 'Since 3 h ago'
  },
  {
    id: 12,
    layer: 'Application runtimes layer',
    layerType: 'runtime',
    title: 'Error Rate Trends',
    description: 'Detects gradual increases in errors that signal emerging problems.',
    timestamp: 'Since 3 h ago'
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
                kind="ghost"
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
              <h3 className="home-page__content-title">Active issues (12)</h3>
              <button className="home-page__show-more">
                <span>Show more</span>
                <ChevronDown size={16} />
              </button>
            </div>
            <div className="home-page__cards-wrapper">
              <Grid narrow>
                {activeIssues.map((issue) => (
                  <Column key={issue.id} sm={4} md={4} lg={{span: 5, offset: 0}}>
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
                kind="ghost"
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
              <h3 className="home-page__content-title">Recommendations (12)</h3>
              <button className="home-page__show-more">
                <span>Show more</span>
                <ChevronDown size={16} />
              </button>
            </div>
            <div className="home-page__cards-wrapper">
              <Grid narrow>
                {recommendations.map((recommendation) => (
                  <Column key={recommendation.id} sm={4} md={4} lg={{span: 5, offset: 0}}>
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
