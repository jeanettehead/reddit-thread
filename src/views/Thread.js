import React from 'react';
import PropTypes from "prop-types";
import Comment, {CommentType} from "./Comment";
import ParagraphView from './ParagraphView';
import Score from './Score';

export default function Thread(props) {
    const {
        subreddit_name_prefixed: subredditName,
        score,
        title,
        selftext: selfText,
        comments

    } = props;


    return (
        <div className="Thread">
            <div className="Thread__subreddit">{subredditName}</div>
            <div className="Thread__header">
                <Score className="Thread__score" score={score}/>
                <div className="Thread__title">{title}</div>
                <div/>
            </div>
            <div className="Thread__content">
                <div className="Thread__text">
                    <ParagraphView className="Thread__textParagraph" paragraph={selfText} />
                    <div className="Thread__commentCount">{`${comments.length} Comments`}</div>
                </div>
                {
                    comments.map((comment) =>
                        <Comment {...comment} key={comment.id} />
                    )
                }
            </div>
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
