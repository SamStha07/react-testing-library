/**
 * Goal of test
 * Prove an element exists : getBy, getAllBy
 * Prove an element doesnot exists: queryBy, queryAllBy
 * Prove an element eventually exists: findBy, findAllBy
 */
import { render, screen } from '@testing-library/react';

import { useState, useEffect } from 'react';

function ColorList() {
  // ul ---list
  // li ---listitem
  return (
    <ul>
      <li>Red</li>
      <li>Blue</li>
      <li>Green</li>
    </ul>
  );
}

render(<ColorList />);

test('favor using getBy to prove an element exists', () => {
  render(<ColorList />);

  const element = screen.getByRole('list');

  expect(element).toBeInTheDocument();
});

test('favor using queryBy to prove an element doesnot exist', () => {
  render(<ColorList />);

  const element = screen.queryByRole('textbox');

  expect(element).not.toBeInTheDocument();
});

// for async data mock
// fake data fetch using promise
function fakeFetchColors() {
  return Promise.resolve(['red', 'green', 'blue']);
}

// components whisch will fetch colors and show on DOM
function LoadableColorList() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fakeFetchColors().then((c) => setColors(c));
  }, []);

  const renderedColors = colors.map((color) => {
    return <li key={color}>{color}</li>;
  });

  return <ul>{renderedColors}</ul>;
}

render(<LoadableColorList />);

// test
test('favor findBy or findAllBy when data fetching', async () => {
  render(<LoadableColorList />);

  const els = await screen.findAllByRole('listitem');
  expect(els).toHaveLength(3);
});
