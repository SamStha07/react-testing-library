import { screen, render, within } from '@testing-library/react';

function FormData() {
  return (
    <div>
      <button>Go Back</button>
      <form aria-label='form'>
        <button>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  );
}

render(<FormData />);

// custom matcher
function toContainRole(container, role, quantity = 1) {
  const elements = within(container).queryAllByRole(role);

  if (elements.length === quantity) {
    return {
      pass: true,
    };
  }

  return {
    pass: false,
    message: () =>
      `Expected to find ${quantity} ${role} elements. Found ${elements.length} instead.`,
  };
}

expect.extend({ toContainRole });

// test
test('form displays two buttons', () => {
  render(<FormData />);

  const form = screen.getByRole('form');

  expect(form).toContainRole('button', 3);
});
