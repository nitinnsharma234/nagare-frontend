import React, { createContext, ReactNode, useEffect, useState } from 'react';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    // Update the class on the root element based on the theme
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    // Persist the theme in local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeProvider, ThemeContext };
