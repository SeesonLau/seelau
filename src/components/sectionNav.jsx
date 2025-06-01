import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/sectionNav.module.css';

const SectionNav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('section1');
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const currentScrollY = window.scrollY;

      // Hide/show logic
      if (currentScrollY <= 100) {
        setIsHidden(false);
        setScrolledDown(false);
      } else if (currentScrollY > lastScrollY && !scrolledDown) {
        setIsHidden(true);
        setScrolledDown(true);
      } else if (currentScrollY < lastScrollY && scrolledDown) {
        setIsHidden(false);
        setScrolledDown(false);
      }

      setLastScrollY(currentScrollY);

      // Active section detection
      const sections = ['section1', 'section2', 'section3', 'section4'];
      const scrollPosition = currentScrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Throttle scroll handler
    const throttledScroll = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    window.addEventListener('scroll', throttledScroll(), { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll());
  }, [lastScrollY, scrolledDown]);

  return (
    <nav 
      className={`${styles.sectionNav} ${isHidden ? styles.hidden : ''}`}
      aria-label="Section navigation"
    >
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          {[
            { id: 'section1', name: 'What "I"' },
            { id: 'section3', name: 'I did' },
            { id: 'section4', name: 'I do' },
            { id: 'section2', name: 'I know' }
          ].map((item) => (
            <li key={item.id} className={styles.navItem}>
              <Link
                href={`#${item.id}`}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                scroll={false}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <span className={styles.linkText}>{item.name}</span>
                <span className={styles.linkIndicator}></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SectionNav;
