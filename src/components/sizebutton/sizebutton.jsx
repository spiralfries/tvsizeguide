import React from 'react';
import './sizebutton.css';
import PropTypes from 'prop-types';
const sizebutton = ({ label, clicked, sizeButtonIndex, activeSizeButton }) => {
    return (
        <div
            className={
                        `
                            button ${activeSizeButton === sizeButtonIndex && "active"}
                        `
            }
            onClick={clicked}
        >
            <p className="label">TV Sizes:</p>
            <p className="tvSize">{label}&Prime;</p>
        </div>
    )
}
sizebutton.propTypes = {
    label:PropTypes.string,
    clicked:PropTypes.func
};
export default sizebutton;