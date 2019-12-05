import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchBox } from '../../components/common';
import { token } from '../../services/openweathermap/token';
import { buildApiUrl } from '../../services/openweathermap/utils';
import { SET_WEATHER, SET_TEMP_TYPE, ADD_TO_SEARCH_HISTORY, API } from '../../constants';
import { WeatherDetails } from './details/WeatherDetails';
import { Loader } from '../../components/common';
import { ErrorMessage } from './errorMessage';
import { MetricRadioButtons } from './metricRadioButtons';
import { setWeather } from '../../actions';
import styles from './styles.scss';

const WeatherContainer = ({ 
  fetchWeather,
   setWeather,
    setTempType,
     fetchWeatherFlag,
      weather,
       metricType
      }) => {
        
  const [cityName, setCityName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const searchByCityNameUrl = buildApiUrl(token(), metricType);

  const search = e => {
    e.preventDefault();

    if (cityName === '') {
      return;
    }

    setErrorMessage('');
    setWeather('');

    const url = searchByCityNameUrl(cityName);
    fetchWeather(url);
  };

  const onChange = e => {
    setCityName(e.target.value);
  };

  const radioChanged = e => {
    setTempType(e.target.value);
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
              <WeatherDetails weatherData={weather} />
            </div>
          )}
          {fetchWeatherFlag && <Loader />}
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  weather: state.weather,
  metricType: state.metricType,
  searchHistory: state.searchHistory,
  fetchWeatherFlag: state.fetchWeatherFlag
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: url =>
    dispatch({
      type: API,
      payload: {
        url: url,
        success: weather => setWeather(weather)
      }
    }),
  setWeather: weather =>
    dispatch({
      type: SET_WEATHER,
      weather
    }),
  setTempType: tempType =>
    dispatch({
      type: SET_TEMP_TYPE,
      tempType
    })
});

const connected = connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);

export { connected as WeatherContainer };
