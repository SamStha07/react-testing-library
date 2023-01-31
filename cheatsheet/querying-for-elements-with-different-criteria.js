/**
 * ByRole
 * ByLabelText
 * ByPlaceholderText
 * ByText
 * ByDisplayValue
 * ByAltText
 * ByTitle
 * ByTestId
 */

/**
 * When to use
 * Always prefer using query functions ending with ByRole. Only use others if ByRole is not an option.
 */

import { screen, render } from '@testing-library/react';
import { useState } from 'react';

function DataForm() {
  const [email, setEmail] = useState('sam@sam.com');

  return (
    <form>
      <h3>Enter Data</h3>

      <div data-testid='image wrapper'>
        <img alt='data' src='data.jpg' />
      </div>

      <label htmlFor='email'>Email</label>
      <input
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor='color'>Color</label>
      <input id='color' placeholder='Red' />

      <button title='click when ready to submit'>Sumbit</button>
    </form>
  );
}

render(<DataForm />);

test('selecting different elements', () => {
  render(<DataForm />);

  const elements = [
    // mainly we used
    screen.getByRole('button'),
    screen.getByText(/enter data/i),

    // sometimes
    screen.getByLabelText(/email/i),
    screen.getByPlaceholderText(/red/i),
    screen.getByDisplayValue('sam@sam.com'),
    screen.getByAltText('data'),
    screen.getByTitle(/click when ready to submit/i),

    // barely used
    screen.getByTestId(/image wrapper/i),
  ];

  for (let element of elements) {
    expect(element).toBeInTheDocument();
  }
});
