import React from 'react';

export const Details = React.memo(({
  cityName,
  description,
  temp: temperature,
  pressure,
  humidity,
  speed,
  cloudsAll
}) => (
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
