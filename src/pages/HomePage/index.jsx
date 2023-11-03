import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        
      </header>
      <main>
        <h1>Vítejte na stránce o našem projektu</h1>
        <p>V rámci Ditální Akademie Czechitas jsme vytvořily tento informativní web o našem závěrečnm projektu</p>
      <button><a href='./pages/AboutProject'>Chci se dozvědět víc o projektu</a></button> <br />
      <p></p>
      <button><a href='./pages/AboutUs'>Chci se dozvědět víc o autorkách</a></button>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
