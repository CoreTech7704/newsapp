import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const News = ({ country, pageSize, category, setProgress, apikey, mode, showAlert }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiFailed, setApiFailed] = useState(false); // Correctly placed

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
    setApiFailed(false); // Reset error state on new request

    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${country}&max=${pageSize}&apikey=${apikey}`;

    try {
      const response = await fetch(url);
      setProgress(40);
      const parsedData = await response.json();
      setProgress(80);

      if (parsedData.articles) {
        setArticles(parsedData.articles);
      } else {
        console.error('Invalid API response:', parsedData);
        setArticles([]);
      }

      setLoading(false);
      setProgress(100);
    } catch (error) {
      console.error('Failed to fetch news:', error);
      setArticles([]);
      setLoading(false);
      setProgress(100);
      setApiFailed(true); //Set failure state
      showAlert("No news available or API limit exceeded", "danger");
    }
  };

  return (
    <div className="container my-3">
      <Helmet>
        <title>SnapNews - {capitalizeFirstLetter(category)}</title>
        <meta name="description" content={`Top headlines in ${category} from SnapNews.`} />
      </Helmet>

      <h2 className="text-center" style={{ marginTop: '70px' }}>
        SnapNews - Top {capitalizeFirstLetter(category)} Headlines
      </h2>

      {loading && <Spinner />}

      {!loading && articles.length === 0 && apiFailed && (
        <div className="text-center my-4">
          <p className="text-danger">Failed to load news. API limit may be exceeded.</p>
          <button className="btn btn-outline-primary" onClick={fetchNews}>
            Retry
          </button>
        </div>
      )}

      <div className="row">
        {!loading && articles.map((element) => (
          <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title ? element.title.slice(0, 45) : ''}
              mode={mode}
              description={element.description ? element.description.slice(0, 95) : ''}
              imageurl={element.image}
              newsurl={element.url}
              author={element.source?.name || 'Unknown'}
              date={element.publishedAt}
              source={(element.source?.name || 'Unknown').slice(0, 24)}
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
  showAlert: PropTypes.func.isRequired,
};

export default News;
