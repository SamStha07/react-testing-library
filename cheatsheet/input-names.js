import { render, screen } from '@testing-library/react';

function MoreNames() {
  return (
    <div>
      <label htmlFor='email'>Email</label>
      <input id='email' />

      <label htmlFor='search'>Search</label>
      <input id='search' />
    </div>
  );
}

render(<MoreNames />);

// test
test('shows an email and search input', () => {
  render(<MoreNames />);

  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });
  const searchInput = screen.getByRole('textbox', {
    name: /search/i,
  });

  expect(emailInput).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});
