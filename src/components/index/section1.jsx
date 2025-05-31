import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/index/section1.module.css';

const academicItems = [
  {
    id: 1,
    image: '/home-page/coo-gearfolio.JPG',
    title: 'Chief Operating Officer',
    date: 'Jan 2025 - May 2025',
    company: 'Gearfolio'
  },
  {
    id: 2,
    image: '/home-page/fullstack-hacktoberfest.jpg',
    title: 'Full-Stack Developer',
    date: 'Oct 2024',
    company: 'Cebu Hacktober Fest 2024'
  },
  {
    id: 3,
    image: '/home-page/vp-icpepr7.JPG',
    title: 'Vice President',
    date: 'Aug 2024 - Present',
    company: 'Institute of Computer Engineers of the Philippines - Student Edition Region 7'
  },
  {
    id: 4,
    image: '/home-page/pres-icpep.jpg',
    title: 'President',
    date: 'Aug 2024 - Present',
    company: 'Institute of Computer Engineers of the Philippines - Student Edition Region 7 CIT-U Chapter'
  },
  {
    id: 5,
    image: '/home-page/geas-top7.jpg',
    title: 'Top 7 Finalist',
    date: 'Oct 2024',
    company: 'Cebu Institute of Technology - University General Engineering and Applied Sciences Competition'
  },
  {
    id: 6,
    image: '/home-page/treasurer-honsoc.jpg',
    title: 'Treasurer',
    date: 'May 2023 - Jun 2024',
    company: 'Cebu Institute of Technology - University Honors Society'
  },
  {
    id: 7,
    image: '/home-page/omo-ssg.jpg',
    title: 'Organizational Management Officer - Head',
    date: 'May 2023 - May 2024',
    company: 'SSG Committee on Internal Affairs'
  }
];

const Section1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % academicItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % academicItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? academicItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.section} id="academic">
      <h2 className={styles.sectionTitle}>Academic Journey</h2>
      <p className={styles.sectionSubtitle}>Key milestones and achievements throughout my academic career</p>
      
      <div className={styles.carouselContainer}>
        <button 
          className={styles.carouselArrowLeft} 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &lt;
        </button>
        
        <div 
          className={styles.carousel}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.carouselItem}>
            <div className={styles.carouselImageContainer}>
              <Image
                src={academicItems[currentIndex].image}
                alt={academicItems[currentIndex].title}
                width={600}
                height={600}
                className={styles.carouselImage}
                priority
              />
            </div>
            <div className={styles.carouselContent}>
              <div className={styles.contentHeader}>
                <span className={styles.itemDate}>{academicItems[currentIndex].date}</span>
                <h3 className={styles.itemTitle}>{academicItems[currentIndex].title}</h3>
                <span className={styles.itemCompany}>{academicItems[currentIndex].company}</span>
              </div>
            </div>
          </div>
          
          <div className={styles.carouselDots}>
            {academicItems.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <button 
          className={styles.carouselArrowRight} 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
      
      <Link href="/academic-life" className={styles.learnMoreButton}>
        View Full Journey
      </Link>
    </section>
  );
};

export default Section1;
