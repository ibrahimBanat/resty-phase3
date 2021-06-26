import React, { useState, useEffect } from 'react';
import JSONPretty from 'react-json-pretty';
import '../design/Result.scss';
import * as ReactBootStrap from 'react-bootstrap';
import { If, Else } from './IF';

const Result = props => {
  const [loading, setLoading] = useState(false);

  return (
    <div className='result'>
      <If condition={props.flag}>
        "headers:"
        <JSONPretty data={props.data.headers} />
        "count:"
        <JSONPretty data={props.data.count} />
        "results"
        <JSONPretty data={props.data.result} />
      </If>
      <Else condition={props.flag}>
        <ReactBootStrap.Spinner animation='grow' />
      </Else>
    </div>
  );
};

export default Result;
