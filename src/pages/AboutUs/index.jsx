import './style.css';

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea
            blanditiis voluptatem quidem, dolore beatae quibusdam, pariatur
            quaerat a eligendi unde, reprehenderit possimus nesciunt! Rem sit
            quis dicta consectetur dolorem est voluptatibus quisquam eius
            sapiente. Odio, dolore expedita dicta ducimus, ut impedit eius ab
            molestiae animi provident repudiandae nihil quam in.
          </p>
        </div>
        <div className="aboutUs--justina">
          <h1>Justina</h1>
          <p>
            Ahoj! Jsem Justina s stále studuji na vysoké škole, a to konkrétně
            Arts Management. Mám ráda všechno kreativní a často se učím novým
            věcem. Kultura pro mě vždy byla velmi důležitá a jsem ráda, že i náš
            závěrečný projekt ji bude hravým způsobem propagovat!
          </p>
        </div>{' '}
      </div>

      <Footer></Footer>
    </>
  );
};
