import { render, screen } from '@testing-library/react';

function AccessibleName() {
  return (
    <div>
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}

render(<AccessibleName />);

// test
test('can select by accessible name', () => {
  render(<AccessibleName />);

  const submitBtn = screen.getByRole('button', {
    name: /submit/i,
  });
  const cancelBtn = screen.getByRole('button', {
    name: /cancel/i,
  });

  expect(submitBtn).toBeInTheDocument();
  expect(cancelBtn).toBeInTheDocument();
});
