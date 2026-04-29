import React from 'react';
import styles from './styles.module.css';

const Header1 = ({
  title = 'Header 1 Section',
  subtitle = 'This is the first header section with descriptive content.'
}) => {
  return (
    <section className={styles.header}>
      <h2 className={styles.header__title}>{title}</h2>
      <p className={styles.header__subtitle}>{subtitle}</p>
    </section>
  );
};

export default Header1;