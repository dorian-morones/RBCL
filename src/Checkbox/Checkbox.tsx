import React, { useState, useEffect } from "react";
import {
  CheckboxWrapper,
  HiddenCheckboxElement,
  CheckboxLabel,
  CustomCheckbox,
  Icon
} from "./styles/Checkbox_Style";

// types
import { CheckboxProps } from './Checkbox.types'

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  checked,
  onChange = () => { },
  ref,
  id,
  fill = '#1464ff',
  color = '#fff'
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const onChangeCheckbox = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked])

  return (
    <>
      <CheckboxWrapper>
        <HiddenCheckboxElement
          id={id}
          ref={ref}
          name={name}
          checked={isChecked}
          onChange={onChangeCheckbox}
        />
        <CustomCheckbox checked={isChecked} 
          fill={fill} 
          color={color}
          onClick={() => onChangeCheckbox()}
        >
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </CustomCheckbox>
        {label && (
          <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
        )}
      </CheckboxWrapper>

    </>
  );
};

export default Checkbox;
