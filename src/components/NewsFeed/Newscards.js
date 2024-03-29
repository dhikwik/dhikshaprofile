import React from 'react';
import '../../styles/home.css';

const NewsCard = ({ articles }) => {
  return (
    <div className="row">
      {articles.map((item, index) => (
        <div className="col-md-4 p-3 card-height" key={index} >
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{item.title}</h3>
            </div>
            <div className="panel-body">
              <img src={item.urlToImage} alt="news" className="img-responsive card-image" />
              <p style={{overflow:'scroll'}}>{item.description}</p>
              <a href={item.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
