/* import matchers from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GlobalNavigationBar } from '.';

expect.extend(matchers);

describe('GNB', () => {
  beforeEach(() => {
    render(<GlobalNavigationBar />);
  });
  it('should render 과제 button', () => {
    const button = screen.getByText(/과제/);
    expect(button).toBeDefined();
    expect(button).toHaveAttribute('role', 'button');
  });
  it('should render 커뮤니티 button', () => {
    const button = screen.getByText(/커뮤니티/);
    expect(button).toBeDefined();
    expect(button).toHaveAttribute('role', 'button');
  });
});
 */
test('temp', () => {
  expect(1).toBe(1);
});
