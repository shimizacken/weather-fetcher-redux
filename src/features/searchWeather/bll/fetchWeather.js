import { request } from 'app/services/net/fetch';

export const fetchWeather = url => request(url);
