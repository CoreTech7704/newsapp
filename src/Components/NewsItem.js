import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, mode } = this.props;
    let cardClass = mode === 'dark' ? 'bg-dark text-white' : '';

    return (
      <div>
        <div className={`card ${cardClass}`} style={{ width: "18rem" }}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg" className="card-img-top" alt="news" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
