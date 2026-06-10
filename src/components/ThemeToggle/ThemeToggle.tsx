import { MoonIcon, SunIcon } from 'components/Icons';
import { useTheme } from 'theme/theme-context';

import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = `Switch to ${isDark ? 'light' : 'dark'} theme`;

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <span className={styles.icon} key={theme}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
