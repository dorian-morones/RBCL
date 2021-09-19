import styled from "styled-components";

interface CheckboxElementProps {
  checked: boolean;
  fill: string;
  color: string;
}

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckboxElement = styled.input.attrs({
  type: "checkbox",
  className: "RBCL_CheckboxElement",
})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;


export const CheckboxLabel = styled.label.attrs({
  className: 'RBCL_CheckboxLabel'
})`
  position: relative;
  cursor: pointer;
  color: #fff;
  margin-left: 5px;
`;

export const CheckboxWrapper = styled.div.attrs({
  className: 'RBCL_CheckBoxWrapper',
})`
  display: flex;
  align-items: center;
  margin: 5px;
`;


export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const CustomCheckbox = styled.div<CheckboxElementProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({checked, fill}) => (checked ? fill : 'transparent')};
  border: 2px solid ${({checked, color}) => (checked ? color : '#808184')}; ;
  border-radius: 3px;
  transition: all 150ms;
  ${Icon} {
    visibility: ${({checked}) => (checked ? 'visible' : 'hidden')}
  }
`