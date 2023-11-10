import { useState } from 'react';
import './style.css';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={!isOpen ? 'hamburger' : 'hamburger hamburger--otevrene'}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen ? (
        <nav className="hamburger-nav">
          <ul>
            <li>
            <Link to="/aboutus"><button>O autorkách</button></Link>
            </li>
            <li>
            <Link to="/aboutproject"><button>O projektu</button></Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};
<<<<<<< HEAD


=======
>>>>>>> 299ce27b1b046f9716366f5a1b9ec16fb3191b4b
