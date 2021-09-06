import React from 'react';
import { render } from '@testing-library/react';

import Spinner from '../Spinner';

describe("Raptor Button", () => {

  const renderComponent = () => render(<Spinner />);

  it("Raptor Button Render", () => {
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("Spinner_Test");

    expect(testComponent).toBeInTheDocument();
  })
})