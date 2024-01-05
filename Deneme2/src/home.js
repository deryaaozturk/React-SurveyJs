// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Ana Sayfa</Link>
        </li>
        <li>
          <Link to="/table">Tablo Sayfası</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
