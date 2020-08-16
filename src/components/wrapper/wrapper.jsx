import React from 'react';
import './wrapper.css';
const wrapper = ({ children }) => {
    return (
        <div className="Wrapper">
            { children }
        </div>
    )
}
export default wrapper;