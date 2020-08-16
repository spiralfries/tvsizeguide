import React from 'react';
import './catbutton.css';
import PropTypes from 'prop-types';
const catbutton = ({ label, clicked, activeCatButton, catButtonIndex }) => {
    return (
        <div
            className={
                        `
                            button ${activeCatButton === catButtonIndex && "active"}
                        `
            }
            onClick={clicked}
        >
            <p className="capitalise">{label}</p>
        </div>
    )
}
catbutton.propTypes = {
    label:PropTypes.string,
    clicked:PropTypes.func
};
export default catbutton;