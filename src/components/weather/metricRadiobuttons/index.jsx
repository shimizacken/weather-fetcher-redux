import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton } from '../../common';
import { units } from '../../../services/openweathermap/units';
import styles from './style.scss';

export const MetricRadioButtons = ({ radioChanged }) => (
  <div>
    <RadioButton
      text="Celsius"
      value={units.celsius}
      name="temperatureType"
      className={styles.radioButton}
      checked
      onChange={radioChanged}
    />
    <RadioButton
      text="Fahrenheit"
      value={units.fahrenheit}
      name="temperatureType"
      className={styles.radioButton}
      onChange={radioChanged}
    />
    <RadioButton
      text="Kelvin"
      value={units.kelvin}
      name="temperatureType"
      className={styles.radioButton}
      onChange={radioChanged}
    />
  </div>
);

MetricRadioButtons.propTypes = {
  radioChanged: PropTypes.func.isRequired
};
