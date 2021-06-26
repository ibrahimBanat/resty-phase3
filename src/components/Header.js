import React from 'react';
import '../design/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div>RESTy</div>
      <Link to='/' exact>
        Home
      </Link>
      <Link to='/history'>History</Link>
      <Link to='/help'>Help</Link>
    </div>
  );
}

export default Header;
