// components/ThemeProvider.js
'use client'

import { createContext, useContext } from 'react';
import { designTokens } from '@/lib/designTokens';

// Crea il context
const ThemeContext = createContext(designTokens);

// Custom hook per usare il tema
export function useTheme() {
  return useContext(ThemeContext);
}

// Provider componente
export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={designTokens}>
      {children}
    </ThemeContext.Provider>
  );
}