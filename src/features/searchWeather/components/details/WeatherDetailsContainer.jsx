import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { Details } from './Details';
import { selectSearchResult } from '../../state/weatherSelectors';
import { buildIconUrl } from '../../../../services/openWeatherMap/utils';
import styles from './WeatherDetailsContainer.scss';

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
      <Details
        cityName={city?.main}
        description={city?.description}
        temperature={main.temp}
        pressure={main.pressure}
        humidity={main.humidity}
        speed={wind.speed}
        cloudsAll={clouds.all}
      />
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
