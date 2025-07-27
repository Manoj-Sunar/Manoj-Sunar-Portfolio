import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../Context/ThemeContextProvider';

 // make sure path is correct

const Theme = () => {
  const { theme, toggleTheme } = useTheme(); // ✅ FIXED: add ()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-900 dark:bg-gray-200 hover:scale-105 transition"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <Moon size={20} color='#fff'/> : <Sun size={20} />}
    </button>
  );
};

export default Theme;
