import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { selectCurrentMetricTypeSymbol } from 'app/features/metricType';
import { selectSearchResult } from '../../state/weatherSelectors';
import { Title } from './Title';
import { MainDetails } from './MainDetails';
import styles from './WeatherDetailsContainer.scss';

export const WeatherDetailsContainer = () => {
  const weather = useSelector(selectSearchResult);
  const unitSymbol = useSelector(selectCurrentMetricTypeSymbol);

  if (isEmpty(weather)) {
    return null;
  }

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.cityName}>
        <Title name={weather.name} country={weather.country} />
      </div>
      <MainDetails
        currentWeather={weather.currentWeather}
        temperature={weather.temperature}
        description={weather.description}
        icon={weather.icon}
        unitSymbol={unitSymbol}
      />
    </div>
  );
};

WeatherDetailsContainer.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string,
    sys: PropTypes.shape()
  })
};
