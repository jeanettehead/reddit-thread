import React, { useState, useEffect } from 'react';
import './App.css';
import fetchHelper from './helpers/fetchHelper';
import Thread from "./views/Thread"
import PropTypes from "prop-types";

function App(props) {
  const [threadData, setThreadData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setThreadData(fetchHelper(props.dataUrl))
    } catch {
      setError(true)
    }
  }, []);

  if (error) {
    return "Error";
  }

  const content = threadData == null ? "Loading" : <Thread title={threadData.title} />

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