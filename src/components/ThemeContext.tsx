'use client'

import { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const defaultValue: ThemeContextType = {
  isDark: false,
  toggleTheme: () => {
    console.warn('toggleTheme called outside of ThemeProvider');
  },
};

const ThemeContext = createContext<ThemeContextType>(defaultValue);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(defaultValue.isDark);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className='h-screen w-screen fixed top-0' style={{ backgroundColor: isDark ? '#000' : '#fff', color: isDark ? '#fff' : '#000' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
