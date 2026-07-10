/**
 * Plausible mock data for two Sabi Core client deployments.
 * In production, this payload would be fetched from the Node/Express API
 * based on the instance's subdomain (e.g., novartis.sabicore.com).
 */
export const novartisConfig = {
  id: 'novartis',
  orgName: 'Novartis Research Hub',
  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Novartis_logo.svg',
  theme: {
    colorPrimary: '#007A73', // Novartis Teal
    colorPrimaryHover: '#005C57',
    colorSurface: '#F8F9FA',
    colorTextPrimary: '#1A1A1A',
    colorTextSecondary: '#525252',
    colorBorder: '#E0E0E0',
    fontFamily: "'Inter', sans-serif"
  }
};

export const baylorConfig = {
  id: 'baylor',
  orgName: 'Baylor Scott & White Institute',
  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Baylor_Scott_%26_White_Health_logo.svg',
  theme: {
    colorPrimary: '#005587', // Baylor Deep Blue
    colorPrimaryHover: '#003D61',
    colorSurface: '#FFFFFF',
    colorTextPrimary: '#111111',
    colorTextSecondary: '#4A4A4A',
    colorBorder: '#D1D5DB',
    fontFamily: "'Helvetica Neue', sans-serif"
  }
};
