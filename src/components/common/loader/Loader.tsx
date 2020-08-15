import React from 'react';
import sun from 'app/assets/png/sun.png';

import styles from './Loader.scss';

export const Loader: React.FC = React.memo(() => (
    <img data-cy="loader-image" src={sun} className={styles.rotating} />
));
