import "./style.css";
import { Menu } from "../../components/Menu";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container">
      <main>
        <header>
          <Menu />
        </header>
        <main>
          <h1>Vítejte na stránce o našem projektu</h1>
          <p>
            V rámci Ditální Akademie Czechitas jsme vytvořily tento informativní
            web o našem závěrečnm projektu
          </p>
          <Link to="/aboutproject">
            <button>Chci se dozvědět víc o projektu</button>
          </Link>
          <p></p>
          <Link to="/aboutus">
            <button>Chci se dozvědět víc o autorkách</button>
          </Link>
        </main>
        <footer>
          <p>Czechitas, Digitální akademie: Web</p>
        </footer>
      </main>
    </div>
  );
};
