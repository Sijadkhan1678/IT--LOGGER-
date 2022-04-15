import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Moment from 'react-moment';
import propTypes from 'prop-types';
import {deleteLog} from '../../actions/logsActions';
import {connect} from 'react-redux';

const LogItem = ({ log }) => {

const onDelete= ()=>{
 console.log(log)
  deleteLog(log)
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
        <br/>
        <span>
          #{log.id} Last updated by {log.developer} on
          <Moment formate="mmmm do yyyy, h:mm:ss a"> </Moment> {log.date}
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons danger-text" onClick={onDelete} >delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: propTypes.object.isRequired,
};

export default connect(null,{deleteLog})(LogItem);
