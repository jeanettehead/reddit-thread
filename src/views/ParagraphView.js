import React from 'react';
import PropTypes from "prop-types";

export default function ParagraphView(props) {
    return  props.paragraph.split("\n").map((text, index) =>
                <div className={props.className} data-testid="paragraph" key={index}>{text}</div>
    )
}

ParagraphView.propTypes = {
    paragraph: PropTypes.string.isRequired,
    className: PropTypes.string
}
