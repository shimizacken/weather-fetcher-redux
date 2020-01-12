import React from 'react';
import PropTypes from 'prop-types';

export const Details = React.memo(({ cityName, description, temperature, pressure, humidity, speed, cloudsAll }) => (
  <div>
    <div>
      <h1>{cityName}</h1> / {description}
    </div>
    <div>Temp: {temperature}°</div>
    <div>Pressure: {pressure}</div>
    <div>Humidity: {humidity}%</div>
    <div>Wind: {speed}</div>
    <div>Clouds: {cloudsAll}</div>
  </div>
));

Details.propTypes = {
  cityName: PropTypes.string,
  description: PropTypes.string,
  temperature: PropTypes.number,
  pressure: PropTypes.number,
  humidity: PropTypes.number,
  speed: PropTypes.number,
  cloudsAll: PropTypes.number
};
