import React from 'react';
import TodoTable from './TodoTable';
import App from './App';
import { render, fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect'

test('First test for todotable', () => { const row = [
{desc: 'Go to coffee', date: '24.11.2019'} ]
const todotable = render(<TodoTable todos={row} />);
expect(todotable.container).toHaveTextContent('Go to coffee'); 
expect(todotable.container).not.toHaveTextContent('Go to mars');
})

test('Second test todotable', () => { const row = [
  {desc: 'Lets travel', date: '02.03.2021'} ]
  const todotable = render(<TodoTable todos={row} />);
  expect(todotable.container).toHaveTextContent('Lets travel'); 
  expect(todotable.container).not.toHaveTextContent('Meilla on loma');
})
test('add todo',() => {
  const { container, getByText, getByPlaceholderText } = render(<App />); 
  const desc = getByPlaceholderText('Description');
  const date = getByPlaceholderText('Date');
  const button = getByText('Add');
  })

  it('Testing the "onClick" ', () => {
    const addTodo = jest.fn();
    const { getByText } = render(<App onClick={addTodo} />);
    fireEvent.click(getByText(/Add/i));
  });