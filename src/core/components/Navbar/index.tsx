import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
  <nav className="row bg-primary main-nav">
    <div className="col-2">
      <Link to="/" className="nav-logo-text"></Link>
        <h4>Bootcamp Devsuperior</h4>    
    </div>
  </nav>
);

export default Navbar;
