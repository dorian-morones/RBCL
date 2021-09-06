import React from 'react';
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from '../Button';


describe("RBC Button", () => {
  beforeEach(cleanup);
  const handleMockClick = jest.fn();

  it("RBC Button Render", () => {
    const {getByTestId} = render(<Button content='Click me' handleClick={(handleMockClick)} />);
    const element = getByTestId("Button_Test");

    expect(element).toBeInTheDocument();
  });
});