import { render, screen, within } from '@testing-library/react';
import UserList from './userList';

// test('should render one row per user', () => {
//   const users = [
//     { name: 'jane', email: 'jane@gmail.com' },
//     { name: 'sam', email: 'sam@gmail.com' },
//   ];
//   // render the component
//   const { container } = render(<UserList users={users} />);

//   // find all the rows in the table
//   // eslint-disable-next-line
//   const rows = container.querySelectorAll('tbody tr');

//   // assertion: correct number of rows in the table
//   expect(rows).toHaveLength(2);
// });

function renderComponent() {
  const users = [
    { name: 'jane', email: 'jane@gmail.com' },
    { name: 'sam', email: 'sam@gmail.com' },
  ];
  // render the component
  render(<UserList users={users} />);

  return { users };
}

// NOTE: helps to render out the playground where we can select the html query
// screen.logTestingPlaygroundURL();

// NOTE: not a best approach to modify component using prop like data-testid
test('should render one row per user', () => {
  renderComponent();
  // find all the rows in the table
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('should render the email and name of each user', () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
