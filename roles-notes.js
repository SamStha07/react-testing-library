[
  {
    content:
      'import { render, screen } from \'@testing-library/react\';\nimport user from \'@testing-library/user-event\';\n\nfunction RoleExample() {\n  return (\n    <div>\n      <a href="/">Link</a>\n      <button>Button</button>\n      <footer>Content info</footer>\n      <h1>Heading</h1>\n      <header>Banner</header>\n      <img alt="description" /> Img\n      <input type="checkbox" /> Checkbox\n      <input type="number" /> SpinButton\n      <input type="radio" /> Radio\n      <input type="text" /> Textbox\n      <li>ListItem</li>\n      <ul>ListGroup</ul>\n    </div>\n  );\n}\n\nrender(<RoleExample />);',
    type: 'code',
    id: 'cfgs6',
  },
  {
    content:
      "test('can find elements by role', () => {\n  render(<RoleExample />);\n\n  const roles = [\n    'link',\n    'button',\n    'contentinfo',\n    'heading',\n    'banner',\n    'img',\n    'checkbox',\n    'spinbutton',\n    'radio',\n    'textbox',\n    'listitem',\n    'list',\n  ];\n  for (let role of roles) {\n    const el = screen.getByRole(role);\n\n    expect(el).toBeInTheDocument();\n  }\n});",
    type: 'code',
    id: 'norwu',
  },
  {
    content:
      'function AccessibleName() {\n  return (\n    <div>\n      <button>Submit</button>\n      <button>Cancel</button>\n    </div>\n  );\n}\n\nrender(<AccessibleName />);',
    type: 'code',
    id: '2ueyh',
  },
  {
    content:
      "test('can select by accessible name', () => {\n  render(<AccessibleName />);\n\n  const submitBtn = screen.getByRole('button', {\n    name: /submit/i,\n  });\n  const cancelBtn = screen.getByRole('button', {\n    name: /cancel/i,\n  });\n\n  expect(submitBtn).toBeInTheDocument();\n  expect(cancelBtn).toBeInTheDocument();\n});",
    type: 'code',
    id: 'iwi1y',
  },
  {
    content:
      'function MoreNames() {\n  return (\n    <div>\n      <label htmlFor="email">Email</label>\n      <input id="email" />\n\n      <label htmlFor="search">Search</label>\n      <input id="search" />\n    </div>\n  );\n}\n\nrender(<MoreNames />);',
    type: 'code',
    id: 'o0wl3',
  },
  {
    content:
      "test('shows an email and search input', () => {\n  render(<MoreNames />);\n\n  const emailInput = screen.getByRole('textbox', {\n    name: /email/i,\n  });\n  const searchInput = screen.getByRole('textbox', {\n    name: /search/i,\n  });\n\n  expect(emailInput).toBeInTheDocument();\n  expect(searchInput).toBeInTheDocument();\n});",
    type: 'code',
    id: 'y66zl',
  },
  {
    content:
      'function IconButtons() {\n  return (\n    <div>\n      <button aria-label="sign in">\n        <svg />\n      </button>\n\n      <button aria-label="sign out">\n        <svg />\n      </button>\n    </div>\n  );\n}\n\nrender(<IconButtons />);',
    type: 'code',
    id: 'v7bha',
  },
  {
    content:
      "test('find elements based on label', () => {\n  render(<IconButtons />);\n\n  const signInButton = screen.getByRole('button',{\n    name: /sign in/i\n  });\n   const signOutButton = screen.getByRole('button',{\n    name: /sign out/i\n  });\n\n  expect(signInButton).toBeInTheDocument();\n  expect(signOutButton).toBeInTheDocument();\n});",
    type: 'code',
    id: '49m3s',
  },
];
