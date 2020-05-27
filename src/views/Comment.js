import React from 'react';
import PropTypes from "prop-types";
import Score from "./Score";
import ParagraphView from './ParagraphView';

export default function Comment(props) {
    const {
        author,
        ups,
        downs,
        created_utc: createdUtc,
        body
    } = props;

    const score = ups - downs;

    return (
        <div className="Comment">
            <div className="Comment__title">
                <div>{author}</div>
                <div className="Comment__score"> <Score score={score} /> &nbsp;points </div>
                <div>{createdUtc}</div>
            </div>
            <ParagraphView paragraph={body} />
        </div>
    )
}

export const CommentType = {
    author: PropTypes.string.isRequired,
    ups: PropTypes.number.isRequired,
    downs: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    depth: PropTypes.number.isRequired,
    created_utc: PropTypes.number.isRequired
};

Comment.propTypes = CommentType;
