import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MetricRadioButtons, setTempUnit } from 'app/features/metricType';
import { Loader, SearchBox } from 'components/common';
import { token } from 'app/services/openWeatherMap/token';
import { buildApiUrl } from 'app/services/openWeatherMap/utils';
import { WeatherDetailsContainer } from './details/WeatherDetailsContainer';
import { ErrorMessage } from './ErrorMessage';
import { setWeather, fetchWeather } from '..';
import { selectMetricType, selectFetchWeatherFlag } from '../state/weatherSelectors';
import styles from './WeatherContainer.scss';

export const WeatherContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchWeatherFlag = useSelector(selectFetchWeatherFlag);
  const metricType = useSelector(selectMetricType);

  const searchByCityNameUrl = buildApiUrl(token(), metricType);

  const resetDetails = () => {
    setErrorMessage('');
    dispatch(setWeather({}));
  };

  const search = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (cityName === '') {
      return;
    }

    resetDetails();

    const url = searchByCityNameUrl(cityName);

    dispatch(fetchWeather(url));
  };

  const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCityName(e.target.value);
  };

  const radioChanged = (e: { target: { value: any; }; }) => {
    resetDetails();
    dispatch(setTempUnit(e.target.value));
  };

  return (
    <div className={styles.mainWeatherWrapper}>
      <div className={styles.innerWrapper}>
        <form onSubmit={search}>
          <SearchBox value={cityName} onChange={onChange} displayLoader={fetchWeatherFlag} />
        </form>
        <MetricRadioButtons radioChanged={radioChanged} />
        <div className={styles.resultsWrapper} data-cy="search-results">
          <div>
            <WeatherDetailsContainer />
          </div>
          {fetchWeatherFlag && <Loader />}
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      </div>
    </div>
  );
};
