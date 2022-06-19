import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useTheme } from './use-theme';
import { ModeSwitcher } from './ThemeSwitcher.styles';

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}{' '}
      <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
    </ModeSwitcher>
  );
};

export { ThemeSwitcher };
