import { createContext, useState } from 'react';

export const ThemeContext = createContext('light');

const Index: React.FC = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <button
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        toggle
      </button>
    </ThemeContext.Provider>
  );
};

export default Index;
