import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  // we dont want this logic to be happening on server side, or to render this html at all on server side
  // if (typeof window === 'undefined') return null;

  // const isClient = typeof window === 'undefined';

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <button
      onClick={isClient ? toggleTheme : null}
      className='
    dark:bg-green-900 dark:bg-opacity-20 dark:text-
    gray-50
    bg-green-100 text-gray-500 pl-2 pr-2 rounded-md
    text-xs
    p-1'
    >
      Toggle theme
    </button>
  );
};

export default ThemeSwitch;
