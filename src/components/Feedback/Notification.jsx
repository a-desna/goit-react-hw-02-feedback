import React from 'react';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <h4>{message}</h4>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

Notification.defaultProps = {
  message: '',
};

export default Notification;
