import React, { useState, setState, useEffect } from 'react';
import axios from 'axios';
import '../design/Form.scss';

const Form = props => {
  const [option, setOption] = useState('GET');
  const [url, setUrl] = useState('');
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem('history')) || []
  );

  //   const [response, setResponse] = useState();
  const saveHistoryData = data => {
    setHistory([...history, data]);
    localStorage.setItem('history', JSON.stringify(history));
  };
  console.log(history);
  const handleSubmit = async e => {
    e.preventDefault();
    props.setShow(true);
    // let flag = true;
    try {
      let response = await axios({
        method: option,
        url: url,
        data: {},
      });
      props.afterSubmit(response.headers, response.data);
      let data = { method: option, url: url };
      // localStorage.setItem('history', JSON.stringify(data));\
      console.log(localStorage.getItem('history'));
      if (!localStorage.getItem('history')) {
        console.log('entered');
        setHistory([data]);
        localStorage.setItem('history', JSON.stringify(data));
      }
      saveHistoryData(data);
      props.setLoading(true);
      // props.historyData(data);
    } catch (err) {
      props.afterSubmit({ err: err.message }, { err: err.message });
      props.setLoading(true);
    }
  };
  return (
    <div className='form' onSubmit={handleSubmit}>
      <form>
        <select onChange={e => setOption(e.target.value)}>
          <option value='GET'>GET</option>
          <option value='POST'>POST</option>
          <option value='PUT'>PUT</option>
          <option value='DELETE'>DELETE</option>
        </select>
        <input
          type='URL'
          name='link'
          onChange={event => setUrl(event.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
      {/* <ReactJson src={} /> */}
    </div>
  );
};

export default Form;
