import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Brand</Link>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/theory">Theory</Link></li>
          <li><Link to="/cardGame">Cardgame</Link></li>
          <li><Link to="/dragAndDrop">Drag and drop</Link></li>
          
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
