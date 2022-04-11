import React, { Fragment, useEffect } from 'react';
import './style.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import {Provider} from 'react-redux'
import store from './store';


const App = () => {

  useEffect(() => {
    
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
          <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </Fragment>
    </Provider>

  );
};
export default App;
