import React from 'react';
import '../styles/dashboard.css';

// Mock data representing aggregated OpenAlex/PubMed metrics
const mockMetrics = [
  { id: 1, label: 'Total Publications', value: '12,403' },
  { id: 2, label: 'Active Authors', value: '3,891' },
  { id: 3, label: 'Avg. Citation Rate', value: '4.2' },
];

const mockRecentActivity = [
  { id: 1, text: 'New embedding cluster generated for oncology research.' },
  { id: 2, text: 'PubMed sync completed: 450 new records indexed.' },
];

export default function DashboardShell({ clientConfig }) {
  const { orgName, logoUrl, theme } = clientConfig;

  // Convert the theme object into CSS variable string for the scoped wrapper
  const cssVariables = {
    '--sc-primary': theme.primary,
    '--sc-primary-foreground': theme.primaryForeground,
    '--sc-sidebar-bg': theme.sidebarBg,
    '--sc-sidebar-text': theme.sidebarText,
  };

  return (
    <div className="sc-shell" style={cssVariables} aria-label={`${orgName} Dashboard`}>
      {/* Sidebar */}
      <aside className="sc-sidebar">
        <div className="sc-sidebar-header">
          <img src={logoUrl} alt={`${orgName} logo`} className="sc-logo" />
          <span className="sc-org-name">{orgName}</span>
        </div>
        <nav aria-label="Main navigation">
          <ul className="sc-nav-list">
            <li><a href="#" className="sc-nav-link sc-nav-link--active">Dashboard</a></li>
            <li><a href="#" className="sc-nav-link">Literature Search</a></li>
            <li><a href="#" className="sc-nav-link">LLM Assistant</a></li>
            <li><a href="#" className="sc-nav-link">Datasets</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="sc-main-wrapper">
        {/* Top Bar */}
        <header className="sc-topbar">
          <div className="sc-search-wrapper">
            {/* Accessible search pattern */}
            <label htmlFor="search-publications" className="sc-sr-only">Search publications</label>
            <input 
              id="search-publications" 
              type="search" 
              placeholder="Search OpenAlex & PubMed..." 
              className="sc-search-input"
            />
          </div>
          <div className="sc-user-chip">
            <span>Dr. Smith</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="sc-content">
          <h1 className="sc-welcome-heading">Welcome back to {orgName}</h1>
          
          <section aria-labelledby="metrics-heading">
            <h2 id="metrics-heading" className="sc-sr-only">Key Metrics</h2>
            <div className="sc-metrics-grid">
              {mockMetrics.map(metric => (
                <article key={metric.id} className="sc-metric-card">
                  <span className="sc-metric-value">{metric.value}</span>
                  <span className="sc-metric-label">{metric.label}</span>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="activity-heading" className="sc-activity-section">
            <h2 id="activity-heading" className="sc-section-title">Recent Sabi Core Activity</h2>
            <ul className="sc-activity-list">
              {mockRecentActivity.map(item => (
                <li key={item.id} className="sc-activity-item">
                  <span className="sc-activity-dot"></span>
                  {item.text}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
