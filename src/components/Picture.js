import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({name, image}) => (
    <div className="video-container">
        <img className="preview-image" width="100%" height="100%" src={image} alt={name}></img>
        <div className="preview-title">{name}</div>
    </div>
);

Picture.propTypes = {
   name: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired
};

export default Picture;