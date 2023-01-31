import { render, screen } from '@testing-library/react';

function IconButtons() {
  return (
    <div>
      <button aria-label='sign in'>
        <svg />
      </button>

      <button aria-label='sign out'>
        <svg />
      </button>
    </div>
  );
}

render(<IconButtons />);

// test
test('find elements based on label', () => {
  render(<IconButtons />);

  const signInButton = screen.getByRole('button', {
    name: /sign in/i,
  });
  const signOutButton = screen.getByRole('button', {
    name: /sign out/i,
  });

  expect(signInButton).toBeInTheDocument();
  expect(signOutButton).toBeInTheDocument();
});
