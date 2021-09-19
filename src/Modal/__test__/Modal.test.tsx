import React from 'react';
import { render } from '@testing-library/react';

import Modal from '../Modal';

describe("Raptor Modal", () => {

  const renderComponent = () => render(<Modal title="Modal Test" content="Modal Content" show={true} close={() => {}} />);

  it("Raptor Modal Render", () => {
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("Modal_Test");

    expect(testComponent).toBeInTheDocument();
  })
})