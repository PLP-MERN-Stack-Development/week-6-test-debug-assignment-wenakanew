import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('App Integration', () => {
  it('renders heading and button, and handles button click', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to the MERN Testing App')).toBeInTheDocument();
    const button = getByText('Click Me');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    // No onClick handler in App, just ensure no error
  });
}); 