import React, { useState, useEffect } from 'react';
import LogItem from './LogItems';

const Logs = () => {
  const { logs, Setlogs } = useState('');
  const { loading, setLoading } = useState(false);

  useEffect(() => {
    getLogs();
  }, []);
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();
    Setlogs(data);
    setLoading(false);
  };

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="text-center"> Developer Logs </h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p>there are currently no developer</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

export default Logs;
