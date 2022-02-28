import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="title">Bookstore CMS</h1>
    <ul className="nav-links">
      <li className="active">
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
