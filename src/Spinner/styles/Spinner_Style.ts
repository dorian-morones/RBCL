import styled, { css } from 'styled-components';

// Types
import { SpinnerProps } from '../Spinner.types'

export const SpinnerContainer = styled.div.attrs(() => ({
  className: 'RBC__Spinner'
}))<SpinnerProps>`
  border: 5px solid ${({color}) => (color ? color : '#fff')};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: ${({fill}) => (fill ? fill : '#1464ff')};
  margin: 0 auto;
  margin-top: 20px;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;