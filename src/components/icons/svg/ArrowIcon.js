import PropTypes from 'prop-types';
import React from 'react';
import { Path } from 'svgs';
import { withRotationForDirection } from '../../../hoc';
import { colors } from '../../../styles';
import Svg from '../Svg';

const ArrowIcon = ({ color, ...props }) => (
  <Svg height="7" width="10" viewBox="0 0 10 7">
    <Path
      d="M5.614 4.186v1.92a.349.349 0 0 0 .552.278L9.554 3.56a.344.344 0 0 0 0-.562L6.166.174a.349.349 0 0 0-.552.278v1.922H1.41a.77.77 0 0 0-.77.77v.272c0 .425.345.77.77.77h4.204z"
      fill={color}
    />
  </Svg>
);

ArrowIcon.propTypes = {
  color: PropTypes.string,
};

ArrowIcon.defaultProps = {
  color: colors.black,
};

export default withRotationForDirection(ArrowIcon);
