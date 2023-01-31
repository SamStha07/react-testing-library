import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './userForm';

test('it shows two inputs and a button', () => {
  // always render the component
  render(<UserForm />);

  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // assertion - make sure the component is doing
  // what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when form is submitted', () => {
  // mock function which will accept {name:'name', email:'name@gmail.com'}
  const mock = jest.fn();

  render(<UserForm onUserAdd={mock} />);

  // find two inputs
  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  // simulate typing in a name
  user.click(nameInput);
  user.keyboard('name');

  // simulate typing in an email
  user.click(emailInput);
  user.keyboard('name@gmail.com');

  // find the button
  const submitBtn = screen.getByRole('button');

  // simulate clicking the button
  user.click(submitBtn);

  // assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenLastCalledWith({
    name: 'name',
    email: 'name@gmail.com',
  });
});

test('should empties the two inputs when form is submitted', () => {
  render(<UserForm onUserAdd={() => {}} />);

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

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
