import React, { useState, setState } from 'react';
import Form from './Form';
import Result from './Result';
import '../design/Main.scss';
import List from './List';

const Main = () => {
  const [count, setCount] = useState('');
  const [headers, setHeaders] = useState();
  const [result, setResult] = useState();
  const [url, setUrl] = useState();
  const [method, setMethod] = useState();
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem('history')) || []
  );

  const sendToResult = (headers, result) => {
    setCount(result.length);
    setHeaders(headers);
    setResult(result);
  };

  const saveHistoryData = data => {
    // setMethod(data.method);
    // setUrl(data.url);
    if (!JSON.parse(localStorage.getItem('history'))) {
      // setHistory(data);

      // history.push(data);
      localStorage.setItem('history', JSON.stringify([data]));
      setHistory(prevHistory => [...prevHistory, data]);

      console.log(history);
    } else {
      // localStorage.setItem('history', JSON.stringify(history));
      // setHistory([...history, data]);
      // history.push(data);
      // setHistory(setState(data));
      setHistory([history, data]);
      localStorage.setItem('history', JSON.stringify(history));
    }

    console.log(history);
  };
  return (
    <div className='main'>
      <List listData={history} />
      <Form afterSubmit={sendToResult} historyData={saveHistoryData} />
      <Result data={{ count: count, headers: headers, result: result }} />
    </div>
  );
};

export default Main;
