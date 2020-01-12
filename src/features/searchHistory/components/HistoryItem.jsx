import React from 'react';
import PropTypes from 'prop-types';
import { RemoveButton } from './RemoveButton';
import { UnitSymbols } from 'app/services/openweathermap/units';
import { buildIconUrl } from 'app/services/openweathermap/utils';
import style from './style.scss';

export const HistoryItem = ({ item, removeItem }) => (
  <div
    className={style.listItem}
    title={`${item?.history.name} (${item?.history?.sys?.country}), Temp: ${item?.history?.main?.temp}°C`}
  >
    <div>
      <div>
        <img
          className={style.historyItemIcon}
          src={buildIconUrl(item?.history?.weather[0]?.icon)}
          title={item?.history?.weather[0]?.main}
        />
        <b>
          {item.history.main.temp}
          {UnitSymbols?.[item.tempType]}
        </b>
      </div>
      <div>{item.history.name}</div>
      <div className={style.dateTime}>{item.date.toLocaleString()}</div>
    </div>
    <RemoveButton id={item.id} removeItem={removeItem} />
  </div>
);

HistoryItem.propTypes = {
  item: PropTypes.shape({}),
  removeItem: PropTypes.func
};

HistoryItem.defaultProps = {
  item: undefined,
  removeItem: undefined
};
