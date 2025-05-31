import { useTheme } from '@/utils/themeContext';
import styles from '@/styles/ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className={styles.themeSwitcher}
      aria-label="Toggle theme"
    >
      {theme === 'default' && '🌙'}
      {theme === 'palette2' && '🌕'}
      {theme === 'palette3' && '🌑'}
    </button>
  );
}
