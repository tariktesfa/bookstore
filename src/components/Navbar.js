import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navigation-bar">
    <h1 className="title">Bookstore CMS</h1>
    <ul className="navigation-links">
      <li id="active">
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <BsPerson className="user-icon" />
  </nav>
);

export default Navbar;
