import React, { useState, useEffect } from 'react';
import NewsCard from './Newscards'
import axios from 'axios';

const NewsFeed = () => {
  const [newspost, setNewspost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-02-29&sortBy=publishedAt&apiKey=cac5b1e68c574e1d8e2e03984f048270');
        setNewspost(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!newspost) return <div>No data available</div>;

  return (
    <>
      <h1 className="text-center mb-5">NewsFeed API</h1>
      
      <NewsCard articles={newspost.articles} />
    </>
  );
};

export default NewsFeed;
