import Layout from '@/components/layout';
import styles from '@/styles/page.module.css';

export default function AcademicLife() {
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>My Academic Life</h1>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Bachelor of Science in Computer Engineering</h3>
                <p className={styles.timelineDate}>Cebu Institute of Technology - University, 2022-2026</p>
                <p>Key Achievements</p>
                <ul className={styles.list}>
                  <li>GWA: 4.57 out of 5.00</li>
                  <li>Consistent Dean's Lister</li>
                  <li>Placed Top 7 in the Teknoy GEAS Gauntlet Engineering Competition</li>
                  <li>Won Best Use of AI in the Cebu Hacktoberfest Hackathon</li>
                  <li>Institute of Computer Engineers of the Philippines Student Edition CIT-U Chapter President</li>
                  <li>Founded the CpE Programming Club</li>
                  <li>Senior Graduate of Peer Mentors Academy CIT-U Honor Socity</li>
                  <li>Quiz Bowl Departmental Champion</li>
                </ul>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Senior High School Diploma</h3>
                <p className={styles.timelineDate}>Cebu Institute of Technology - University, 2020-2022</p>
                <p>Key Achievements</p>
                <ul className={styles.list}>
                  <li>Graduated with Honors</li>
                </ul>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>High School Diploma</h3>
                <p className={styles.timelineDate}>University of Cebu - Maritime Education and Training Center, 2016-2020</p>
                <p>Key Achievements</p>
                <ul className={styles.list}>
                  <li>Graduated with High Honors</li>
                  <li>Quiz Bowl Champion in Highschool and Senior Highschool sector</li>
                </ul>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Elementary Diploma</h3>
                <p className={styles.timelineDate}>Punta Princesa Elementary School, 2007-2016</p>
                <p>Key Achievements</p>
                <ul className={styles.list}>
                  <li>Special Science Class Graduate</li>
                  <li>Did kinder 1 twice :D</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Extracurricular Activities</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Institute of Computer Engineers of the Philippines Region 7 Chapter</h3>
              <p className={styles.subtitle}>Vice President for External (August 2024-Present)</p>
              <p>What I did here:</p>
              <ul className={styles.list}>
                <li>Represented the organization at the regional level, building and maintaning strong external relations with academic and professional institutions.</li>
                <li>Builds partnerships with other organizations and sponsors.</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Institute of Computer Engineers of the Philippines Region 7 CIT-U Chapter</h3>
              <p className={styles.subtitle}>President (August 2024-June 2025)</p>
              <p>What I did here:</p>
              <ul className={styles.list}>
                <li>Founded the Programming Club.</li>
                <li>Spearheded events and initiatives that aligns with the CORE values of the organization.</li>
                <li>Full package role: EMCEE, Host, Event Coordinator, Marketing Lead, Security Staff, Technical Staff, Logistic Staff, tig-paminaw kasaba staff.</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Cebu Hacktoberfest Hackathon</h3>
              <p className={styles.subtitle}>Full Stack Developer (October 2024)</p>
              <p>What I did here:</p>
              <ul className={styles.list}>
                <li>Designed and developed the frontend modal to generate the main feature's data.</li>
                <li>Coded the program's backend by fetching data from APIs.</li>
                <li>Created logos.</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>CIT-U Honor Society</h3>
              <p className={styles.subtitle}>Treasurer and Head of the Committee on Finance (2022-2025)</p>
              <p>What I did here:</p>
              <ul className={styles.list}>
                <li>Managed the Peer Learning Center.</li>
                <li>Senior Graduate of Peer Mentors Academy.</li>
                <li>Tutored students from different departments.</li>
                <li>Made financial documents and submitted reports to the Office of Admission and Scholarships.</li>
                <li>Managed the organization's funds.</li>
                <li>Spearheaded fundraising activities.</li>
                <li>Organized Quiz Bowl events.</li>
                <li>Participated in the organization's community extension programs.</li>
                <li>Volunteered as a working committee in the First Annual Leaders Summit.</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>CIT-U Supreme Student Government Committee on Internal Affairs</h3>
              <p className={styles.subtitle}>Orgnizational Management Officer Head (2023-2024)</p>
              <p>What I did here:</p>
              <ul className={styles.list}>
                <li>Spearheaded the welcoming week event.</li>
                <li>Collaborated with over 50 organizations in the University.</li>
                <li>Managed the University's organizational affairs.</li>
                <li>Participated as a working committee in SSG events.</li>
                <li>Volunteered in the Pasko sa Kabatan-onan sa Sugbo 2023.</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Gabii sa Kabilin</h3>
              <p className={styles.subtitle}>Volunteer (May 2025)</p>
              <p>What I did here:</p>
              <ul className={styles.list}>
                <li>Served as an usher, guiding guests through various cultural landmarks at CIT-University.</li>
                <li>Facilitated effective communication with the team lead and representatives from cultural sites.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
