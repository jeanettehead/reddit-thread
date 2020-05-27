import React from 'react';
import PropTypes from "prop-types";

export default function Thread(props) {
    const {
        subreddit_name_prefixed: subredditName,
        score,
        title,
        selftext: selfText
     } = props;

    return(
     <div>
        <div>{subredditName}</div>
        <div>{score}</div>
        <div>{title}</div>
        <div>{selfText}</div>
    </div>
    );
}

const CommentType = PropTypes.shape({
    author: PropTypes.string.isRequired
})

Thread.propTypes = {
    subreddit_name_prefixed: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    selftext: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(CommentType).isRequired
}
