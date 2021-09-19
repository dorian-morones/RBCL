import React from 'react';
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'

import RangeSlider from '../Ranger';


describe("RBC Ranger", () => {
  beforeEach(cleanup);
  const handleMockEvent = jest.fn();

  it("RBC Ranger Render", () => {
    const {getByTestId} = render(<RangeSlider label='Ranger component' value={20} onChange={handleMockEvent} />);
    const element = getByTestId("Ranger_Test");

    expect(element).toBeInTheDocument();
  });
});