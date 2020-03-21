export const mapWeatherResponse = weather => {
  const city = weather.weather?.[0];
  const { main } = weather;

  return {
    name: weather.name,
    currentWeather: city?.main,
    description: city?.description,
    country: weather.sys?.country,
    temperature: main.temp,
    icon: city?.icon
  };
};
