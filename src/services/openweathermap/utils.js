export const buildApiUrl = (token, unit) => {
  unit = unit ? `&units=${unit}` : '';

  return cityName =>
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${token}${unit}`;
};

export const buildIconUrl = icon => `http://openweathermap.org/img/w/${icon}.png`;
