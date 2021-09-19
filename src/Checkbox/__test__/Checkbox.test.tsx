import React from 'react';
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'

import Checkbox from '../Checkbox';


describe("RBC Checkbox", () => {
  beforeEach(cleanup);
  const handleMockEvent = jest.fn();

  it("RBC Checkbox Render", () => {
    const {getByTestId} = render(<Checkbox label='Label' name='checkbox' checked={true} onChange={handleMockEvent} />);
    const element = getByTestId("Checkbox_Test");

    expect(element).toBeInTheDocument();
  });
});