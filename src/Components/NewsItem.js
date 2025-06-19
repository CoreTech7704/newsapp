import React, { Component } from 'react';

export class NewsItem extends Component {

  render() {
    let { title, description, mode, imageurl, newsurl } = this.props;
    let cardClass = mode === 'dark' ? 'bg-dark text-white' : '';

    return (
      <div className='my-3'>
        <div className={`card ${cardClass}`} style={{ width: "18rem" }}>
          <img src={!imageurl?"https://static.vecteezy.com/system/resources/previews/000/197/882/original/vector-news-headlines-background-with-earth-planet.jpg":imageurl} className="card-img-top" alt="news" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
