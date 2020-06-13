import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Item = ({data}) => (<Link className="grid-item-link" to={`/${data.id}`}>
  <div className="grid-item" >
      <img className="preview-image" src={data.image} alt={data.name}></img>
      <div className="preview-title">{data.name} - {data.species}</div>
  </div></Link>)

Item.propTypes = {
    data:PropTypes.object.isRequired
};

export default Item;