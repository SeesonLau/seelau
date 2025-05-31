import { useEffect, useRef } from 'react';
import Layout from '@/components/layout';
import Section1 from '@/components/index/section1';
import Section2 from '@/components/index/section2';
import Section3 from '@/components/index/section3';
import Section4 from '@/components/index/section4';
import styles from '@/styles/Home.module.css';
import SectionNav from '@/components/sectionNav';
import Link from 'next/link';

export default function Home({ hobbies }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = Math.floor(window.innerWidth * window.innerHeight / 5000);

    // Get current theme colors
    const root = document.documentElement;
    const getColor = (varName) =>
      getComputedStyle(root).getPropertyValue(varName).trim();

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.5
          ? getColor('--glow-primary')
          : getColor('--glow-secondary')
      });
    }

    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <Layout>
      {/* Full-screen background elements - ORDER MATTERS */}
      <div className={styles.gradientBg}></div>
      <canvas
        ref={canvasRef}
        className={styles.particlesCanvas}
      ></canvas>

    <SectionNav/>

      {/* Page content */}
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>Hello There!</span>
              <span className={styles.titleLine2}>My Name is</span>
              <span className={styles.titleName}>John Laurence G. Sison</span>
            </h1>
            <p className={styles.heroSubtitle}>Computer Engineering Student | Ice Cream Enjoyer | Just Human</p>
            <Link href="/projects" className={styles.ctaButton}>
              Explore My Work
            </Link>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <img
                src="/home-page/home-photo.JPG"
                alt="Profile"
                className={styles.profileImage}
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </section>

        <section id="section1">
          <Section1 />
        </section>
        
        <section id="section3">
          <Section3 />
        </section>
        
        <section id="section4">
          <Section4 hobbies={hobbies} />
        </section>
        
        <section id="section2">
          <Section2 />
        </section>

      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const hobbies = [
    {
      id: 1,
      title: 'Gaming',
      images: Array(6).fill('/hutao.jpg'),
      description: 'Competitive gaming and development'
    },
    {
      id: 2,
      title: 'Anime',
      images: Array(6).fill('/hutao.jpg'),
      description: 'Analyzing storytelling techniques'
    },
    {
      id: 3,
      title: 'Manga',
      images: Array(6).fill('/hutao.jpg'),
      description: 'Collecting rare editions'
    },
    {
      id: 4,
      title: 'Electronics',
      images: Array(6).fill('/hutao.jpg'),
      description: 'Circuit design & prototyping'
    }
  ];

  return {
    props: { hobbies }
  };
}

