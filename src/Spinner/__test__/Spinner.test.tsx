import React from 'react';
import { render } from '@testing-library/react';

import Spinner from '../Spinner';

describe("Raptor Spinner", () => {

  const renderComponent = () => render(<Spinner />);

  it("Raptor Spinner Render", () => {
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("Spinner_Test");

    expect(testComponent).toBeInTheDocument();
  })
})