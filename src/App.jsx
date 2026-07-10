import ThemeProvider from './contexts/ThemeProvider';
import DashboardShell from './components/DashboardShell';
import { novartisConfig, baylorConfig } from './configs/ClientConfigs';
import './index.css'; // Base reset (assumed standard Vite setup)

export default function App() {
  return (
    // Vite default container
    <div style={{ 
      display: 'flex', 
      gap: '24px', 
      padding: '32px', 
      backgroundColor: '#F3F4F6', 
      minHeight: '100vh',
      boxSizing: 'border-box'
    }}>
      
      {/* Instance 1: Novartis */}
      <div style={{ flex: 1, maxWidth: '50%', height: '80vh' }}>
        <ThemeProvider clientConfig={novartisConfig}>
          <DashboardShell clientConfig={novartisConfig} />
        </ThemeProvider>
      </div>

      {/* Instance 2: Baylor */}
      <div style={{ flex: 1, maxWidth: '50%', height: '80vh' }}>
        <ThemeProvider clientConfig={baylorConfig}>
          <DashboardShell clientConfig={baylorConfig} />
        </ThemeProvider>
      </div>

    </div>
  );
}
