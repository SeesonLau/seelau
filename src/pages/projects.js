import Layout from '@/components/layout';
import styles from '@/styles/page.module.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      type: 'Software',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      image: '/hutao.jpg'
    },
    {
      id: 2,
      title: 'Smart Home Controller',
      type: 'Hardware',
      description: 'IoT device to control home appliances with voice commands',
      technologies: ['Raspberry Pi', 'Python', 'AWS IoT', 'React Native'],
      image: '/hutao.jpg'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      type: 'Software',
      description: 'Personal portfolio website built with Next.js',
      technologies: ['Next.js', 'CSS Modules', 'Vercel'],
      image: '/hutao.jpg'
    },
    {
      id: 4,
      title: 'Autonomous Robot',
      type: 'Hardware',
      description: 'Line-following robot with object detection capabilities',
      technologies: ['Arduino', 'Computer Vision', 'PID Control'],
      image: '/hutao.jpg'
    }
  ];

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>My Projects</h1>
        
        <section className={styles.section}>
          <div className={styles.tabs}>
            <button className={`${styles.tabButton} ${styles.active}`}>All Projects</button>
            <button className={styles.tabButton}>Software</button>
            <button className={styles.tabButton}>Hardware</button>
          </div>
          
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.projectImage}
                  />
                  <span className={`${styles.projectType} ${
                    project.type === 'Software' ? styles.software : styles.hardware
                  }`}>
                    {project.type}
                  </span>
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techPill}>{tech}</span>
                    ))}
                  </div>
                  <button className={styles.viewButton}>View Project</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Open Source Contributions</h2>
          <div className={styles.card}>
            <h3>React Native Community</h3>
            <p className={styles.subtitle}>Contributor since 2022</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
            <ul className={styles.list}>
              <li>Fixed critical bug in navigation system</li>
              <li>Improved documentation for new contributors</li>
              <li>Implemented new feature for accessibility</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
