import React from 'react';
import styles from './styles.module.css';

interface IntroProps {
  title?: string;
  subtitle?: string;
}

const Intro: React.FC<IntroProps> = ({ title = 'Welcome to SeaSea', subtitle = 'Building modern, scalable web experiences with clean design' }) => {
  return (
    <section className={styles.intro}>
      <h1 className={styles.intro__title}>{title}</h1>
      <p className={styles.intro__subtitle}>{subtitle}</p>
    </section>
  );
};

export default Intro;