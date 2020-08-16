import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './TextInput.scss';

export const TextInput = ({
    value,
    onChange,
    disabled,
    placeholder,
    className,
    dataCy,
}) => (
    <input
        className={classNames(styles.textInput, className)}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        data-cy={dataCy}
    />
);

TextInput.propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    dataCy: PropTypes.string,
    className: PropTypes.string,
};

TextInput.defaultProps = {
    disabled: false,
    onChange: undefined,
    className: undefined,
};
