import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'app/components/common';
import { RemoveHistoryModalContainer } from '../RemoveHistoryModalContainer';
import style from './HistoryTable.module.scss';
import { buildIconUrl } from '../../../searchWeather';

export const HistoryTable = ({ items }) => {
  const headerItems = ['City Name', 'description', 'Temperature', 'Icon', 'Date'];

  const rowItems = items?.map(item => {
    return {
      id: item.id,
      name: item.name,
      currentWeather: item.currentWeather,
      description: item.description,
      country: item.country,
      temperature: `${item.temperature}${item.tempType.symbol}`,
      icon: <img src={buildIconUrl(item.icon)} title={item.description} />,
      date: new Date(item.date).toLocaleString()
    };
  });

  return (
    <div className={style.historyTableWrapper} data-cy="history-table">
      <RemoveHistoryModalContainer />
      <Table headerItems={headerItems} rowItems={rowItems} />
    </div>
  );
};

HistoryTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape())
};
