import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import fetchHelper from './helpers/fetchHelper';
import Thread from "./views/Thread"

function App(props) {
  const [threadData, setThreadData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setThreadData(fetchHelper(props.dataUrl))
    } catch {
      setError(true)
    }
  }
    , []);

  if (error) {
    return "Error";
  }

  //is it possible for threadData to be null and an error to not exist?
  const content = threadData == null ? "Loading" : <Thread title={threadData.title} />

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
