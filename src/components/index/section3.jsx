import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '@/styles/index/section3.module.css';

const softwareImages = [
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
];

const hardwareImages = [
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
];

const Section3 = () => {
  const [currentSoftwareIndex, setCurrentSoftwareIndex] = useState(0);
  const [currentHardwareIndex, setCurrentHardwareIndex] = useState(0);

  // Auto-rotate carousels
  useEffect(() => {
    const softwareInterval = setInterval(() => {
      setCurrentSoftwareIndex((prev) => (prev + 1) % softwareImages.length);
    }, 5000);

    const hardwareInterval = setInterval(() => {
      setCurrentHardwareIndex((prev) => (prev + 1) % hardwareImages.length);
    }, 5000);

    return () => {
      clearInterval(softwareInterval);
      clearInterval(hardwareInterval);
    };
  }, []);

  const nextSoftwareImage = () => {
    setCurrentSoftwareIndex((prev) => (prev + 1) % softwareImages.length);
  };

  const prevSoftwareImage = () => {
    setCurrentSoftwareIndex((prev) => (prev - 1 + softwareImages.length) % softwareImages.length);
  };

  const nextHardwareImage = () => {
    setCurrentHardwareIndex((prev) => (prev + 1) % hardwareImages.length);
  };

  const prevHardwareImage = () => {
    setCurrentHardwareIndex((prev) => (prev - 1 + hardwareImages.length) % hardwareImages.length);
  };

  return (
    <section className={styles.section} id="projects">
      <div className={styles.sectionTitleContainer}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
      </div>
      
      <div className={styles.projectsGrid}>
        {/* Software Project */}
        <div className={styles.projectContainer}>
          <h3 className={styles.projectTypeTitle}>Software</h3>
          <div className={styles.projectCarousel}>
            <button 
              className={styles.carouselButton} 
              onClick={prevSoftwareImage}
              aria-label="Previous software image"
            >
              &lt;
            </button>
            
            <div className={styles.carouselContent}>
              <div className={styles.projectImageContainer}>
                <Image
                  src={softwareImages[currentSoftwareIndex].image}
                  alt={`Software project ${currentSoftwareIndex + 1}`}
                  width={500}
                  height={500}
                  className={styles.projectImage}
                  priority
                />
              </div>
              <p className={styles.projectDescription}>
                {softwareImages[currentSoftwareIndex].description}
              </p>
              <div className={styles.carouselIndicators}>
                {softwareImages.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.carouselIndicator} ${currentSoftwareIndex === index ? styles.active : ''}`}
                    onClick={() => setCurrentSoftwareIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <button 
              className={styles.carouselButton} 
              onClick={nextSoftwareImage}
              aria-label="Next software image"
            >
              &gt;
            </button>
          </div>
        </div>
        
        {/* Hardware Project */}
        <div className={styles.projectContainer}>
          <h3 className={styles.projectTypeTitle}>Hardware</h3>
          <div className={styles.projectCarousel}>
            <button 
              className={styles.carouselButton} 
              onClick={prevHardwareImage}
              aria-label="Previous hardware image"
            >
              &lt;
            </button>
            
            <div className={styles.carouselContent}>
              <div className={styles.projectImageContainer}>
                <Image
                  src={hardwareImages[currentHardwareIndex].image}
                  alt={`Hardware project ${currentHardwareIndex + 1}`}
                  width={500}
                  height={500}
                  className={styles.projectImage}
                  priority
                />
              </div>
              <p className={styles.projectDescription}>
                {hardwareImages[currentHardwareIndex].description}
              </p>
              <div className={styles.carouselIndicators}>
                {hardwareImages.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.carouselIndicator} ${currentHardwareIndex === index ? styles.active : ''}`}
                    onClick={() => setCurrentHardwareIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <button 
              className={styles.carouselButton} 
              onClick={nextHardwareImage}
              aria-label="Next hardware image"
            >
              &gt;
            </button>
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
