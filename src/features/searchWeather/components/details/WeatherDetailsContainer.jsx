import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { selectSearchResult, selectCurrentMetricTypeSymbol } from '../../state/weatherSelectors';
import { Title } from './Title';
import { MainDetails } from './MainDetails';
import styles from './WeatherDetailsContainer.scss';

export const WeatherDetailsContainer = () => {
  const { weather } = useSelector(selectSearchResult);
  const unitSymbol = useSelector(selectCurrentMetricTypeSymbol);

  if (isEmpty(weather)) {
    return null;
  }

  const city = weather.weather?.[0];
  const { main } = weather;

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.cityName}>
        <Title name={weather.name} country={weather.sys?.country} />
      </div>
      <MainDetails
        currentWeather={city?.main}
        temperature={main.temp}
        description={city?.description}
        icon={city?.icon}
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
