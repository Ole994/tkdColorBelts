

import './theory.css';
import sillaImage from '../../images/silla.png'; // Pass på at dette er riktig sti

const Theory = () => {
  return (
    <div className="new-history-container">
    <header className="new-history-header">
      <h1>Wha Rang - Hwarang-krigernes Historie</h1>
      <p>En dypdykk i arven etter de legendariske krigerne fra Silla-dynastiet.</p>
    </header>

    <main className="new-history-content">
      <section className="new-history-text">
        <h2>Hwarang-krigerne</h2>
        <p>
          Hwarang var en elitegruppe av unge aristokrater som ble trent i både kampkunst og akademiske disipliner. 
          Disse unge mennene fikk opplæring i militær taktikk, filosofi, moral, kunst og politikk.
        </p>
        <p>
          Hwarang-krigerne spilte en avgjørende rolle i å forene de tre koreanske kongedømmene 
          (Goguryeo, Baekje og Silla) under Sillas banner.
        </p>
      </section>

      <section className="new-history-image">
        <img src={sillaImage} alt="Hwarang warriors from the Silla Dynasty" />
      </section>

      <section className="new-history-text">
        <h2>Mønsteret Wha Rang</h2>
        <p>Wha Rang-mønsteret ble laget for å minnes Hwarang-krigernes arv:</p>
        <ul>
          <li><strong>Antall bevegelser:</strong> 29</li>
          <li><strong>Symbolikk:</strong> Reflekterer disiplin og dedikasjon.</li>
        </ul>
      </section>
    </main>

    <footer className="new-history-footer">
      <p>Arven etter Hwarang lever videre gjennom mønsteret Wha Rang, og minner oss om lojalitet, disiplin og samhold.</p>
    </footer>
  </div>
  );

};

export default Theory;
