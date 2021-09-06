import React, { FunctionComponent } from 'react';

// Styles
import { SpinnerContainer } from './styles/Spinner_Style';

// Types
import { SpinnerProps } from './Spinner.types';

const Spinner: FunctionComponent<SpinnerProps> = ({
  color,
  fill,
}) => <SpinnerContainer data-testid="Spinner_Test" fill={fill} color={color} />

export default Spinner;