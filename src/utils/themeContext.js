import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default'); // 'default', 'palette2', 'palette3'

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'default') return 'palette2';
      if (prev === 'palette2') return 'palette3';
      return 'default';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
