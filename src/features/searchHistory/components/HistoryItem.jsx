import React from 'react';
import PropTypes from 'prop-types';
import { buildIconUrl } from '../../../features/searchWeather';
import { RemoveButton } from './RemoveButton';
import style from './SearchHistory.scss';

export const HistoryItem = React.memo(
  ({ id, name, country, temperature, tempType, icon, currentWeather, date, removeItem }) => (
    <div
      className={style.listItem}
      title={`${name} (${country}), Temp: ${temperature} ${tempType.symbol}`}
      data-cy="history-item"
    >
      <div>
        <div>
          <img className={style.historyItemIcon} src={buildIconUrl(icon)} title={currentWeather} />
          <b>
            {temperature} {tempType.symbol}
          </b>
        </div>
        <div>{name}</div>
        <div className={style.dateTime}>{new Date(date).toLocaleString()}</div>
      </div>
      <RemoveButton id={id} removeItem={removeItem} />
    </div>
  )
);

const tempTypeShape = {
  name: PropTypes.string,
  value: PropTypes.string,
  symbol: PropTypes.string
};

HistoryItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  country: PropTypes.string,
  temperature: PropTypes.number,
  tempType: PropTypes.shape(tempTypeShape),
  icon: PropTypes.string,
  date: PropTypes.number,
  removeItem: PropTypes.func
};
