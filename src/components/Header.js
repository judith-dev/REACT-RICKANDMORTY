import React from 'react';
import { Link } from 'react-router-dom';

const Header =  () => (<div className="header-content">
    <div className="header-title-text">Mis Personajes Favoritos</div>
    <input type="button" value="Añadir Personaje" className="header-button-add"></input>
    <Link className="header-button-add" to={`/about`}>About</Link>
</div>);

export default Header;