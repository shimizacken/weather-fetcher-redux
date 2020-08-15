import React from 'react';
import PropTypes from 'prop-types';
import {Column} from 'app/components/common/table/Column';
import styles from './HistoryTableRowRenderer.module.scss';

export const HistoryTableHeaderRenderer = ({headers, width}) =>
    headers?.map(headerName => (
        <Column
            key={headerName}
            width={width}
            value={<span className={styles.text}>{headerName}</span>}
            className={styles.column}
        />
    ));

HistoryTableHeaderRenderer.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string),
    width: PropTypes.number,
};

HistoryTableHeaderRenderer.defaultProps = {
    headers: undefined,
    width: undefined,
};
