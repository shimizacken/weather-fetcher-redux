import React from 'react';
import PropTypes from 'prop-types';
import { buildIconUrl } from 'app/services/openWeatherMap/utils';
import styles from './MainDetails.scss';

export const MainDetails = React.memo(({ currentWeather, description, temperature, icon }) => (
  <div className={styles.mainDetailsWrapper}>
    <div className={styles.iconWrapper}></div>
    <span>
      <span className={styles.temperature}>{temperature}</span> °C
    </span>
    <div className={styles.currentDescription}>
      <img src={buildIconUrl(icon)} title={currentWeather} width={50} height={50} /> <h1>{currentWeather}</h1>{' '}
      <span className={styles.sss}>{description}</span>
    </div>
  </div>
));

MainDetails.propTypes = {
  currentWeather: PropTypes.string,
  description: PropTypes.string,
  temperature: PropTypes.number,
  icon: PropTypes.string
};
