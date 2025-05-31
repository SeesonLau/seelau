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
      const currentScrollY = window.scrollY;

      // Hide/show logic - only hide if scrolling down, show if scrolling up
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrolledDown]);

  return (
    <nav className={`${styles.sectionNav} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navCurveLeft}></div>
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
              >
                <span className={styles.linkText}>{item.name}</span>
                <span className={styles.linkIndicator}></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.navCurveRight}></div>
      </div>
    </nav>
  );
};

export default SectionNav;
