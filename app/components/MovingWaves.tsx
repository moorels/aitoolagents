'use client'
import React from 'react';
import styles from './MovingWaves.module.css';

const MovingWaves: React.FC = () => {
  return (
    <div className={styles.waveBackground}>
      <div className={`${styles.waveLayer} ${styles.wave1}`} />
      <div className={`${styles.waveLayer} ${styles.wave2}`} />
      <div className={`${styles.waveLayer} ${styles.wave3}`} />
    </div>
  );
};

export default MovingWaves;
