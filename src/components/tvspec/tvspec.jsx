import React from 'react';
import './tvspec.css';
import PropTypes from 'prop-types';
const tvspec = ({ category, size, width, height, depth, clicked }) => {
    return (
        <div className="TvSpecWrapper">
            <div className="SpecIntro">
                <p><em>Note: For reference the television cabinent is 180cm wide</em></p>
                <p className="dimensions"><span className="capitalise">{category}</span> | Dimensions:</p>
            </div>
             <table className="SpecTable">
                <tbody>
                    <tr className="specTr">
                        <th>Screen size:</th>
                        <td>{size}cm</td>
                    </tr>
                    <tr className="specTr">
                        <th>Width:</th>
                        <td>{width}cm</td>
                    </tr>
                    <tr className="specTr">
                        <th>Height:</th>
                        <td>{height}cm</td>
                    </tr>
                    <tr className="specTr">
                        <th>Depth:</th>
                        <td>{depth}cm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
tvspec.propTypes = {
    size:PropTypes.string,
    width:PropTypes.string,
    height:PropTypes.string,
    depth:PropTypes.string
}
export default tvspec;