export const searchResult = {
  type: 'weather/fetch_success',
  payload: {
    coord: {
      lon: 10.75,
      lat: 59.91
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ],
    base: 'stations',
    main: {
      temp: 4.14,
      feels_like: 0.25,
      temp_min: 1.67,
      temp_max: 6,
      pressure: 1036,
      humidity: 30
    },
    visibility: 10000,
    wind: {
      speed: 1
    },
    clouds: {
      all: 0
    },
    dt: 1584810947,
    sys: {
      type: 1,
      id: 1624,
      country: 'NO',
      sunrise: 1584767677,
      sunset: 1584812009
    },
    timezone: 3600,
    id: 3143244,
    name: 'Oslo',
    cod: 200
  }
};
