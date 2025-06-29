import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ country, pageSize, category, setProgress, apikey, mode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string = '') =>
    string.charAt(0).toUpperCase() + string.slice(1);

  useEffect(() => {
    document.title = `SnapNews - ${capitalizeFirstLetter(category)}`;
    fetchNews(); // Initial fetch
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNews = async () => {
    setProgress(10);
    setLoading(true);

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;

    try {
      const data = await fetch(url);
      setProgress(40);
      const parsedData = await data.json();
      setProgress(80);

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);

      setProgress(100);
    } catch (error) {
      console.error('Failed to fetch news:', error);
      setLoading(false);
      setProgress(100);
    }
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${nextPage}&pageSize=${pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();

    setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
    setPage(nextPage);
    setLoading(false);
  };

  return (
    <div className="container my-3">
      <h2 className="text-center">
        SnapNews - Top {capitalizeFirstLetter(category)} Headlines
      </h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ''}
                  mode={mode}
                  description={
                    element.description
                      ? element.description.slice(0, 95)
                      : ''
                  }
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
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
  apikey: PropTypes.string.isRequired,
  mode: PropTypes.string,
};

export default News;
