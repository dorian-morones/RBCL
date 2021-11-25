import styled, { css } from 'styled-components';
// import Colors from '../../ColorPalette/colors';

interface ButtonProps {
  width: number;
  color?: string;
  padding?: number;
  margin?: number;
  fill?:string;
  disabled?: boolean
}

export const StyledButton = styled.button.attrs(() => ({
  className: 'RBCL__Button'
}))<ButtonProps>`
  border-radius: 5px;
  width: ${({width}) => (width ? `${width}px` : '100%')};
  padding: 8px;
  font-size: 14px;
  border: none;
  background-color: ${({fill}) => (fill ? `${fill}` : '#1464ff')};
  color: ${({color}) => (color ? `${color}` : '#fff')};
  padding: ${({padding}) => (padding ? `${padding}px` : '10px')};
  margin: ${({margin}) => (margin ? `${margin}px` : '10px')};
  cursor: pointer;
  
  &:hover {
    filter: brightness(120%);
  }

  ${({disabled}) => {
    if(disabled){
      return css`
        background-color: grey;
        color: #3e3e3e;
        cursor: not-allowed;
      `
    }
  }}
`;
