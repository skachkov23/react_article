import React from 'react';
import PropTypes from 'prop-types';

function Article({
  title,
  date,
  text,
}) {
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </>
  );
}

Article.defaultProps = {
  title: 'Title',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;