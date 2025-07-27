// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const ThemeContext = createContext();

// Create a custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);

// Create the provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() =>
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        // Toggle the "dark" class on the <html> tag
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
