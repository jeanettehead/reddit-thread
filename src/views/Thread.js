import React, {useState} from 'react';
import PropTypes from "prop-types";
import Comment, {CommentType} from "./Comment";
import ParagraphView from './ParagraphView';
import Score from './Score';
import nestComments from '../helpers/nestComments';

export default function Thread(props) {
    const {
        subreddit_name_prefixed: subredditName,
        score,
        title,
        selftext: selfText,
        comments

    } = props;

    const [linearComments, setLinearComments] = useState(comments);

    const deleteComment = (commentId) => {
        setLinearComments(linearComments.map((comment) => {
            if (comment.id === commentId) {
                return {...comment, body: "[deleted]", author: "[deleted]"};
            }
            return comment;
        }))
    }

    return (
        <div className="Thread">
            <div className="Thread__subreddit">{subredditName}</div>
            <div className="Thread__header">
                <Score className="Thread__score" score={score}/>
                <h1 className="Thread__title">{title}</h1>
                <div/>
            </div>
            <div className="Thread__content">
                <div className="Thread__text">
                    <ParagraphView className="Thread__textParagraph" paragraph={selfText} />
                    <div className="Thread__commentCount">{`${comments.length} Comments`}</div>
                </div>
                {
                    nestComments(linearComments).map((comment) =>
                        <Comment {...comment} onDelete={deleteComment} key={comment.id} />
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
