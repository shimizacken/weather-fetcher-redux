import React from 'react';
import {Units} from 'app/services/openWeatherMap/metricUnits';

import styles from './MetricRadioButtons.scss';

import {RadioButton} from 'app/components/common';

export const MetricRadioButtons: React.FC<React.ComponentProps<'div'> & {
    radioChanged: () => void;
}> = ({radioChanged, ...props}) => (
    <div {...props}>
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
