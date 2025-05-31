import Layout from '@/components/layout';
import styles from '../styles/Page.module.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'TypeScript', level: 85 }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Data Science',
      skills: [
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 80 },
        { name: 'TensorFlow', level: 75 },
        { name: 'PyTorch', level: 70 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 80 },
        { name: 'VS Code', level: 95 }
      ]
    }
  ];

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>My Skills</h1>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Proficiency</h2>
          <p className={styles.sectionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
          </p>
          
          <div className={styles.skillsGrid}>
            {skillCategories.map((category, index) => (
              <div key={index} className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>{category.title}</h3>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, i) => (
                    <div key={i} className={styles.skillItem}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Advanced React Developer</h3>
              <p className={styles.subtitle}>React Institute, 2023</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.card}>
              <h3>AWS Certified Developer</h3>
              <p className={styles.subtitle}>Amazon Web Services, 2022</p>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={styles.card}>
              <h3>Python for Data Science</h3>
              <p className={styles.subtitle}>Data Science Council, 2021</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
