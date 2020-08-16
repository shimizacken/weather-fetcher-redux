import React from 'react';
import PropTypes from 'prop-types';
import sun from 'app/assets/png/wf-logo.png';

export const Logo = React.memo(({className}) => (
    <img className={className} src={sun} alt="Logo" />
));

Logo.propTypes = {
    className: PropTypes.string,
};

Logo.defaultProps = {
    className: undefined,
};
