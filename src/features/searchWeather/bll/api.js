const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=';

export const addUnit = unit => (unit ? `&units=${unit}` : '');

export const buildBaseTokenUrl = (token, unit) => `${baseUrl}${token}${unit}`;

export const buildFetchWeatherBaseURL = token => unit => {
    const metricType = addUnit(unit);
    const baseTokenUrl = buildBaseTokenUrl(token, metricType);

    return queryStringParams => {
        let url = '';

        Object.keys(queryStringParams).forEach(key => {
            url += `&${key}=${encodeURIComponent(queryStringParams[key])}`;
        });

        return `${baseTokenUrl}${url}`;
    };
};

export const buildFetchWeatherByCityName = (token, unit) => {
    unit = unit ? `&units=${unit}` : '';

    return cityName =>
        `${baseUrl}${token}${unit}&q=${encodeURIComponent(cityName)}`;
};

export const buildFetchWeatherByGeographicCoordinates = (token, unit) => {
    unit = unit ? `&units=${unit}` : '';

    return (lat, lon) => `${baseUrl}${token}${unit}&lat=${lat}&lon=${lon}`;
};

export const buildIconUrl = icon =>
    `http://openweathermap.org/img/w/${icon}.png`;
