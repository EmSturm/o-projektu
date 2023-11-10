import './style.css';
import { Link } from 'react-router-dom';
import './style.css';
import { Header } from '../../components/Header';

export const HomePage = () => {
  return (
    <>
      <Header></Header>
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
            <Link to="/AboutProject">
              <button className="btn bth--about-project">
                Chci se dozvědět víc <br></br> o projektu{' '}
              </button>{' '}
            </Link>

            <Link to="/AboutUs">
              <button className="btn bth--about-us">
                Chci se dozvědět víc <br></br> o autorkách
              </button>
            </Link>
          </div>
        </div>
        <div className="hero--right-col">
          <div className="image"></div>
        </div>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </>
  );
};
