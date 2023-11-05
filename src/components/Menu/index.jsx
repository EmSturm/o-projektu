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
        <nav>
          <ul>
            <li>
              <a href="./src/pages/AboutUs">O nás</a>
            </li>
            <li>
              <a href="./src/pages/AboutProject">O projektu</a>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

