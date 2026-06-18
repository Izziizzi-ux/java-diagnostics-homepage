import React, { useState } from 'react';
import {
  Grid,
  Column,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Button,
  Tile,
  Accordion,
  AccordionItem,
  ContentSwitcher,
  Switch,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';
import { Menu, ChevronDown } from '@carbon/icons-react';
import { LineChart } from '@carbon/charts-react';
import '@carbon/charts-react/styles.css';
import './TrafficAnomalyOptimization.scss';

// Sample data for the traffic pattern chart
const chartData = [
  { group: 'Baseline', date: 'May 26', value: 3500 },
  { group: 'Baseline', date: 'May 27', value: 3600 },
  { group: 'Baseline', date: 'May 28', value: 3400 },
  { group: 'Baseline', date: 'May 29', value: 3550 },
  { group: 'Baseline', date: 'May 30', value: 3500 },
  { group: 'Baseline', date: 'May 31', value: 3450 },
  { group: 'Baseline', date: 'June 1', value: 3600 },
  { group: 'Baseline', date: 'June 2', value: 3500 },
  { group: 'Baseline', date: 'June 3', value: 3550 },
  { group: 'Baseline', date: 'June 4', value: 3500 },
  { group: 'Actual', date: 'May 26', value: 3400 },
  { group: 'Actual', date: 'May 27', value: 3500 },
  { group: 'Actual', date: 'May 28', value: 5200 },
  { group: 'Actual', date: 'May 29', value: 5400 },
  { group: 'Actual', date: 'May 30', value: 5300 },
  { group: 'Actual', date: 'May 31', value: 5100 },
  { group: 'Actual', date: 'June 1', value: 5500 },
  { group: 'Actual', date: 'June 2', value: 5300 },
  { group: 'Actual', date: 'June 3', value: 5400 },
  { group: 'Actual', date: 'June 4', value: 5200 },
  { group: 'Threshold', date: 'May 26', value: 4500 },
  { group: 'Threshold', date: 'May 27', value: 4500 },
  { group: 'Threshold', date: 'May 28', value: 4500 },
  { group: 'Threshold', date: 'May 29', value: 4500 },
  { group: 'Threshold', date: 'May 30', value: 4500 },
  { group: 'Threshold', date: 'May 31', value: 4500 },
  { group: 'Threshold', date: 'June 1', value: 4500 },
  { group: 'Threshold', date: 'June 2', value: 4500 },
  { group: 'Threshold', date: 'June 3', value: 4500 },
  { group: 'Threshold', date: 'June 4', value: 4500 },
];

const chartOptions = {
  title: 'Request volume patterns',
  axes: {
    bottom: {
      title: 'Date',
      mapsTo: 'date',
      scaleType: 'labels',
    },
    left: {
      title: 'Requests per minute',
      mapsTo: 'value',
      scaleType: 'linear',
    },
  },
  curve: 'curveMonotoneX',
  height: '350px',
  legend: {
    enabled: true,
  },
  color: {
    scale: {
      'Baseline': '#0f62fe',
      'Actual': '#da1e28',
      'Threshold': '#f1c21b',
    },
  },
};

function TrafficAnomalyOptimization() {
  const [selectedMetric, setSelectedMetric] = useState(0);

  const metrics = ['Request Volume', 'Response Time', 'Error Rate'];

  return (
    <div className="traffic-anomaly-optimization">
      {/* Header */}
      <div className="traffic-anomaly-optimization__header">
        <div className="traffic-anomaly-optimization__header-content">
          <button className="traffic-anomaly-optimization__menu-button" aria-label="Open menu">
            <Menu size={20} />
          </button>
          <div className="traffic-anomaly-optimization__header-title">
            <span className="traffic-anomaly-optimization__header-title-ibm">IBM</span>
            <span className="traffic-anomaly-optimization__header-title-product">Java Container Diagnostics</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <div className="traffic-anomaly-optimization__breadcrumb">
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>Home</BreadcrumbItem>
              <BreadcrumbItem>Optimisation recommendation</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Column>
      </Grid>

      {/* Page Header */}
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <div className="traffic-anomaly-optimization__page-header">
            <div className="traffic-anomaly-optimization__page-header-content">
              <div className="traffic-anomaly-optimization__page-header-tags">
                <Tag type="blue" size="md">Application runtimes layer</Tag>
                <Tag type="red" size="md">High priority</Tag>
              </div>
              <h1 className="traffic-anomaly-optimization__page-title">
                Preventing traffic anomaly risks in payment-service
              </h1>
              <p className="traffic-anomaly-optimization__page-description">
                The payment-service is experiencing traffic patterns that deviate significantly from established baselines. 
                Proactive configuration of rate limiting and auto-scaling is recommended to prevent potential service 
                degradation and ensure stability during traffic spikes.
              </p>
              <Button kind="primary" size="md">
                Create Jira ticket
              </Button>
            </div>
          </div>
        </Column>
      </Grid>

      {/* Risk Assessment Tile */}
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <div className="traffic-anomaly-optimization__section">
            <Tile>
              <div className="traffic-anomaly-optimization__tile-content">
                <h2 className="traffic-anomaly-optimization__section-title">
                  Risk assessment and system behavior
                </h2>
                <p className="traffic-anomaly-optimization__section-description">
                  The graph below shows how request volume and response latency have trended across the last 15 days. 
                  The payment-service is consistently experiencing traffic spikes that exceed baseline thresholds. During 
                  peak periods, the runtime dynamically scales but response times degrade, indicating capacity constraints 
                  that could lead to service instability if left unaddressed.
                </p>
                <Accordion size="lg">
                  <AccordionItem title="How the data is collected">
                    <p>
                      Traffic data is collected from the ingress layer and application runtime metrics. Request volume, 
                      response times, and error rates are aggregated in real-time and compared against historical baselines 
                      established over the past 30 days. Anomalies are detected when current patterns deviate by more than 
                      2 standard deviations from the baseline, triggering alerts and recommendations for configuration 
                      adjustments.
                    </p>
                  </AccordionItem>
                </Accordion>
              </div>
            </Tile>
          </div>
        </Column>
      </Grid>

      {/* Content Switcher */}
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <div className="traffic-anomaly-optimization__content-switcher">
            <ContentSwitcher
              selectedIndex={selectedMetric}
              onChange={(e) => setSelectedMetric(e.index)}
              size="md"
            >
              <Switch text="Request Volume" />
              <Switch text="Response Time" />
              <Switch text="Error Rate" />
            </ContentSwitcher>
          </div>
        </Column>
      </Grid>

      {/* Chart */}
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <div className="traffic-anomaly-optimization__chart">
            <LineChart data={chartData} options={chartOptions} />
          </div>
        </Column>
      </Grid>

      {/* Tabs Section */}
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <div className="traffic-anomaly-optimization__tabs-section">
            <Tabs>
              <TabList aria-label="Configuration tabs" contained>
                <Tab>Recommendations</Tab>
                <Tab>Implementation</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className="traffic-anomaly-optimization__tab-content">
                    <p className="traffic-anomaly-optimization__tab-description">
                      Current configurations use conservative rate limiting and auto-scaling thresholds that don't 
                      account for observed traffic patterns. Adjusting these settings will prevent service degradation 
                      during traffic spikes and improve overall system resilience before it impacts customer experience.
                    </p>
                    <TableContainer title="Configuration recommendations for payment-service">
                      <Table size="md" aria-label="Configuration recommendations table">
                        <TableHead>
                          <TableRow>
                            <TableHeader>Configuration variable</TableHeader>
                            <TableHeader>Current</TableHeader>
                            <TableHeader>Recommendations</TableHeader>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>Rate limit (requests/min):</TableCell>
                            <TableCell>3000</TableCell>
                            <TableCell>5500</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Auto-scaling threshold (CPU %):</TableCell>
                            <TableCell>80%</TableCell>
                            <TableCell>65%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Min replicas:</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Max replicas:</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>8</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Connection timeout (seconds):</TableCell>
                            <TableCell>30</TableCell>
                            <TableCell>45</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="traffic-anomaly-optimization__tab-content">
                    <h3 className="traffic-anomaly-optimization__implementation-title">
                      Implementation steps
                    </h3>
                    <ol className="traffic-anomaly-optimization__implementation-list">
                      <li>
                        <strong>Update rate limiting configuration:</strong> Modify the ingress controller or API 
                        gateway settings to increase the rate limit from 3000 to 5500 requests per minute.
                      </li>
                      <li>
                        <strong>Adjust auto-scaling thresholds:</strong> Update the Horizontal Pod Autoscaler (HPA) 
                        configuration to trigger scaling at 65% CPU utilization instead of 80%.
                      </li>
                      <li>
                        <strong>Increase replica counts:</strong> Update the deployment configuration to set minimum 
                        replicas to 3 and maximum replicas to 8.
                      </li>
                      <li>
                        <strong>Extend connection timeout:</strong> Modify the service configuration to increase 
                        connection timeout from 30 to 45 seconds to accommodate traffic spikes.
                      </li>
                      <li>
                        <strong>Monitor and validate:</strong> After applying changes, monitor traffic patterns and 
                        response times for 48 hours to ensure the new configuration handles peak loads effectively.
                      </li>
                    </ol>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </Column>
      </Grid>
    </div>
  );
}

export default TrafficAnomalyOptimization;

// Made with Bob