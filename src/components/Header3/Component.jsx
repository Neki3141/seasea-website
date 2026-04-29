import React from 'react';
import styles from './styles.module.css';

const Header3 = ({
  title = 'Header 3 Section',
  subtitle = 'This is the third header section, fully responsive.'
}) => {
  return (
    <section className={styles.header}>
      <h2 className={styles.header__title}>{title}</h2>
      <p className={styles.header__subtitle}>{subtitle}</p>
    </section>
  );
};

export default Header3;