import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchBox } from '../../components/common';
import { token } from '../../services/openWeatherMap/token';
import { buildApiUrl } from '../../services/openWeatherMap/utils';
import { WeatherDetailsContainer } from './details/WeatherDetailsContainer';
import { Loader } from '../../components/common';
import { ErrorMessage } from './errorMessage';
import { MetricRadioButtons } from './metricRadioButtons';
import { setWeather, fetchWeather } from '../weather';
import { setTempType } from '../../actions';
import { 
  selectMetricType,
  selectFetchWeatherFlag,
  selectWeather
} from './state/weather-selectors';
import styles from './styles.scss';

export const WeatherContainer = () => {
  
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const weather = useSelector(selectWeather);
  const fetchWeatherFlag = useSelector(selectFetchWeatherFlag);
  const metricType = useSelector(selectMetricType);

  const searchByCityNameUrl = buildApiUrl(token(), metricType);

  const search = e => {
    e.preventDefault();

    if (cityName === '') {
      return;
    }

    setErrorMessage('');
    dispatch(setWeather({}));

    const url = searchByCityNameUrl(cityName);
    
    dispatch(fetchWeather(url));
  };

  const onChange = e => {
    setCityName(e.target.value);
  };

  const radioChanged = e => {
    dispatch(setTempType(e.target.value));
  };

  return (
    <div className={styles.mainWeatherWrapper}>
      <div className={styles.innerWrapper}>
        <form onSubmit={search}>
          <SearchBox value={cityName} onChange={onChange} displayLoader={fetchWeatherFlag} />
        </form>
        <MetricRadioButtons radioChanged={radioChanged} />
        <div className={styles.resultsWrapper}>
          {weather && (
            <div className={styles.detailsWrapper}>
              <WeatherDetailsContainer weatherData={weather} />
            </div>
          )}
          {fetchWeatherFlag && <Loader />}
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      </div>
    </div>
  );
};
