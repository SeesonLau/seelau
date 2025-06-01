import Layout from '@/components/layout';
import styles from '@/styles/page.module.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C#', level: 95 },
        { name: 'Python', level: 70 },
        { name: 'C/C++', level: 85 },
        { name: 'Javascript', level: 85 },
        { name: 'TypeScript', level: 60 }
      ]
    },
    {
      title: 'Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: '.NET', level: 90 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 100 },
        { name: 'AutoCad Eagle', level: 80 },
        { name: 'AutoCad Autodesk', level: 95 },
        { name: 'Cisco Packet Tracer', level: 95 },
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
            Things I know and my proficiency with them:
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
              <h3>Technical Drafting NC II</h3>
              <p className={styles.subtitle}>TESDA, 2020</p>
              <p>details hereeeeeeeeeeeeee.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
