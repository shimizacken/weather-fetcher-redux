import React from 'react';
import PropTypes from 'prop-types';

export const Details = React.memo(({ pressure, humidity, speed, cloudsAll }) => (
  <div>
    <div>Pressure: {pressure}</div>
    <div>Humidity: {humidity}%</div>
    <div>Wind: {speed}</div>
    <div>Clouds: {cloudsAll}</div>
  </div>
));

Details.propTypes = {
  pressure: PropTypes.number,
  humidity: PropTypes.number,
  speed: PropTypes.number,
  cloudsAll: PropTypes.number
};
