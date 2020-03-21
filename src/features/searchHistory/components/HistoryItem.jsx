import React from 'react';
import PropTypes from 'prop-types';
import { Units } from 'app/services/openweathermap/units';
import { buildIconUrl } from 'app/services/openweathermap/utils';
import { RemoveButton } from './RemoveButton';
import style from './SearchHistory.scss';

export const HistoryItem = React.memo(
  ({ id, name, country, temperature, tempType, icon, currentWeather, date, removeItem }) => (
    <div className={style.listItem} title={`${name} (${country}), Temp: ${temperature}${tempType}`}>
      <div>
        <div>
          <img className={style.historyItemIcon} src={buildIconUrl(icon)} title={currentWeather} />
          <b>
            {temperature} {Units[tempType]}
          </b>
        </div>
        <div>{name}</div>
        <div className={style.dateTime}>{date.toLocaleString()}</div>
      </div>
      <RemoveButton id={id} removeItem={removeItem} />
    </div>
  )
);

HistoryItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  country: PropTypes.string,
  temperature: PropTypes.number,
  tempType: PropTypes.string,
  icon: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  removeItem: PropTypes.func
};
