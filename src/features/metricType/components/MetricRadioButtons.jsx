import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton } from 'app/components/common';
import { TemperatureUnits } from 'app/services/openWeatherMap/units';
import styles from './MetricRadioButtons.scss';

export const MetricRadioButtons = ({ radioChanged }) => (
  <div>
    <RadioButton
      text="Celsius"
      value={TemperatureUnits.CELSIUS}
      name="temperatureType"
      className={styles.radioButton}
      checked
      onChange={radioChanged}
    />
    <RadioButton
      text="Fahrenheit"
      value={TemperatureUnits.FAHRENHEIT}
      name="temperatureType"
      className={styles.radioButton}
      onChange={radioChanged}
    />
    <RadioButton
      text="Kelvin"
      value={TemperatureUnits.KELVIN}
      name="temperatureType"
      className={styles.radioButton}
      onChange={radioChanged}
    />
  </div>
);

MetricRadioButtons.propTypes = {
  radioChanged: PropTypes.func.isRequired
};
