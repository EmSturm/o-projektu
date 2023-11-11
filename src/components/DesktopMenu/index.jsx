import './style.css';
import { Link } from 'react-router-dom';

export const DesktopMenu = () => {
  return (
    <div className="menuDesktop">
      <nav>
        <ul>
          <li>
            <Link to="/aboutus">O autorkách</Link>
          </li>
          <li>
            <Link to="/aboutproject">O projektu</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
