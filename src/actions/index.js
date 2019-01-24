import { 
    SET_WEATHER,
    SET_CURRENT_WEATHER,
    API,
    START_FETCH_WEATHER,
    END_FETCH_WEATHER 
} from '../constants';

export const setWeather = weather => ({
    type: SET_WEATHER,
    weather
});

export const setCurrentWeather = currentWeather => ({
    type: SET_CURRENT_WEATHER,
    currentWeather
});

export const fetchWeather = (url) => ({
  type: API,
  payload: {
      url: url,
      success: (weather) => setWeather(weather)
  }
});

export const startFetchWeather = () => ({
  type: START_FETCH_WEATHER
});

export const endFetchWeather = () => ({
    type: END_FETCH_WEATHER
  });

