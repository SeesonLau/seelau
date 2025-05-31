import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '@/styles/index/section3.module.css';

const projects = {
  software: [
    {
      id: 1,
      image: '/projects/mm-software.png',
      description: 'Mentor Match'
    },
    {
      id: 2,
      image: '/projects/opticare-software.png',
      description: 'Opticare'
    },
    {
      id: 3,
      image: '/projects/cook-software.png',
      description: 'What Can I Cook?'
    },
    {
      id: 4,
      image: '/projects/bits-software.png',
      description: 'Bus Integrated Ticketing System'
    }
  ],
  hardware: [
    {
      id: 1,
      image: '/projects/audioamp-hardware.jpg',
      description: 'Audio Amplifier'
    },
    {
      id: 2,
      image: '/projects/ironmyan-hardware.jpg',
      description: 'Iron Myan'
    },
    {
      id: 3,
      image: '/projects/chariot-hardware.jpg',
      description: 'Self-Navigating Vehicle'
    }
  ]
};

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectType, setProjectType] = useState('software');
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (isMobile || isAnimating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects[projectType].length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projectType, isMobile, isAnimating]);

  const nextImage = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects[projectType].length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevImage = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projects[projectType].length) % projects[projectType].length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const toggleProjectType = (type) => {
    if (projectType !== type) {
      setIsAnimating(true);
      setProjectType(type);
      setCurrentIndex(0);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <section className={styles.section} id="projects">
      <div className={styles.sectionTitleContainer}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.sectionSubtitle}>Explore my creative work</p>
      </div>
      
      <div className={styles.projectContainer}>
        <div className={styles.projectTypeSelector}>
          <div className={styles.typeButtonsContainer}>
            <button
              className={`${styles.typeButton} ${projectType === 'software' ? styles.active : ''}`}
              onClick={() => toggleProjectType('software')}
            >
              Software
            </button>
            <button
              className={`${styles.typeButton} ${projectType === 'hardware' ? styles.active : ''}`}
              onClick={() => toggleProjectType('hardware')}
            >
              Hardware
            </button>
          </div>
        </div>
        
        <div className={styles.projectCarousel}>
          <div className={styles.carouselContent}>
            <div className={`${styles.projectImageContainer} ${isMobile ? styles.mobileImageContainer : ''} ${isAnimating ? styles.animating : ''}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={projects[projectType][currentIndex].image}
                  alt={`${projectType} project ${currentIndex + 1}`}
                  width={800}
                  height={800}
                  className={styles.projectImage}
                  priority
                />
              </div>
            </div>
            <p className={styles.projectDescription}>
              {projects[projectType][currentIndex].description}
            </p>
            
            <div className={styles.carouselNavigation}>
              <button 
                className={styles.carouselButton} 
                onClick={prevImage}
                aria-label={`Previous ${projectType} image`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className={styles.carouselIndicators}>
                {projects[projectType].map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.carouselIndicator} ${currentIndex === index ? styles.active : ''}`}
                    onClick={() => {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 300);
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                className={styles.carouselButton} 
                onClick={nextImage}
                aria-label={`Next ${projectType} image`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.buttonContainer}>
        <Link href="/projects" className={styles.learnMoreButton}>
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default Section3;
