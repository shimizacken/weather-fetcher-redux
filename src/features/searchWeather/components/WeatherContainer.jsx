import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { MetricRadioButtons, setTempUnit } from 'app/features/metricType';
import { Loader, SearchBox } from 'app/components/common';
import { token } from 'app/services/openWeatherMap/token';
import { buildApiUrl } from 'app/services/openWeatherMap/utils';
import { Units } from 'app/services/openWeatherMap/units';
import { selectMetricType } from 'app/features/metricType';
import { WeatherDetailsContainer } from './details/WeatherDetailsContainer';
import { ErrorMessage } from './ErrorMessage';
import { fetchWeather } from '../bll/fetchWeather';
import { selectFetchWeatherFlag, selectSearchResult } from '../state/weatherSelectors';
import { searchWeather, setWeather } from '../state/weatherActions';
import styles from './WeatherContainer.scss';

export const WeatherContainer = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [displayResult, setDisplayResult] = useState(false);

  const isFetchingWeather = useSelector(selectFetchWeatherFlag);
  const metricType = useSelector(selectMetricType);
  const weather = useSelector(selectSearchResult);

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

  useEffect(() => {
    if (weather?.name) {
      setDisplayResult(true);
    }
  }, [weather]);

  return (
    <div className={styles.mainWeatherWrapper}>
      <div className={styles.innerWrapper}>
        <div className={classNames(displayResult && styles.moveDown)}>
          <form onSubmit={search}>
            <SearchBox
              value={cityName}
              onChange={onChange}
              disabled={isFetchingWeather}
              displayResult={displayResult}
            />
          </form>
          <MetricRadioButtons radioChanged={radioChanged} />
        </div>
        <div
          className={classNames(styles.resultsWrapper, displayResult && styles.result, displayResult && styles.moveUp)}
          data-cy="search-results"
        >
          <div>{displayResult && <WeatherDetailsContainer />}</div>
          {isFetchingWeather && <Loader />}
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      </div>
    </div>
  );
};
