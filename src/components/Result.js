import React from 'react';
import JSONPretty from 'react-json-pretty';
import '../design/Result.scss';
const Result = props => {
  return (
    <div className='result'>
      "headers:"
      <JSONPretty data={props.data.headers} />
      "count:"
      <JSONPretty data={props.data.count} />
      "results"
      <JSONPretty data={props.data.result} />
    </div>
  );
};

export default Result;
