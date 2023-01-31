import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can recieve a new user and show it on a list', () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('sam');

  user.click(emailInput);
  user.keyboard('sam@gmail.com');

  user.click(button);

  // screen.debug();  will print all the html tags with values in terminal

  const name = screen.getByRole('cell', { name: 'sam' });
  const email = screen.getByRole('cell', { name: 'sam@gmail.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
