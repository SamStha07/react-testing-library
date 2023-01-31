import { render, screen } from '@testing-library/react';

function RoleExample() {
  return (
    <div>
      <a href='/'>Link</a>
      <button>Button</button>
      <footer>Content info</footer>
      <h1>Heading</h1>
      <header>Banner</header>
      <img alt='description' /> Img
      <input type='checkbox' /> Checkbox
      <input type='number' /> SpinButton
      <input type='radio' /> Radio
      <input type='text' /> Textbox
      <li>ListItem</li>
      <ul>ListGroup</ul>
    </div>
  );
}

render(<RoleExample />);

// test
test('can find elements by role', () => {
  render(<RoleExample />);

  const roles = [
    'link',
    'button',
    'contentinfo',
    'heading',
    'banner',
    'img',
    'checkbox',
    'spinbutton',
    'radio',
    'textbox',
    'listitem',
    'list',
  ];
  for (let role of roles) {
    const el = screen.getByRole(role);

    expect(el).toBeInTheDocument();
  }
});
