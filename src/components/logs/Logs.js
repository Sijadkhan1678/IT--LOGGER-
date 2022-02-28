import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';

const Logs = () => {
  const { logs, setLogs } = useState(null);
  const { loading, setLoading } = useState(false);

  useEffect(() => {
    getLogs();
  }, []);
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();
    console.log(data.id);
    setLogs(data);
    setLoading(false);
  };

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="text-center"> Developer Logs </h4>
      </li>
      {!loading && logs === null ? (
        <p>there are currently no developer</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

export default Logs;
