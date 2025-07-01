import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = ({ country, pageSize, category, setProgress, apikey, mode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const capitalizeFirstLetter = (string = '') =>
    string.charAt(0).toUpperCase() + string.slice(1);

  useEffect(() => {
    document.title = `SnapNews - ${capitalizeFirstLetter(category)}`;
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, country]);

  const fetchNews = async () => {
    setProgress(10);
    setLoading(true);

    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${country}&max=${pageSize}&apikey=${apikey}`;

    try {
      const response = await fetch(url);
      setProgress(40);
      const parsedData = await response.json();
      setProgress(80);

      if (parsedData.articles) {
        setArticles(parsedData.articles);
      } else {
        console.error('No articles found or invalid API response:', parsedData);
        setArticles([]);
      }

      setLoading(false);
      setProgress(100);
    } catch (error) {
      console.error('Failed to fetch news:', error);
      setLoading(false);
      setProgress(100);
    }
  };

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ marginTop: '70px'}}>
        SnapNews - Top {capitalizeFirstLetter(category)} Headlines
      </h2>

      {loading && <Spinner />}

      {!loading && articles.length === 0 && (
        <div className="text-center">No news articles available for this category.</div>
      )}

      <div className="row">
        {articles.map((element) => (
          <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title ? element.title.slice(0, 45) : ''}
              mode={mode}
              description={
                element.description ? element.description.slice(0, 95) : ''
              }
              imageurl={element.image} 
              newsurl={element.url}
              author={element.source?.name || 'Unknown'}
              date={element.publishedAt}
              source={element.source?.name || 'Unknown'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 10,
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
