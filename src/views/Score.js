import React from 'react';
import PropTypes from "prop-types";

export default function Score(props) {
    let displayScore = props.score;

    if (props.score > 1000) {
        const thousands = parseInt(props.score.toString().slice(0, -3), 10);
        const hundreds = parseInt(props.score.toString().slice(-3), 10);
        displayScore = `${thousands}.${Math.round(hundreds / 100)}k`;
    }

    return <div className={props.className} data-testid="score">{displayScore}</div>;
}

Score.propTypes = {
    score: PropTypes.number.isRequired,
    className: PropTypes.string
}
