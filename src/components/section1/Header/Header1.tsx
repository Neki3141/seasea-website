import React from 'react';
import styles from './styles.module.css';

interface Header1Props {
  title: string;
  subtitle: string;
}

const Header1: React.FC<Header1Props> = ({ title = 'Header 1 Section', subtitle = 'This is the first header section with descriptive content.' }) => {
  return (
    <section className={styles.header}>
      <h2 className={styles.header__title}>{title}</h2>
      <p className={styles.header__subtitle}>{subtitle}</p>
    </section>
  );
};

export default Header1;