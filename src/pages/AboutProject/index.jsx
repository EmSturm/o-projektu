import './style.css';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const AboutProject = () => {
  return (
    <>
      <Header></Header>
      <h1 className="about-h1">O projektu</h1>
      <div className="about">
        <div className="about--text">
          <p>
            V našem závěrečném projektu jsme si dali za cíl vytvořit{' '}
            <span className="highlight">
              interaktivního webového průvodce pražskými památkami,
            </span>{' '}
            který je určen pro děti od 10 let. <br></br> <br />
            Cílem naší iniciativy není pouze přiblížit mladším generacím bohatou
            historii Prahy, ale také{' '}
            <span className="highlight">
              nabídnout inovativní a zábavný způsob, jak poznat architekturu a
              kulturní dědictví tohoto města.
            </span>{' '}
            Zároveň klademe důraz na vizuální stránku, neboť se tímto projektem
            chceme v budoucnu prezentovat. Také jsme si vědomy, že ilustrace a
            fotografie poskytnou dětem vizuálně poutavý zážitek. <br></br>{' '}
            <br />
            Rovněž jsme odhodlány rozšířit hranice běžných akademických projektů
            a{' '}
            <span className="highlight">
              vyzkoušet si nové funkcionality.
            </span>{' '}
            Například, plánujeme implementovat prvky mimo standardní rámec
            Digitální akademie, např. funkci drag&drop.
          </p>
          <h3>Mentoři: Filip Jirsák a Nela Letochová</h3>
        </div>
        <div className="about--img"></div>
      </div>
      <Footer></Footer>
    </>
  );
};
