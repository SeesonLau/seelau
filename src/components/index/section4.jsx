import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from '@/styles/index/section4.module.css';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const MODAL_ANIMATION = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: 20 }
};

const CARD_STACK_ANIMATION = {
  initial: (index) => ({
    rotate: index === 1 ? 0 : index === 0 ? -5 : 5,
    y: index * -10
  }),
  animate: (expanded, index) => ({
    rotate: expanded ? 0 : index === 1 ? 0 : index === 0 ? -5 : 5,
    y: expanded ? index * -5 : index * -10
  })
};


const Section4 = ({ hobbies }) => {
  const [expandedHobby, setExpandedHobby] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const modalRef = useRef(null);


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

  // Add this useEffect to handle background scrolling
useEffect(() => {
  if (expandedHobby) {
    // Disable scrolling
    document.body.style.overflow = 'hidden';
  } else {
    // Re-enable scrolling
    document.body.style.overflow = '';
  }

  // Clean up on component unmount or state change
  return () => {
    document.body.style.overflow = '';
  };
}, [expandedHobby]);

 

  // Keyboard accessibility
  useEffect(() => {
    if (!expandedHobby) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
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

  const currentHobby = hobbies.find(h => h.id === expandedHobby);

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
              aria-label={`View ${hobby.title} collection`}
              role="button"
              tabIndex={0}
            >
              <AnimatePresence>
                {(!expandedHobby || expandedHobby === hobby.id) &&
                  hobby.images.slice(0, 3).map((image, index) => (
                    <motion.div
                      key={`${hobby.id}-${index}`}
                      className={styles.stackCard}
                      style={{
                        zIndex: 10 - index,
                        background: `hsl(${index * 30}, 80%, 90%)`
                      }}
                      custom={index}
                      initial={CARD_STACK_ANIMATION.initial}
                      animate={CARD_STACK_ANIMATION.animate(expandedHobby === hobby.id, index)}
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
                        priority={index === 0}
                        loading={index > 0 ? 'lazy' : undefined}
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
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div 
              className={styles.modalContent}
              variants={MODAL_ANIMATION}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 id="modal-title" className={styles.modalTitle}>
                {currentHobby?.title}
              </h3>
              <div className={styles.bookshelf}>
                {currentHobby?.images.map((image, index) => (
                  <motion.div
                    key={`modal-${index}`}
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
                      alt={`${currentHobby.title} ${index + 1}`} 
                      fill 
                      className={styles.bookImage}
                      priority={index < 3}
                    />
                  </motion.div>
                ))}
              </div>
              <motion.button
                className={styles.closeButton}
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close collection"
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
