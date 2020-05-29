import React from 'react';
import PropTypes from "prop-types";
import moment from 'moment';
import Score from "./Score";
import ParagraphView from './ParagraphView';
import {Delete} from '@material-ui/icons';
import isCommentDeleted from "../helpers/isCommentDeleted";

export default function Comment(props) {
    const {
        id,
        author,
        ups,
        downs,
        created_utc: createdUtc,
        body,
        comments,
        onDelete
    } = props;

    const score = ups - downs;

    return (
        <div data-testid="comment" className="Comment">
            <div className="Comment__title">
                <div data-testid="commentAuthor">{author}</div>
                <div className="Comment__score"> <Score score={score} /> &nbsp;{`point${score === 1 ? "" : "s"}`} </div>
                <div>{moment.utc(createdUtc*1000).fromNow()}</div>
            </div>
            <div className = "Comment__body">
                <div className="Comment__text">
                    <ParagraphView className="Comment__textParagraph" paragraph={body} />
                </div>
                <div>
                    {
                        isCommentDeleted(props) ? null :
                            <button className="Comment__delete" aria-label="Delete" data-testid="deleteComment" onClick={() => onDelete(id)}><Delete /></button>
                    }
                </div>
            </div>
            <div className="Comment__comments">
                {
                    comments.map((comment) => 
                        <Comment {...comment} onDelete={onDelete} key={comment.id}/>
                    )
                }
            </div>
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

Comment.propTypes = {...CommentType, onDelete: PropTypes.func.isRequired, comments: PropTypes.arrayOf(PropTypes.shape(CommentType))};
