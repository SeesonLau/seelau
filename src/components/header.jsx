import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/header.module.css';
import { useTheme } from '@/utils/themeContext';

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handlePaletteChange = () => {
    toggleTheme();
  };

  return (
    <header className={`${styles.header} ${isScrolledDown ? styles.hidden : ''}`}>
      <div 
        className={styles.logoContainer}
        onClick={handlePaletteChange}
        data-tooltip="Change color theme"
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

      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavActive : ''}`}>
        <ul className={styles.navList}>
          {['Home', 'Academic Life', 'Projects', 'Hobbies', 'Skills'].map((item) => (
            <li key={item} className={styles.navItem}>
              <Link
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className={styles.navLink}
                onClick={closeMobileMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button 
        className={styles.mobileMenuButton} 
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>
    </header>
  );
};

export default Header;
