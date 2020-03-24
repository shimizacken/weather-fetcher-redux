import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MetricRadioButtons, setTempUnit } from 'app/features/metricType';
import { Loader, SearchBox } from 'app/components/common';
import { token } from 'app/services/openWeatherMap/token';
import { buildApiUrl } from 'app/services/openWeatherMap/utils';
import { Units } from 'app/services/openWeatherMap/units';
import { selectMetricType } from 'app/features/metricType';
import { WeatherDetailsContainer } from './details/WeatherDetailsContainer';
import { ErrorMessage } from './ErrorMessage';
import { fetchWeather } from '../bll/fetchWeather';
import { selectIsSearchWeatherFetching, selectIsSearchWeatherFailed } from '../state/weatherSelectors';
import { searchWeather, setWeather } from '../state/weatherActions';
import styles from './WeatherContainer.scss';

export const WeatherContainer = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isSearchWeatherFetching = useSelector(selectIsSearchWeatherFetching);
  const isSearchWeatherFailed = useSelector(selectIsSearchWeatherFailed);
  console.log(isSearchWeatherFailed);
  const metricType = useSelector(selectMetricType);

  const searchByCityNameUrl = buildApiUrl(token(), metricType);

  const resetDetails = () => {
    setErrorMessage('');
    dispatch(setWeather({}));
  };

  const search = (e) => {
    e.preventDefault();

    if (cityName === '') {
      return;
    }

    resetDetails();

    const url = searchByCityNameUrl(cityName);

    dispatch(searchWeather(() => fetchWeather(url)));
  };

  const onChange = (e) => {
    setCityName(e.target.value);
  };

  const radioChanged = (e) => {
    resetDetails();
    dispatch(setTempUnit(Units[e.target.value]));
  };

  return (
    <div className={styles.mainWeatherWrapper}>
      <div className={styles.innerWrapper}>
        <form onSubmit={search}>
          <SearchBox value={cityName} onChange={onChange} disabled={isSearchWeatherFetching} />
        </form>
        <MetricRadioButtons radioChanged={radioChanged} />
        <div className={styles.resultsWrapper} data-cy="search-results">
          <div className={styles.detailsWrapper}>
            <WeatherDetailsContainer />
          </div>
          {isSearchWeatherFetching && <Loader />}
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      </div>
    </div>
  );
};
