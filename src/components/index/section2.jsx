import styles from '@/styles/index/section2.module.css';
import Link from 'next/link';

const skills = [
  { category: 'Programming', items: ['C', 'C#', 'JavaScript', 'Python', 'Arduino'] },
  { category: 'Development', items: ['.NET', 'React', 'Next.js', 'Node.js', 'Express'] },
  { category: 'Electrical', items: ['Circuit Design and Analysis', 'Power Distribution', 'Embedded Systems', 'Signal Processing', 'Control Systems'] }
];

const Section2 = () => {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>My Skills</h2>
          <p className={styles.sectionSubtitle}>Technologies I work with</p>
        </div>
        
        <div className={styles.skillsGrid}>
          {skills.map((skillGroup, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>{skillGroup.category}</h3>
              <ul className={styles.skillList}>
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className={styles.skillItem}>
                    <span className={styles.skillBullet}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={styles.viewMoreContainer}>
          <Link href="/skills" className={styles.viewMoreButton}>
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section2;
