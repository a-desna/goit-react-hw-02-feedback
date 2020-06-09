import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <Fragment>
      {Object.keys(options).map(item => (
        <button
          key={item}
          className={styles.FeedbackBtn}
          type="button"
          value={item}
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
      <h3>Statistics</h3>
    </Fragment>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default FeedbackOptions;
