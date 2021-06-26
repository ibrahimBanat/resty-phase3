import React from 'react';
import '../design/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='title'>RESTy</div>
      <div class='link'>
        <Link to='/' exact>
          Home
        </Link>
        <Link to='/history'>History</Link>
        <Link to='/help'>Help</Link>
      </div>
    </div>
  );
}

export default Header;
