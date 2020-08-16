import React from 'react';
import './loungeimage.css';
import PropTypes from 'prop-types';
const loungeimage = ({ imgUrl, altText }) => {
    return (
        <img
            src={imgUrl}
            className="loungeImage"
            alt={altText}
        />
    )
}
loungeimage.propTypes = {
    imgUrl:PropTypes.string,
    altText:PropTypes.string
}
export default loungeimage;