import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/header.module.css';
import { useTheme } from '@/utils/themeContext';

// Import icons from react-icons
import { 
  FaHome, 
  FaGraduationCap, 
  FaProjectDiagram, 
  FaGamepad, 
  FaCode 
} from 'react-icons/fa';

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsScrolledDown(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolledDown(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolledDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handlePaletteChange = () => {
    toggleTheme();
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Academic Life', path: '/academic-life', icon: <FaGraduationCap /> },
    { name: 'Projects', path: '/projects', icon: <FaProjectDiagram /> },
    { name: 'Hobbies', path: '/hobbies', icon: <FaGamepad /> },
    { name: 'Skills', path: '/skills', icon: <FaCode /> }
  ];

  return (
    <header className={`${styles.header} ${isScrolledDown ? styles.hidden : ''}`}>
      <div 
        className={styles.logoContainer}
        onClick={handlePaletteChange}
        data-tooltip="Change color theme"
        aria-label="Change color theme"
      >
        <div className={styles.circleLogo}>
          <div className={styles.circleInner}>
            <div className={styles.circleSegment}></div>
            <div className={styles.circleSegment}></div>
            <div className={styles.circleSegment}></div>
          </div>
        </div>
        <div className={styles.logoText}>
          SEESON
        </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.name} className={styles.navItem}>
              <Link
                href={item.path}
                className={styles.navLink}
                prefetch={true}
                aria-current={typeof window !== 'undefined' && window.location.pathname === item.path ? 'page' : undefined}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navText}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
