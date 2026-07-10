import React from 'react';
import DashboardShell from './components/DashboardShell';
import { acmeResearchConfig, globexMedConfig } from './configs/clients';
import './styles/dashboard.css'; // Global reset if needed, though variables are scoped

export default function App() {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '2rem', 
      padding: '2rem', 
      backgroundColor: '#f1f5f9', 
      minHeight: '100vh' 
    }}>
      {/* Instance 1 */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <DashboardShell clientConfig={acmeResearchConfig} />
      </div>

      {/* Instance 2 */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <DashboardShell clientConfig={globexMedConfig} />
      </div>
    </div>
  );
}
