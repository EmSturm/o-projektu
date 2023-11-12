import './style.css';
import { MediaLinks } from '../../components/MediaLinks';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const AboutUs = () => {
  return (
    <>
      <Header></Header>
      <div className="aboutUs">
        <div className="aboutUs--ema">
          <h1>Ema</h1>
          <p>
          Ahoj! Jsem Ema máma 2 Kolumbijských synů, co zkouší dívat se na svět neotřelým způsobem. Zkoumám psychologii sociálních bublin a kreativní uspořádání života a webových stránek. Momentálně učím Španělštinu na gymnáziu a uvědomuji si jak kultura formuje a vyživuje naše životy a proto jsem ráda, že jsem se připojila k Justině a projektu, který digitální formou bude promlouvat k dětem a přibližovat jim naše kulturní dědictví.
          </p>
          <MediaLinks
            githubLink={'https://github.com/EmSturm'}
            linkedinLink={
              'https://www.linkedin.com/in/michala-ema-%C5%A1turmov%C3%A1-a003881a0/'
            }
          ></MediaLinks>
        </div>
        <div className="aboutUs--justina">
          <h1>Justina</h1>
          <p>
            Ahoj! Jsem Justina a stále studuji na vysoké škole, a to konkrétně
            Arts Management. Mám ráda všechno kreativní a často se učím novým
            věcem. Kultura pro mě vždy byla velmi důležitá a jsem ráda, že i náš
            závěrečný projekt ji bude hravým způsobem propagovat!
          </p>
          <MediaLinks
            githubLink={'https://github.com/justinakab'}
            linkedinLink={
              'https://www.linkedin.com/in/justina-kabelkov%C3%A1-660b781ba/'
            }
          ></MediaLinks>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
