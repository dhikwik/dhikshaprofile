import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MoodLifter from './MoodLifter.js';
import userEvent from '@testing-library/user-event';

jest.mock('axios');

describe('MoodLifter component', () => {
  
  it('Whether the input box is changing', async () => {
    render(<MoodLifter />);
    const inputElement = screen.getByTestId('inputBox');
    userEvent.change(inputElement, { target: { value: 'Test input' } });
    expect(inputElement.value).toBe('Test input');
  });

  it('displays suggestion when "See Suggestion" button is clicked', async () => {
    const mockQuote = { text: 'Test quote' };
    const mockSuggestion = 'Test suggestion';
    axios.get
      .mockResolvedValueOnce({ data: [mockQuote] })
      .mockResolvedValueOnce({ data: { activity: mockSuggestion } });

    render(<MoodLifter />);

    await waitFor(() => {
      expect(screen.getByText(mockQuote.text)).toBeInTheDocument();
    });

    const suggestionButton = screen.getByText('See Suggestion');
    userEvent.click(suggestionButton);

    await waitFor(() => {
      expect(screen.getByText(mockSuggestion)).toBeInTheDocument();
    });
  });
});
