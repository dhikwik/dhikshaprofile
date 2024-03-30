import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.js';

describe('Home component', () => {
  test('Renders the title of the home', () => {
     render(
      <Router>
        <Home email='abc@gmail.com' />
      </Router>
    );
    const homeComponent = screen.getByTestId('main-page-title-text'); 
    expect(homeComponent).toHaveClass('text-center');
 
   });

  test('verfiying whether text and buttons are there in the document', () => {
    render(
      <Router>
        <Home email="abc@gmail.com" />
      </Router>
    );
    expect(screen.getByText('News Feeds')).toBeInTheDocument();
    expect(screen.getByText('Mood Lifter')).toBeInTheDocument();
    const button = screen.getAllByRole('button')[1]
    expect(button).toHaveTextContent('View More'); 
  });
});
