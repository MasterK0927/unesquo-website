import React from 'react';
import Image from 'next/image';
import unesquoLogo from '../../../../public/logo.png';
import styles from './UnesquoLoading.module.css';

const UnesquoLoading: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.rippleTextContainer}>
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className={styles.rippleText}
            style={{
              '--random-x': `${Math.random() * 100 - 50}vw`,
              '--random-y': `${Math.random() * 100 - 50}vh`,
            } as React.CSSProperties}
          >
            UNESQUO
          </span>
        ))}
      </div>
      <div className={styles.finalLogoContainer}>
        <Image src={unesquoLogo} alt="UNESQUO Logo" className={styles.finalLogo} />
        <p className={styles.finalText}>BIT Mesra</p>
      </div>
    </div>
  );
};

export default UnesquoLoading;