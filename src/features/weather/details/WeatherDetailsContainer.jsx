import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { selectSearchResult } from '../state/weather-selectors';
import { buildIconUrl } from '../../../services/openWeatherMap/utils';
import styles from './styles.scss';

export const WeatherDetailsContainer = () => {
  const { weather } = useSelector(selectSearchResult);

  if (isEmpty(weather)) {
    return null;
  }

  const city = weather.weather?.[0];
  const { main, wind, clouds } = weather;

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.cityName}>
        <h2>
          {weather.name} <span className={styles.country}>({weather.sys?.country})</span> weather now
        </h2>
      </div>
      <div className={styles.iconWrapper}>
        <img src={buildIconUrl(city?.icon)} title={city?.main} />
      </div>
      <div>
        <h1>{city?.main}</h1> / {city?.description}
      </div>
      <div>Temp: {main.temp}°</div>
      <div>Pressure: {main.pressure}</div>
      <div>Humidity: {main.humidity}%</div>
      <div>Wind: {wind.speed}</div>
      <div>Clouds: {clouds.all}</div>
    </div>
  );
};

WeatherDetailsContainer.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string,
    sys: PropTypes.shape({})
  })
};

WeatherDetailsContainer.defaultProps = {};
