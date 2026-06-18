import React from 'react';
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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  CodeSnippet,
  InlineNotification,
} from '@carbon/react';
import { Menu, Information } from '@carbon/icons-react';
import './ServiceDisruption.scss';

function ServiceDisruption() {
  return (
    <div className="service-disruption">
      {/* Header */}
      <div className="service-disruption__header">
        <div className="service-disruption__header-content">
          <button className="service-disruption__menu-button" aria-label="Open menu">
            <Menu size={20} />
          </button>
          <div className="service-disruption__header-title">
            <span className="service-disruption__header-title-ibm">IBM</span>
            <span className="service-disruption__header-title-product">Java Container Diagnostics</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <div className="service-disruption__breadcrumb">
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>Home</BreadcrumbItem>
              <BreadcrumbItem href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>Active issues</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>Service disruption</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Column>
      </Grid>

      {/* Page Header */}
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <div className="service-disruption__page-header">
            <div className="service-disruption__page-header-tags">
              <Tag type="red" size="md">High severity</Tag>
              <Tag type="teal" size="md">JVM</Tag>
              <Tag type="purple" size="md">App server</Tag>
            </div>
            <h1 className="service-disruption__page-title">Service disruption</h1>
            <Button kind="primary" size="md" className="service-disruption__action-button">
              Create Jira ticket
            </Button>
          </div>
        </Column>
      </Grid>

      {/* Metadata Tile */}
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <Tile className="service-disruption__metadata-tile">
            <div className="service-disruption__metadata-grid">
              <div className="service-disruption__metadata-item">
                <div className="service-disruption__metadata-label">Cluster</div>
                <div className="service-disruption__metadata-value">prod-eu-west-aks-02</div>
              </div>
              <div className="service-disruption__metadata-item">
                <div className="service-disruption__metadata-label">Namespace</div>
                <div className="service-disruption__metadata-value">core-services</div>
              </div>
              <div className="service-disruption__metadata-item">
                <div className="service-disruption__metadata-label">Workload</div>
                <div className="service-disruption__metadata-value">StatefulSet</div>
              </div>
              <div className="service-disruption__metadata-item">
                <div className="service-disruption__metadata-label">DOM events</div>
                <div className="service-disruption__metadata-value">15 kills</div>
              </div>
            </div>
          </Tile>
        </Column>
      </Grid>

      {/* Main Content Tabs */}
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <Tile className="service-disruption__tabs-tile">
            <Tabs>
              <TabList aria-label="Diagnosis tabs">
                <Tab>Diagnosis</Tab>
                <Tab>Resolution</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className="service-disruption__tab-content">
                    {/* AI Assistant Notification */}
                    <InlineNotification
                      kind="info"
                      title="AI assistant"
                      subtitle="Explore the diagnosis and resolution tabs below for detailed analysis and step-by-step mitigation of this memory pressure issue."
                      lowContrast
                      hideCloseButton
                      className="service-disruption__ai-notification"
                    />

                    {/* Diagnosed Issue Section */}
                    <div className="service-disruption__section">
                      <h2 className="service-disruption__section-title">Diagnosed issue</h2>
                      <div className="service-disruption__ai-content">
                        <div className="service-disruption__ai-label">
                          <Information size={16} />
                          <span>AI generated</span>
                        </div>
                        <p className="service-disruption__section-text">
                          AI has generated an analysis to draw a conclusion of the diagnosed issue. The data collected to form this analysis was 
                          collected by Kruize, Crysstat and Wilson WebSphere environments. Explore the data that was collected in the diagnosed 
                          issue section
                        </p>
                      </div>

                      {/* Response Time Degradation */}
                      <div className="service-disruption__subsection">
                        <h3 className="service-disruption__subsection-title">Response time degradation causing service disruption</h3>
                        <p className="service-disruption__subsection-text">
                          The application experienced a significant spike in response time which exceeded infrastructure capacity. This triggered cascading failures: 
                          connection pool exhaustion → error rate spike → response time degradation. WebSphere Liberty runtime data provided critical visibility into the 
                          exact failure sequence and bottlenecks that would not be visible with JVM metrics alone.
                        </p>

                        <div className="service-disruption__key-evidence">
                          <h4 className="service-disruption__evidence-title">Key evidence:</h4>
                          <ul className="service-disruption__evidence-list">
                            <li><strong>Total response time degradation:</strong> 8.5s average vs normal 1.2s (608% increase, SLA breach)</li>
                            <li><strong>Connection pool:</strong> OrderDB at 850 req/min vs normal 1,820 req/min (3.2x increase at 34:25)</li>
                            <li><strong>Connection pool: OrderDB at 94% utilization (47/50 active, 156 waiting (4.2s avg wait))</strong></li>
                            <li><strong>Hung threads:</strong> 23 threads in WAITING state</li>
                            <li><strong>Memory pressure:</strong> GC overhead 35% with 156 queued requests (expected under load), not retained objects. GC functioning normally.</li>
                            <li><strong>Error rate:</strong> 12% (382/min), 73% timeout errors, 27% internal errors **NEW: Error Rate Analysis**</li>
                            <li><strong>Memory pressure:</strong> Heap 3.2GB/4GB (80%), GC: 36% overhead, 850ms pauses</li>
                            <li><strong>Root cause:</strong> Infrastructure capacity (50 connections, 80 threads) sized for 1,000 req/min, insufficient for 4,850 req/min</li>
                          </ul>
                        </div>

                        <Accordion size="lg">
                          <AccordionItem title="Alternative diagnoses ruled out based on available data:">
                            <ul className="service-disruption__ruled-out-list">
                              <li><strong>Application code performance:</strong> Ruled out because thread dumps show threads waiting for connections, not executing code.</li>
                              <li><strong>Database performance:</strong> Ruled out because connection pool exhaustion occurred before database connections ({'>'}100ms), Issue at connection layer.</li>
                              <li><strong>Network issues:</strong> Ruled out because traffic pattern shows legitimate user behavior, just higher volume.</li>
                              <li><strong>Memory leak:</strong> Ruled out because heap analysis shows growth from queued requests (expected under load), not retained objects. GC functioning normally.</li>
                              <li><strong>DDoS attack:</strong> Ruled out because traffic pattern shows legitimate user behavior, just higher volume.</li>
                            </ul>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      {/* Raw Data Section */}
                      <div className="service-disruption__raw-data">
                        <h3 className="service-disruption__subsection-title">Raw data:</h3>
                        <CodeSnippet type="multi" feedback="Copied to clipboard">
{`Traffic Spike Pattern
  Current: 4,850 req/min vs Normal: 1,820 sec/min (3.2x at 14:25)

Connection Pool Exhaustion
  OrderDB: 47/50 active (94%), 156 waiting
  Timeout: 425 in 5 minutes

Thread Pool Status
  Active: WebContainers-47 at
  Stack: WebContainers.getDetails()
  OrderDAO.getOrderDetails()

Response & Error Impact
  Response time: 8.5s (baseline: 1.2s)
  Error rate: 12% (382/min), 73% timeout, 27% internal errors

Memory Pressure
  Heap: 3.2GB/4GB (80%), GC: 36% overhead,
  850ms pauses
  Queued memory: 312MB (156 requests)`}
                        </CodeSnippet>
                      </div>
                    </div>

                    {/* Why This Has Caused Memory Issue */}
                    <div className="service-disruption__section">
                      <h2 className="service-disruption__section-title">Why this has caused memory issue</h2>
                      <p className="service-disruption__section-text">
                        Traffic exceeded infrastructure capacity at the connection pool layer. With only 50 connections but 4,850 req/min (requiring ~160 connections), 
                        requests queued causing: (1) Thread exhaustion - 23 threads blocked waiting for connections, (2) Memory pressure - 312MB from queued requests 
                        triggered excessive GC (36% CPU), (3) Cascading timeouts - 425 in 5 minutes causing 504 errors, (4) Response time degradation - cumulative delays 
                        resulted in 8.5s average (608% increase). Combined with non-heap memory (threads, metaspace, code cache), total memory exceeded 4GB container limit, 
                        triggering OOMKiller and causing service restarts.
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="service-disruption__tab-content">
                    <p>Resolution steps will be displayed here.</p>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}

export default ServiceDisruption;

// Made with Bob
