import React from 'react';
import uuid from 'uuid';
import { buildIconUrl } from '../../searchWeather';

export const historyTableHeadersBuilder = () => ['City Name', 'description', 'Temperature', 'Icon', 'Date'];

export const historyTableColumnsBuilder = items =>
  items?.map(item => [
    { id: uuid.v4(), name: 'id', value: item.id },
    { id: uuid.v4(), name: 'city name', value: `${item.name}, ${item.country}` },
    { id: uuid.v4(), name: 'description', value: item.description },
    { id: uuid.v4(), name: 'temperature', value: `${item.temperature}${item.tempType.symbol}` },
    { id: uuid.v4(), name: 'logo', value: <img src={buildIconUrl(item.icon)} title={item.description} /> },
    { id: uuid.v4(), name: 'date', value: new Date(item.date).toLocaleString() }
  ]);
