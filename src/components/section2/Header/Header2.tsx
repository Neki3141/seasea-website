import React from 'react';
import styles from './styles.module.css';

interface Header2Props {
  title: string;
  subtitle: string;
}

const Header2: React.FC<Header2Props> = ({ title = 'Header 2 Section', subtitle = 'This is the second header section with different content.' }) => {
  return (
    <section className={styles.header}>
      <h2 className={styles.header__title}>{title}</h2>
      <p className={styles.header__subtitle}>{subtitle}</p>
    </section>
  );
};

export default Header2;