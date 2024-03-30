import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NewsFeed from './NewsFeed.js';
import axios from 'axios';

jest.mock('axios'); 

describe('NewsFeed component', () => {
  
    it('renders the title of the news component', async () => {
        render(<NewsFeed />);
        expect(screen.getByText('NewsFeedAPI')).toBeInTheDocument();
      });

    it('renders news articles', async () => {
        const mockData = {
        articles: [
            { title: 'IPL started', description: 'Started this month' },
            { title: 'Election raids goes on', description: 'will happen soon' }
        ]
        };

        axios.get.mockResolvedValueOnce({ data: mockData }); 

        render(<NewsFeed />);

        await waitFor(() => {
        expect(screen.getByText('IPL started')).toBeInTheDocument(); 
        });
    });
});
