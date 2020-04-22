import React from 'react';
import { buildIconUrl } from '../../searchWeather';

export const historyTableRowRenderer = items => {
  return items?.map(item => {
    return {
      id: item.id,
      name: `${item.name}, ${item.country}`,
      description: item.description,
      temperature: `${item.temperature}${item.tempType.symbol}`,
      icon: <img src={buildIconUrl(item.icon)} title={item.description} />,
      date: new Date(item.date).toLocaleString()
    };
  });
};
