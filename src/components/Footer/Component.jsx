import React from 'react';
import styles from './styles.module.css';

const Footer = ({
  copyright = `© ${new Date().getFullYear()} SeaSea Website. All rights reserved.`
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p className={styles.footer__text}>{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;