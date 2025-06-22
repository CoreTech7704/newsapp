import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3651e4c91ba4e8891fe770bc0fe53c0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults
    });
  }

  handlePreviousClick = async () => {
    await this.setState((prevState) => ({ page: prevState.page - 1 }));
    this.updateNews();
  };

  handleNextClick = async () => {
    await this.setState((prevState) => ({ page: prevState.page + 1 }));
    this.updateNews();
  };


  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>SnapNews - Top Headlines</h2>
        
        <Spinner loading={this.state.loading} />

        {!this.state.loading && (
          <div className="row d-flex justify-content-between">
            {this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  mode={this.props.mode}
                  description={element.description ? element.description.slice(0, 95) : ""}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        )}

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary mx-1"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-primary mx-1"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
