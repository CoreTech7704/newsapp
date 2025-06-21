import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, mode, imageurl, newsurl, author, date, source } = this.props;
    let cardClass = mode === 'dark' ? 'bg-dark text-white' : '';
    const displayAuthor = author?.split(',')[0] || 'Unknown';

    return (
      <div className='my-3'>
        <div className={`card ${cardClass}`}>
          <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-2" style={{ fontSize: '0.75rem' }}>
            {!source?"Unknown":source}
          </span>
          <img src={!imageurl ? "https://static.vecteezy.com/system/resources/previews/000/197/882/original/vector-news-headlines-background-with-earth-planet.jpg" : imageurl} className="card-img-top" alt="news" />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 60)}</h5>
            <p className="card-text">{description.slice(0, 100)}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {displayAuthor.slice(0,20)} on {new Date(date).toLocaleDateString()}.
              </small>
            </p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
