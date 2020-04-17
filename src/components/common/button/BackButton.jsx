import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './BackButton.module.scss';

export const BackButton = React.memo(({ text, disabled, to, className, dataCy }) => (
  <Link className={classNames(styles.backButton, className)} disabled={disabled} to={to || '/'} data-cy={dataCy}>
    {text || '<'}
  </Link>
));

BackButton.protoTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  className: PropTypes.string,
  dataCy: PropTypes.string
};

BackButton.defaultProps = {
  text: undefined,
  disabled: false,
  to: undefined,
  className: undefined,
  dataCy: undefined
};
