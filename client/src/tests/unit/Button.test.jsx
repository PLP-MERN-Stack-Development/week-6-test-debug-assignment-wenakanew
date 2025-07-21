import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button', () => {
  it('renders with the correct label', () => {
    render(<Button label="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); 