import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import propTypes from 'prop-types';
import {deleteLog} from '../../actions/logsActions';
import {connect} from 'react-redux';

const LogItem = ({ log }) => {

const onDelete= ()=>{
  deleteLog(log.id)
  M.toast({html: 'Log deleted'})

}
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
          <i className="materializ-icons danger-text" onClick={onDelete} >delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: propTypes.object.isRequired,
};

export default connect(null,{deleteLog})(LogItem);
