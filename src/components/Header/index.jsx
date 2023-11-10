import { Menu } from '../Menu';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <div className="container--hamburger-menu">
        <Menu />
      </div>
    </header>
  );
};
