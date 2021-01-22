import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    const text = screen.getByText(/hi/i);
    expect(text).toBeInTheDocument();
  });
});
