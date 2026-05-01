import React from 'react';
import styles from './styles.module.css';

interface Header3Props {
  title?: string;
  subtitle?: string;
}

const Header3: React.FC<Header3Props> = ({ title = 'Header 3 Section', subtitle = 'This is the third header section with additional content.' }) => {
  return (
    <section className={styles.header}>
      <h2 className={styles.header__title}>{title}</h2>
      <p className={styles.header__subtitle}>{subtitle}</p>
    </section>
  );
};

export default Header3;