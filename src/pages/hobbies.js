import Layout from '@/components/layout';
import styles from '../styles/Page.module.css';

export default function Hobbies() {
  const hobbies = [
    {
      id: 1,
      title: 'Gaming',
      description: 'Competitive gaming and exploring game design principles',
      details: [
        'Ranked in top 500 players in Valorant',
        'Participation in local esports tournaments',
        'Game modding and level design'
      ],
      images: ['/hutao.jpg', '/hutao.jpg', '/hutao.jpg']
    },
    {
      id: 2,
      title: 'Anime & Manga',
      description: 'Enthusiastic consumer and analyst of Japanese animation and comics',
      details: [
        'Collection of 200+ manga volumes',
        'Anime blog with 10k monthly readers',
        'Participation in cosplay events'
      ],
      images: ['/hutao.jpg', '/hutao.jpg']
    },
    {
      id: 3,
      title: 'Photography',
      description: 'Capturing moments and exploring visual storytelling',
      details: [
        'Specialize in landscape and urban photography',
        'Exhibited in local art gallery',
        'Post-processing with Lightroom and Photoshop'
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
              <p>Genshin Impact</p>
              <img src="/hutao.jpg" alt="Favorite game" className={styles.favoriteImage} />
            </div>
            <div className={styles.favoriteCard}>
              <h3>Favorite Anime</h3>
              <p>Attack on Titan</p>
              <img src="/hutao.jpg" alt="Favorite anime" className={styles.favoriteImage} />
            </div>
            <div className={styles.favoriteCard}>
              <h3>Favorite Manga</h3>
              <p>Berserk</p>
              <img src="/hutao.jpg" alt="Favorite manga" className={styles.favoriteImage} />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
