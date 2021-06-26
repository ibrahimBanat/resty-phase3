import React, { useState } from 'react';

const List = props => {
  let color;
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('history')) || []
  );
  props.method === 'GET'
    ? (color = '#0000ff')
    : props.method === 'POST'
    ? (color = '#008000')
    : props.method === 'PUT'
    ? (color = '#DAA520')
    : (color = '#FF0000');

  if (localStorage.getItem('history')) {
    // array = JSON.parse(localStorage.getItem('history'));
  }
  return (
    <div className='List'>
      {data.map((item, idx) => (
        <div>
          <button className={item.method} key={idx}>
            {item.method}
          </button>
          <p>{item.url}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
