import React from 'react';
import styles from './styles.module.css';

interface Header4Props {
  title?: string;
  subtitle?: string;
}

const Header4: React.FC<Header4Props> = ({ title = 'Header 4 Section', subtitle = 'This is the fourth and final header section.' }) => {
  return (
    <section className={styles.header}>
      <h2 className={styles.header__title}>{title}</h2>
      <p className={styles.header__subtitle}>{subtitle}</p>
    </section>
  );
};

export default Header4;