import React from 'react';
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown';

export default function ParagraphView(props) {
    return props.paragraph.split("\n").map((text, index) =>
        <div className={props.className} data-testid="paragraph" key={index}>
            <ReactMarkdown source={text} />
        </div>
    )
}

ParagraphView.propTypes = {
    paragraph: PropTypes.string.isRequired,
    className: PropTypes.string
}
