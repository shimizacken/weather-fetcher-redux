import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeatherDetailsContainer.scss';

export const Title = React.memo(({ name, country }) => {
  return (
    <h2>
      {name} <span className={styles.country}>({country})</span> weather now
    </h2>
  );
});

Title.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string
};
