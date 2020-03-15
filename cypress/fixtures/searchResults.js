export const searchWeatherResponse = () => ({
  coord: {
    lon: 10.2,
    lat: 59.74
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n'
    }
  ],
  base: 'stations',
  main: {
    temp: 4.99,
    feels_like: -0.33,
    temp_min: 3.33,
    temp_max: 6.11,
    pressure: 1000,
    humidity: 93
  },
  wind: {
    speed: 5.7,
    deg: 210
  },
  clouds: {
    all: 100
  },
  dt: 1584305065,
  sys: {
    type: 1,
    id: 1662,
    country: 'NO',
    sunrise: 1584250498,
    sunset: 1584292872
  },
  timezone: 3600,
  id: 3159016,
  name: 'Drammen',
  cod: 200
});
