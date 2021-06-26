import React, { useState } from 'react';
import axios from 'axios';

const List = props => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('history')) || []
  );
  let inputNode;
  let pNode;
  const fetch = async event => {
    try {
      props.setShow(true);
      let response = await axios({
        method: inputNode.innerHTML,
        url: pNode.innerHTML,
        data: {},
      });
      props.afterSubmit(response.headers, response.data);
      props.setLoading(true);
      console.log(response);
    } catch (err) {
      props.afterSubmit({ err: err.message }, { err: err.message });
      props.setLoading(true);
    }
  };

  return (
    <div className='List'>
      {data.map((item, idx) => (
        <div>
          <button
            className={item.method}
            key={idx}
            onClick={fetch}
            ref={node => (inputNode = node)}
          >
            {item.method}
          </button>
          <p ref={node => (pNode = node)}>{item.url}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
