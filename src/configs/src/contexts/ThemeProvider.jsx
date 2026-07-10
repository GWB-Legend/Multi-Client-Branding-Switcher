import { useEffect, useRef } from 'react';

/**
 * Drives the Sabi Core theme by injecting CSS custom properties 
 * onto a scoped wrapper div. This keeps JSX clean and avoids inline styles.
 */
export default function ThemeProvider({ clientConfig, children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !clientConfig?.theme) return;

    const root = containerRef.current;
    const { theme } = clientConfig;

    // Map config to CSS variables
    root.style.setProperty('--color-primary', theme.colorPrimary);
    root.style.setProperty('--color-primary-hover', theme.colorPrimaryHover);
    root.style.setProperty('--color-surface', theme.colorSurface);
    root.style.setProperty('--color-text-primary', theme.colorTextPrimary);
    root.style.setProperty('--color-text-secondary', theme.colorTextSecondary);
    root.style.setProperty('--color-border', theme.colorBorder);
    root.style.setProperty('--font-family', theme.fontFamily);

  }, [clientConfig]);

  return (
    <div 
      ref={containerRef} 
      className="theme-provider-root"
      style={{ fontFamily: 'var(--font-family)' }}
      aria-label={`${clientConfig?.orgName || 'Client'} dashboard environment`}
    >
      {children}
    </div>
  );
}
