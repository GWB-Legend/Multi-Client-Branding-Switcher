README.md
Sabi Core — Multi-Client Branding Switcher
This prototype demonstrates how Sabi Core can deploy a single shared dashboard shell across multiple client instances, driving the entire visual theme (colors, logos, typography) via a clientConfig prop and CSS custom properties.

No client values are hardcoded into the components. The theme is injected at the DOM level, allowing all child components to simply consume standard CSS variables (e.g., var(--color-primary)).

Tech Stack
React 18+ (JavaScript/JSX)
Vite
Standard CSS (Custom Properties)
Getting Started
Prerequisites
Node.js 18+
npm
Installation
npm install
Run Development Server
bash

npm run dev
Open http://localhost:5173 to view two distinct Sabi Core client dashboards rendered side-by-side.

Architecture Notes
ThemeProvider.jsx: Takes the clientConfig prop and applies CSS variables to the wrapper DOM node. This avoids the performance penalty and specificity nightmares of inline styles.
DashboardShell.jsx: A completely agnostic layout component. It has zero knowledge of client branding and relies entirely on the CSS variables set by the provider.
ClientConfigs.js: Contains the mock payload schemas for two hypothetical clients.
