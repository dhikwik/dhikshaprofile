import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const MoodLifter = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://type.fit/api/quotes');
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

    <div>
       <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
        {console.log(data)}
      </ul>
    </div>
  );
};

export default MoodLifter
