import { useState } from "react";
export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Hamburger menu hear
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
