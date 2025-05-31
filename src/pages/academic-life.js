import Layout from '@/components/layout';
import styles from '../styles/Page.module.css';

export default function AcademicLife() {
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>My Academic Journey</h1>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Bachelor of Science in Computer Science</h3>
                <p className={styles.timelineDate}>University of XYZ, 2020-2024</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
                <ul className={styles.list}>
                  <li>GPA: 3.8/4.0</li>
                  <li>Specialization in Artificial Intelligence</li>
                  <li>Dean's List all semesters</li>
                </ul>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>High School Diploma</h3>
                <p className={styles.timelineDate}>ABC High School, 2016-2020</p>
                <p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis.</p>
                <ul className={styles.list}>
                  <li>Valedictorian</li>
                  <li>President of Computer Club</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research Experience</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Machine Learning Research Assistant</h3>
              <p className={styles.subtitle}>ABC Lab, University of XYZ (2022-Present)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul className={styles.list}>
                <li>Developed novel neural network architectures</li>
                <li>Published 2 papers in top-tier conferences</li>
                <li>Mentored 3 undergraduate students</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Undergraduate Research Scholar</h3>
              <p className={styles.subtitle}>DEF Institute (Summer 2021)</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <ul className={styles.list}>
                <li>Researched natural language processing techniques</li>
                <li>Presented findings at university symposium</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Publications</h2>
          <div className={styles.publication}>
            <h3>"Advanced Neural Networks for Image Recognition"</h3>
            <p className={styles.subtitle}>International Conference on Machine Learning (ICML), 2023</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
