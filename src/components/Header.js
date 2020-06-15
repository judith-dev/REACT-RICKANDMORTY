import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header =  ({onClickAdd}) => (<div className="header-content">
    <div className="header-title-text">Mis Personajes Favoritos</div>
    <input type="button" onClick={onClickAdd} value="Añadir Personaje" className="header-button-add"></input>
    <Link className="header-button-add" to={`/about`}> Acerca de</Link>
</div>);

Header.propTypes = {
    onClickAdd: PropTypes.func.isRequired
};

export default Header;