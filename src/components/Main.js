import React, { useState, setState } from 'react';
import Form from './Form';
import Result from './Result';
import '../design/Main.scss';
import List from './List';
import { If } from './IF';
import { Switch, Route } from 'react-router-dom';
import Help from './Help';

const Main = () => {
  const [count, setCount] = useState('');
  const [headers, setHeaders] = useState();
  const [result, setResult] = useState();
  const [url, setUrl] = useState();
  const [method, setMethod] = useState();
  // const [history, setHistory] = useState(
  //   JSON.parse(localStorage.getItem('history')) || []
  // );
  const [flag, setFlag] = useState(false);
  const [show, setShow] = useState(false);

  const sendToResult = (headers, result) => {
    setCount(result.length);
    setHeaders(headers);
    setResult(result);
  };
  const Loading = flag => {
    setFlag(flag);
  };
  const showMe = flag => {
    setShow(flag);
  };
  let comp = (
    <Result
      data={{ count: count, headers: headers, result: result }}
      flag={flag}
    />
  );

  return (
    <Switch>
      <div className='main'>
        <Route path='/' exact>
          <List
            afterSubmit={sendToResult}
            setShow={showMe}
            setLoading={Loading}
          />
          <Form
            afterSubmit={sendToResult}
            setLoading={Loading}
            setShow={showMe}
          />
          <If condition={show}>{comp}</If>
        </Route>

        <Route path='/history'>
          <List
            afterSubmit={sendToResult}
            setShow={showMe}
            setLoading={Loading}
          />
          <If condition={show}>{comp}</If>
        </Route>
        <Route path='/help'>
          <Help />
        </Route>
      </div>
    </Switch>
  );
};

export default Main;
