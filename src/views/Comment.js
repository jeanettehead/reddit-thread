
import React from 'react';
import PropTypes from "prop-types";

export default function Comment(props) {
    const {
        author,
        ups,
        downs,
        created_utc: createdUtc,
        body_html: body
    } = props;

    const score = ups - downs;

    return (
        <div>
            <div>{author}</div>
            <div data-testid="score">{score} points</div>
            <div>{createdUtc}</div>
            <div>{body}</div>
        </div>
    )
}

export const CommentType = {
    author: PropTypes.string.isRequired,
    ups: PropTypes.number.isRequired,
    downs: PropTypes.number.isRequired,
    body_html: PropTypes.string.isRequired,
    depth: PropTypes.number.isRequired,
    created_utc: PropTypes.number.isRequired
};

Comment.propTypes = CommentType;
