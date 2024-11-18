
import './home.css';
import heroImage from '../../images/tkdFront.png'; 

const Home = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Velkommen til ITF Taekwondo</h1>
          <p>Mestre kunsten av disiplin, styrke og smidighet.</p>
          <button className="cta-button">Kom igang</button>
        </div>
        <img src={heroImage} alt="Taekwondo Hero" className="hero-image" />
      </div>

      {/* Ny seksjon om Taekwondos opprinnelse */}
      <div className="origin-section">
        <div className="origin-content">
          <h2>Opprinnelsen til Taekwondo</h2>
          <p>
            Taekwondo er en koreansk kampsport som har røtter i gamle koreanske
            kampformer som Subak og Taekkyon, kombinert med moderne teknikker.
            Etter Koreas frigjøring i 1945 ble ulike kampsportskoler (kwans)
            etablert, og i 1955 ble Taekwondo formelt anerkjent. ITF (International
            Taekwon-Do Federation) ble grunnlagt i 1966 for å fremme og standardisere
            denne dynamiske og filosofiske kampsporten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
