import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <p>Total: {total}</p>
      <p>Positve feedback: {total === 0 ? '' : `${positivePercentage}%`}</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
