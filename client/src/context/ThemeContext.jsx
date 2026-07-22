//TO USE 
// import { useTheme } from '../context/ThemeContext';
// const { theme, toggleTheme, primaryColor, secondaryColor, tertiaryColor, primaryBackgroundColor, secondaryBackgroundColor} = useTheme();
import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
    
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));


  const themeColors = useMemo(() => {
      if (theme === 'light') {
        return {
          primaryColor: '#C17143',           
          secondaryColor: '#474f5c',        
          tertiaryColor: '#111827',              
          primaryBackgroundColor: '#ffffff', 
          secondaryBackgroundColor: '#474f5c',
          errorColor: "#be1515"
        };
      } else {
        return {
          primaryColor: '#C17143',           
          secondaryColor: '#FBB000',        
          tertiaryColor: '#111827',              
          primaryBackgroundColor: '#ffffff', 
          secondaryBackgroundColor: '#474f5c',
          errorColor: "#be1515"
        };
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, ...themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);