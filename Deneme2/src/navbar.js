const React = require('react');
const { Link } = require('react-router-dom');

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Ana Sayfa</Link>
        </li>
        <li>
          <Link to="/node">Tablo Sayfası</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
