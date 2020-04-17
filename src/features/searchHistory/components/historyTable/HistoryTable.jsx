import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'app/components/common';
import { RemoveHistoryModalContainer } from '../RemoveHistoryModalContainer';
import { buildIconUrl } from '../../../searchWeather';
import style from './HistoryTable.module.scss';

export const HistoryTable = ({ items }) => {
  const headerItems = ['City Name', 'description', 'Temperature', 'Icon', 'Date'];

  const rowItems = items?.map(item => {
    return {
      id: item.id,
      name: `${item.name}, ${item.country}`,
      description: item.description,
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
