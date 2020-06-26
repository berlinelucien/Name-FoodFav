import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('ToDoApp', () => {
  it ('renders default todos on load', () => {
    const { getByText } = render(<App />);
    const todo = getByText(/Join TNT/i);
    expect(todo).toBeInTheDocument();
  });

  it ('renders input element in the header', () => {
    const { getByPlaceholderText } = render(<App />);
    const inputElement = getByPlaceholderText(/Add todo text/i);
    expect(inputElement).toBeInTheDocument();
  });
})
