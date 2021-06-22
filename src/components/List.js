import React from 'react';

const List = props => {
  let color;
  props.method === 'GET'
    ? (color = '#0000ff')
    : props.method === 'POST'
    ? (color = '#008000')
    : props.method === 'PUT'
    ? (color = '#DAA520')
    : (color = '#FF0000');
  return (
    <div className='List'>
      props.listData.forEach(element =>{' '}
      {/* <button type='disabled'>{element.method}</button>) */}
    </div>
  );
};

export default List;
