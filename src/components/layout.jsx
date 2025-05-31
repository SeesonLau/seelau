import Header from '@/components/header';
import Footer from '@/components/footer';
import { useTheme } from '@/utils/themeContext';
import styles from '@/styles/layout.module.css';

const Layout = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className={styles.layout} data-theme={theme}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
