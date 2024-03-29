import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const NewsFeed = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-02-29&sortBy=publishedAt&apiKey=cac5b1e68c574e1d8e2e03984f048270');
        setData(response.data);
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
  if (!data) return <div>No data available</div>;

  return (
    {data} && (
    <div>
       <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
        {console.log(data)}
      </ul>
    </div>)
  );
};

export default NewsFeed
