"use client"
import React, { useState } from 'react';
import GenesisLanding from '../Components/Genesis/landing/Landing';
import styles from '../styles/genesis.module.css';

const Genesis: React.FC = () => {

  return (
    <div className={styles.container}>
      <GenesisLanding />
    </div>
  );
};

export default Genesis;
