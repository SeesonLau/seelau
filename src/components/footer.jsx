import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from 'react-icons/fa';
import styles from '@/styles/footer.module.css';

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = 'seesonjohnlau@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contact}>
          <h3 className={styles.footerTitle}>Contact Me</h3>
          <p>{email}</p>
        </div>
        
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/SeesonLau"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className={styles.socialIcon} />
          </a>
          <a 
            href="https://www.linkedin.com/in/seelau"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={styles.socialIcon} />
          </a>
          <button 
            onClick={copyEmail}
            className={styles.socialLink}
            aria-label="Copy Email"
          >
            {emailCopied ? (
              <FaCheck className={styles.socialIcon} style={{ color: 'var(--color-accent)' }} />
            ) : (
              <FaEnvelope className={styles.socialIcon} />
            )}
          </button>
        </div>
      </div>
      
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Seeson. All rights reserved.
      </div>

      {emailCopied && (
        <div className={styles.copyNotification}>
          Email copied to clipboard!
        </div>
      )}
    </footer>
  );
};

export default Footer;
