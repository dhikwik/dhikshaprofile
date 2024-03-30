import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/moodLifter.css'
import Sunflower from '../../assets/sun-flower.webp'

const MoodLifter = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [suggestion, setSuggestion] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://type.fit/api/quotes');
        const randomIndex = Math.floor(Math.random() * response.data.length);
        setQuote(response.data[randomIndex]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSuggestion = async () => {
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity');
      setSuggestion(response.data.activity);
    } catch (error) {
      console.error('Error fetching suggestion:', error);
      setSuggestion('Unable to fetch suggestion. Please try again later.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!quote) return <div>No data available</div>;

  return (
    <div className="containerPage">
          <h1 className="title">Looking for some encouragement. Here we go. Research says the one who hears some positive words ,grow healthy</h1>
          <i><p className="quote-text">{quote.text}</p></i>
         <img src = {Sunflower} alt="sunflower" className="img-sunflower"/>
         <h4>How are you feeling today</h4>
         <input/>
         <h4>What thing is affecting your mood</h4>
         <input/>
         <h5>Lets see the suggestion to uplift your mood. Doing some new task helps you forget negative emotion and develop new sense of achievement</h5>
         <button className="btn btn-primary" onClick={handleSuggestion}>See Suggestion</button>
         {suggestion && <p className="suggestion">{suggestion}</p>}

     </div>
  );
};

export default MoodLifter;
