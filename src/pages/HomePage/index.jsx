import "./style.css";
import { Menu } from "../../components/Menu";
import { Link } from "react-router-dom";
import './style.css';
import { Menu } from '../../components/Menu';
import { AboutProject } from '../AboutProject';
import { AboutUs } from '../AboutUs';

export const HomePage = () => {
  return (
    <>
      <header>
        <div className="logo"></div>
        <div className="container--hamburger-menu">
          <Menu />
        </div>
      </header>
      <main>
        <div className="hero--left-col">
          <h1>
            Vítejte na stránce <br /> o našem projektu!
          </h1>
          <p className="about">
            V rámci Ditální Akademie Czechitas jsme vytvořily tento informativní
            web. Najdeš zde informace nejen o samotném projektu, ale i o jeho
            tvůrkyních.
          </p>
          {/* tlačítka */}
          <div className="btns-container">
            <a href="./pages/AboutProject">
              <button className="btn bth--about-project">
                Chci se dozvědět víc <br></br> o projektu{' '}
              </button>{' '}
            </a>

            <a href="./pages/AboutUs">
              <button className="btn bth--about-us">
                Chci se dozvědět víc <br></br> o autorkách
              </button>
            </a>
          </div>
        </div>
        <div className="hero--right-col">
          <div className="image"></div>
        </div>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    
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
    </>
  );
};
