import React from 'react';
import PropTypes from "prop-types";
import Comment, {CommentType} from "./Comment";

export default function Thread(props) {
    const {
        subreddit_name_prefixed: subredditName,
        score,
        title,
        selftext: selfText,
        comments

    } = props;

    return (
        <div>
            <div>{subredditName}</div>
            <div>{score}</div>
            <div>{title}</div>
            <div>{selfText}</div>
            {
                comments.map((comment) =>
                    <Comment {...comment} key={comment.id} />
                )
            }
        </div>
    );
}

Thread.propTypes = {
    subreddit_name_prefixed: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    selftext: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape(CommentType)).isRequired
}
