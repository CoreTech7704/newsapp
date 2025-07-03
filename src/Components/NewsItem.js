import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const NewsItem = ({ title, description, mode, imageurl, newsurl, author, date, source }) => {
  const cardClass = mode === 'dark' ? 'bg-dark text-white' : '';
  const displayAuthor = author?.split(',')[0] || 'Unknown';

  return (
    <div className='my-3'>
      <div className={`card ${cardClass}`}>
        <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-2" style={{ fontSize: '0.75rem', zIndex: 2 }}>
          {source || 'Unknown'}
        </span>
        <LazyLoadImage
          src={imageurl || 'https://static.vecteezy.com/system/resources/previews/000/197/882/original/vector-news-headlines-background-with-earth-planet.jpg'}
          alt={title || "News headline image"}
          className="card-img-top"
          effect="blur"
          style={{ objectFit: 'cover', height: '200px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 60) : 'No Title'}</h5>
          <p className="card-text">{description ? description.slice(0, 90) : 'No Description'}...</p>
          <p className="card-text">
            <small className={mode === 'dark' ? 'text-light' : 'text-body-secondary'}>
              By {displayAuthor.slice(0, 20)} on {new Date(date).toLocaleDateString()}.
            </small>
          </p>
          <a href={newsurl} aria-label={`Read full article: ${title}`} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
