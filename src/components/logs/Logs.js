import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader'
import {connect} from 'react-redux';
import propTypes from 'prop-types'
import {getLogs} from  '../../actions/logsActions'

const Logs = ({log:{logs,loading},getLogs}) => {
 

  useEffect(() => {
    getLogs();
    //eslint-disable-nextline
  }, []);

if(loading || logs=== null){

  return <Preloader />;
}
  
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="text-center"> Developer Logs </h4>
      </li>
      {!loading && logs.length === null ? (
        <p>there are currently no developer</p>
      ) : (
        logs.map( log =>  <LogItem key={log.id} log={log} /> )
      )}
    </ul>
  );
};

Logs.propTypes = {

log : propTypes.object.isRequired,
getLogs : propTypes.func.isRequired
}
const mapStateToProps= state =>({
 log: state.log
})
export default connect(mapStateToProps,{getLogs}) (Logs);
