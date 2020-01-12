import React, { Component } from 'react';
import { RemoveButton } from './removeButton';
import { unitSymbols } from '../../services/openweathermap/units';
import { buildIconUrl } from '../../services/openweathermap/utils';
import style from './style.scss';

export default class Item extends Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    const { item } = this.props;

    return (
      <div
        className={style.listItem}
        title={`${item.history.name} (${item.history.sys.country}), Temp: ${item.history.main.temp}°C`}
      >
        <div>
          <div>
            <img
              className={style.historyItemIcon}
              src={buildIconUrl(item.history.weather[0].icon)}
              title={item.history.weather[0].main}
            />
            <b>
              {item.history.main.temp}
              {unitSymbols[item.tempType]}
            </b>
          </div>
          <div>{item.history.name}</div>
          <div className={style.dateTime}>{item.date.toLocaleString()}</div>
        </div>
        <RemoveButton id={item.id} removeItem={this.props.removeItem} />
      </div>
    );
  }
}
