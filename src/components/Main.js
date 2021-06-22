import React, { useState } from 'react';
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
    setMethod(data.method);
    setUrl(data.url);
    setHistory([...history, data]);
    console.log(history);
    localStorage.setItem('history', JSON.stringify(history));
  };
  return (
    <div className='main'>
      {/* <List listData={history} /> */}
      <Form afterSubmit={sendToResult} historyData={saveHistoryData} />
      <Result data={{ count: count, headers: headers, result: result }} />
    </div>
  );
};

export default Main;
