import React from 'react';
import propTypes from 'prop-types';

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span>
          #{log.id} Last updated by {log.developer} on
          <moment formate="mmmm do yyyy, h:mm:ss a"> </moment> {log.date}
        </span>
        <a href="#!" className="secondary-content">
          <i className="materializ-icons danger-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: propTypes.object.isRequired,
};

export default LogItem;
