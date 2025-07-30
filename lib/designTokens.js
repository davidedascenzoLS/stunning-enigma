// lib/designTokens.js
export const designTokens = {
    // Breakpoints
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    
    // Durata animazioni
    animation: {
      fast: 0.15,
      normal: 0.3,
      slow: 0.5,
    },
    
    // Z-index
    zIndex: {
      overlay: 40,
      modal: 50,
      dropdown: 30,
      header: 20,
      footer: 10,
    },
    
    // Varianti di overlay
    overlays: {
      light: 'bg-white/50 backdrop-blur-sm',
      dark: 'bg-black/50 backdrop-blur-sm',
      gradient: 'bg-overlay-gradient',
    },
    
    // Bordi
    borders: {
      thin: 'border border-neutral-200',
      medium: 'border-2 border-neutral-300',
      accent: 'border-2 border-accent-400',
    },
    
    // Ombre
    shadows: {
      sm: 'shadow-sm',
      md: 'shadow',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    }
  };
