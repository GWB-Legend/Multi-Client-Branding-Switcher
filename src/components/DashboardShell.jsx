import { useState } from 'react';
import '../styles/dashboard.css';

// Plausible mock data reflecting Sabi Core's research synthesis features
const MOCK_RESEARCH = [
  { id: 1, source: 'PubMed', title: 'Efficacy of CAR-T in relapsed DLBCL', relevance: 98 },
  { id: 2, source: 'OpenAlex', title: 'CRISPR screening identifies novel oncogenes', relevance: 91 },
  { id: 3, source: 'PubMed', title: 'Long-term cardiovascular outcomes of SGLT2 inhibitors', relevance: 85 },
];

export default function DashboardShell({ clientConfig }) {
  const [searchQuery, setSearchQuery] = useState('');
  const { orgName, logoUrl } = clientConfig;

  return (
    <div className="shell-container">
      <header className="shell-header" role="banner">
        <div className="shell-branding">
          <img src={logoUrl} alt={`${orgName} logo`} className="shell-logo" />
          <span className="shell-org-name">{orgName}</span>
        </div>
        <nav aria-label="Main navigation">
          <button className="shell-nav-btn" tabIndex={0}>Dashboard</button>
          <button className="shell-nav-btn" tabIndex={0}>Literature Sync</button>
          <button className="shell-nav-btn" tabIndex={0}>Settings</button>
        </nav>
      </header>

      <main className="shell-main" role="main">
        <section className="shell-search-section" aria-label="Research search">
          <h1 className="shell-title">Research Feed</h1>
          <div className="shell-search-wrapper">
            <input 
              type="search" 
              className="shell-search-input"
              placeholder="Query Sabi Core via LLM..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search research papers"
            />
            <button className="shell-search-btn">Synthesize</button>
          </div>
        </section>

        <section className="shell-feed" aria-label="Recent research papers">
          {MOCK_RESEARCH.map(paper => (
            <article key={paper.id} className="shell-card">
              <div className="shell-card-header">
                <span className="shell-badge" aria-label={`Source: ${paper.source}`}>
                  {paper.source}
                </span>
                <span className="shell-relevance">{paper.relevance}% match</span>
              </div>
              <h2 className="shell-card-title">{paper.title}</h2>
              <div className="shell-card-actions">
                <button className="shell-text-btn">View Embedding</button>
                <button className="shell-text-btn">Summarize</button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
