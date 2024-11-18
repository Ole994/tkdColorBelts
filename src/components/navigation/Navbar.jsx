import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>Brand</Link>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/theory" onClick={closeMenu}>Theory</Link></li>
          <li><Link to="/cardGame" onClick={closeMenu}>Cardgame</Link></li>
          <li><Link to="/dragAndDropCardGame" onClick={closeMenu}>Drag and drop</Link></li>
          <li><Link to="/flashCards" onClick={closeMenu}>Flash cards</Link></li>
        </ul>
        <div className="burger" onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
