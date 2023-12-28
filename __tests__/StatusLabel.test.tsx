import React from 'react';
import { render } from '@testing-library/react';
import StatusTaskLabel from "../src/components/ui/StatusTaskLabel";

describe('StatusTaskLabel component', () => {
  it('renders with "pending" variant and child text "pending"', () => {
    render(
      <StatusTaskLabel variant="pending" children="pending" />
    );
  });

  it('renders with "active" variant and child text "active"', () => {
      render(
      <StatusTaskLabel variant="active" children="active" />
    );
  });

  it('renders with "closed" variant and child text "closed"', () => {
     render(
      <StatusTaskLabel variant="closed" children="closed" />
    );
  });
});
