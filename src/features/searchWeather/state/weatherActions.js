import {
  SET_WEATHER,
  SET_WEATHER_END,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER
} from './constants';

export const searchWeather = promiseFunc => ({
  type: FETCH_WEATHER,
  payload: promiseFunc
});

export const setWeather = weather => ({
  type: SET_WEATHER,
  weather
});

export const setWeatherEnd = {
  type: SET_WEATHER_END
};

export const fetchWeatherPending = {
  type: FETCH_WEATHER_PENDING
};

export const fetchWeatherSuccess = weather => ({
  type: FETCH_WEATHER_SUCCESS,
  weather
});

export const fetchWeatherError = {
  type: FETCH_WEATHER_ERROR
};

// export const fetchWeather = url => dispatch => {
//   dispatch(fetchWeatherPending);
//   dispatch(setWeatherFetchFlag(true));

//   return fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       if (data && data.cod !== 200) {
//         throw data.message;
//       }

//       dispatch(setWeather(data));
//       dispatch(setWeatherEnd);
//     })
//     .catch(error => {
//       console.error(error);
//       dispatch(fetchWeatherError);
//     })
//     .finally(() => dispatch(setWeatherFetchFlag(false)));
// };
