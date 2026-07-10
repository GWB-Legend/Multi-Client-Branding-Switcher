/**
 * Plausible mock data for client configurations.
 * In production, this would likely be fetched from the Sabi Core Node/Prisma backend
 * based on the subdomain or tenant ID.
 */
export const acmeResearchConfig = {
  orgName: 'Acme Research Institute',
  logoUrl: 'https://placehold.co/40x40/0f766e/ffffff?text=AR',
  theme: {
    primary: '#0f766e',       // Teal-700
    primaryForeground: '#ffffff',
    sidebarBg: '#134e4a',     // Teal-900
    sidebarText: '#ccfbf1',   // Teal-100
  }
};

export const globexMedConfig = {
  orgName: 'Globex Medical Data',
  logoUrl: 'https://placehold.co/40x40/4338ca/ffffff?text=GM',
  theme: {
    primary: '#4338ca',       // Indigo-700
    primaryForeground: '#ffffff',
    sidebarBg: '#312e81',     // Indigo-900
    sidebarText: '#e0e7ff',   // Indigo-100
  }
};
