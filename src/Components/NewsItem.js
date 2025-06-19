import React, { Component } from 'react';

export class NewsItem extends Component {

  render() {
    let { title, description, mode, imageurl } = this.props;
    let cardClass = mode === 'dark' ? 'bg-dark text-white' : '';

    return (
      <div className='my-3'>
        <div className={`card ${cardClass}`} style={{ width: "18rem" }}>
          <img src={imageurl} className="card-img-top" alt="news" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
