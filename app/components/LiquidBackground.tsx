'use client'
import React from 'react';
import styles from './LiquidBackground.module.css';

const LiquidBackground: React.FC = () => {
  return (
    <div className={styles.liquidBackground}>
      <div className={styles.liquidLayer}>
        <img src="/liquid.svg" alt="" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default LiquidBackground;
