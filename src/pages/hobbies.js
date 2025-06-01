import Layout from '@/components/layout';
import styles from '@/styles/page.module.css';

export default function Hobbies() {
  const hobbies = [
    {
      id: 1,
      title: 'Gaming',
      description: 'Casdasdasdas',
      details: [
        'detailsssssssssssssssssssssssssssssssss here',
        'detailsssssssssssssssssssssssssssssssss here',
        'detailsssssssssssssssssssssssssssssssss here'
      ],
      images: ['/hutao.jpg', '/hutao.jpg', '/hutao.jpg']
    },
    {
      id: 2,
      title: 'Anime & Manga',
      description: 'Enthusiastic consumer and analyst of Japanese animation and comics',
      details: [
        'detailsssssssssssssssssssssssssssssssss here',
        'Adetailsssssssssssssssssssssssssssssssss here',
        'detailsssssssssssssssssssssssssssssssss here'
      ],
      images: ['/hutao.jpg', '/hutao.jpg']
    },
    {
      id: 3,
      title: 'Electronics',
      description: 'bzzzz',
      details: [
        'detailsssssssssssssssssssssssssssssssss here',
        'detailsssssssssssssssssssssssssssssssss here',
        'detailsssssssssssssssssssssssssssssssss here'
      ],
      images: ['/hutao.jpg', '/hutao.jpg', '/hutao.jpg']
    }
  ];

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>My Hobbies & Interests</h1>
        
        <section className={styles.section}>
          {hobbies.map((hobby) => (
            <div key={hobby.id} className={styles.hobbySection}>
              <h2 className={styles.hobbyTitle}>{hobby.title}</h2>
              <p className={styles.hobbyDescription}>{hobby.description}</p>
              
              <div className={styles.hobbyDetails}>
                <ul className={styles.list}>
                  {hobby.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                
                <div className={styles.hobbyGallery}>
                  {hobby.images.map((image, i) => (
                    <img 
                      key={i}
                      src={image} 
                      alt={hobby.title} 
                      className={styles.hobbyImage}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Current Favorites</h2>
          <div className={styles.favoritesGrid}>
            <div className={styles.favoriteCard}>
              <h3>Favorite Game</h3>
              <p>Placeholder Title Thing Here</p>
              <img src="/hutao.jpg" alt="Favorite game" className={styles.favoriteImage} />
            </div>
            <div className={styles.favoriteCard}>
              <h3>Favorite Anime</h3>
              <p>Placeholder Title Thing Here</p>
              <img src="/hutao.jpg" alt="Favorite anime" className={styles.favoriteImage} />
            </div>
            <div className={styles.favoriteCard}>
              <h3>Favorite Manga</h3>
              <p>Placeholder Title Thing Here</p>
              <img src="/hutao.jpg" alt="Favorite manga" className={styles.favoriteImage} />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
