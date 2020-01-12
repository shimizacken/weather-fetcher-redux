import React from 'react';

const Svg = ({ className, style, ...restProps }) => (
  <svg
    className={className}
    style={style}
    {...restProps}
  />
);

export default Svg;
