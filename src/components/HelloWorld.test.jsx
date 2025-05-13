
import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld'; 

test('renders all the expected headings', () => {
  render(<HelloWorld />);
  
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  expect(screen.getByText(/zohaib fazal karim/i)).toBeInTheDocument();
  expect(screen.getByText(/full stack developer/i)).toBeInTheDocument();
  expect(screen.getByText(/visnext software company/i)).toBeInTheDocument();
  expect(screen.getByText(/uet lahore/i)).toBeInTheDocument();
});
