import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

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

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `SnapNews - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3651e4c91ba4e8891fe770bc0fe53c0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  fetchMoreData = async () => {
    if (this.state.articles.length >= this.state.totalResults) {
      this.setState({ loading: false }); // explicitly stop spinner at end
      return;
    }

    this.setState({ loading: true }); // start loading before fetch

    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3651e4c91ba4e8891fe770bc0fe53c0&page=${nextPage}&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();

    this.setState((prevState) => ({
      articles: prevState.articles.concat(parsedData.articles),
      page: nextPage,
      loading: false, // stop spinner after fetch
    }));
  };



  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">SnapNews - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={null}
        >
          <div className="container">
            <div className="row">
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
          </div>
        </InfiniteScroll>
        {this.state.loading && (
          <Spinner loading={true} />
        )}
      </div>
    );
  }
}

export default News;
