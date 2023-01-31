[{"content":"import { screen, render } from '@testing-library/react';\nimport { useState } from 'react';\n\nfunction DataForm() {\n  const [email, setEmail] = useState('sam@sam.com');\n\n  return (\n    <form>\n      <h3>Enter Data</h3>\n\n      <div data-testid=\"image wrapper\">\n        <img alt=\"data\" src=\"data.jpg\" />\n      </div>\n\n      <label htmlFor=\"email\">Email</label>\n      <input\n        id=\"email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n      />\n\n      <label htmlFor=\"color\">Color</label>\n      <input id=\"color\" placeholder=\"Red\" />\n\n      <button title=\"click when ready to submit\">Sumbit</button>\n    </form>\n  );\n}\n\nrender(<DataForm />);","type":"code","id":"29tgb"},{"content":"test('selecting different elements', () => {\n  render(<DataForm />);\n\n  const elements = [\n    screen.getByRole('button'),\n    screen.getByLabelText(/email/i),\n    screen.getByPlaceholderText(/red/i),\n    screen.getByText(/enter data/i),\n    screen.getByDisplayValue('sam@sam.com'),\n    screen.getByAltText('data'),\n    screen.getByTitle(/click when ready to submit/i),\n    screen.getByTestId(/image wrapper/i)\n\n  ];\n\n  for(let element of elements){\n    expect(element).toBeInTheDocument();\n  }\n})","type":"code","id":"ssuc0"}]