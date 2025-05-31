import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/index/section4.module.css';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Section4 = ({ hobbies }) => {
  const [expandedHobby, setExpandedHobby] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const modalRef = useRef(null);
  const scrollPositionRef = useRef(0);

  // Mouse position tracking for background effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handle scroll locking when modal opens/closes
  useEffect(() => {
    if (expandedHobby) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;
      
      // Lock scroll on body and html elements
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Restore scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
      
      // Restore scroll position
      window.scrollTo(0, scrollPositionRef.current);
    }

    return () => {
      // Cleanup
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    };
  }, [expandedHobby]);

  const handleExpand = (id) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setExpandedHobby(id);
  };

  const handleClose = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setExpandedHobby(null);
  };

  return (
    <section className={styles.section} ref={containerRef}>
      <h2 className={styles.sectionTitle}>My Hobbies</h2>
      <div className={styles.hobbiesContainer}>
        {hobbies.map((hobby) => (
          <motion.div
            key={hobby.id}
            className={styles.hobbyGroup}
            layout
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <motion.h3 className={styles.hobbyGroupTitle} layout="position">
              {hobby.title}
            </motion.h3>
            <motion.div
              className={styles.cardStack}
              onClick={() => handleExpand(hobby.id)}
              whileHover={!expandedHobby ? { scale: 1.05 } : {}}
              layout
            >
              <AnimatePresence>
                {(!expandedHobby || expandedHobby === hobby.id) &&
                  hobby.images.slice(0, 3).map((image, index) => (
                    <motion.div
                      key={index}
                      className={styles.stackCard}
                      style={{
                        zIndex: 10 - index,
                        background: `hsl(${index * 30}, 80%, 90%)`
                      }}
                      initial={{
                        rotate: index === 1 ? 0 : index === 0 ? -5 : 5,
                        y: index * -10
                      }}
                      animate={{
                        rotate: expandedHobby === hobby.id ? 0 : index === 1 ? 0 : index === 0 ? -5 : 5,
                        y: expandedHobby === hobby.id ? index * -5 : index * -10
                      }}
                      transition={{
                        duration: 0.7,
                        type: 'spring',
                        bounce: 0.3
                      }}
                      onAnimationComplete={() => setIsAnimating(false)}
                    >
                      <Image
                        src={image}
                        alt={`${hobby.title} ${index + 1}`}
                        fill
                        className={styles.stackImage}
                      />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
            <motion.p
              className={styles.hobbyDescription}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {hobby.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {expandedHobby && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            ref={modalRef}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className={styles.modalTitle}>
                {hobbies.find(h => h.id === expandedHobby).title}
              </h3>
              <div className={styles.bookshelf}>
                {hobbies.find((h) => h.id === expandedHobby).images.map((image, index) => (
                  <motion.div
                    key={index}
                    className={styles.book}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{
                      delay: index * 0.05,
                      type: 'spring',
                      stiffness: 100
                    }}
                  >
                    <Image 
                      src={image} 
                      alt={`${expandedHobby} ${index + 1}`} 
                      fill 
                      className={styles.bookImage} 
                    />
                  </motion.div>
                ))}
              </div>
              <motion.button
                className={styles.closeButton}
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Close Collection
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!expandedHobby && (
        <div className={styles.buttonWrapper}>
          <Link href="/hobbies" className={styles.learnMoreButton}>
            Explore All Hobbies
          </Link>
        </div>
      )}
    </section>
  );
};

export default Section4;
