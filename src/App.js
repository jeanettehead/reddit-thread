import React, { useState, useEffect } from 'react';
import './App.css';
import fetchHelper from './helpers/fetchHelper';
import Thread from "./views/Thread"
import PropTypes from "prop-types";

function App(props) {
  const [dataPromise, setDataPromise] = useState(null);
  const [threadData, setThreadData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      setDataPromise(fetchHelper(props.dataUrl))
  }, [props.dataUrl]);

  if (error != null) {
    return "Error";
  }

  if (dataPromise != null) {
    dataPromise
      .then(setThreadData)
      .catch(setError)
  }

  const content = threadData == null ? "Loading" : <Thread {...threadData} />

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;

App.propTypes = {
  dataUrl: PropTypes.string.isRequired
}