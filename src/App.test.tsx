import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';
import portfolio from './data/portfolio';

describe('App', () => {
  it('renders the hero name as the top-level heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: new RegExp(portfolio.profile.name) }),
    ).toBeInTheDocument();
  });

  it('renders a navigation link for each section', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
  });

  it('lists every experience entry from the data file', () => {
    render(<App />);
    for (const exp of portfolio.experiences) {
      expect(screen.getAllByText(new RegExp(exp.company)).length).toBeGreaterThan(0);
    }
  });
});
