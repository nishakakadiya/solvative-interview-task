import React from 'react';
import logo from '../../assets/images/logo.png';
import styles from './TopBar.module.css';
const TopBar = () => {
  return (
    <div className={styles.container}>
      <img src={logo} />
    </div>
  );
};

export default TopBar;
