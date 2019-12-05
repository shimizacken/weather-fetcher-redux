import React from 'react';
import sun from '../../../assets/png/sun';
import styles from './styles.scss';

export const Loader = () => <img src={sun} className={styles.rotating} />;