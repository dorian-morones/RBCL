import React, { FunctionComponent } from 'react';

// Styles
import { StyledButton } from './style/Button_Style';

// Types
import { ButtonProps } from './Button.types'

const Button: FunctionComponent<ButtonProps> = ({
  content = 'click me',
  handleClick,
  fill,
  color,
  width,
  padding,
  margin,
  disabled
}) => {
  return (
    <StyledButton
      data-testid="Button_Test"
      type='button'
      onClick={() => handleClick()}
      color={color}
      width={width}
      padding={padding}
      margin={margin}
      fill={fill}
      disabled={disabled}
    >
      {content}
    </StyledButton >
  );
};

export default Button;
