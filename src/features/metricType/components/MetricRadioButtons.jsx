import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton } from 'app/components/common';
import { Units } from 'app/services/openWeatherMap/metricUnits';
import styles from './MetricRadioButtons.scss';

export const MetricRadioButtons = ({ radioChanged }) => (
  <div>
    <RadioButton
      text="Celsius"
      value={Units.celsius.name}
      name="temperatureType"
      className={styles.radioButton}
      checked
      onChange={radioChanged}
    />
    <RadioButton
      text="Fahrenheit"
      value={Units.fahrenheit.name}
      name="temperatureType"
      className={styles.radioButton}
      onChange={radioChanged}
    />
    <RadioButton
      text="Kelvin"
      value={Units.kelvin.name}
      name="temperatureType"
      className={styles.radioButton}
      onChange={radioChanged}
    />
  </div>
);

MetricRadioButtons.propTypes = {
  radioChanged: PropTypes.func.isRequired
};
