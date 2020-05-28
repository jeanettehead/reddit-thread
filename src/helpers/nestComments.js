export default function (comments) {
    return comments.reduce((nested, comment) => {
        if (comment.depth === 0) {
            nested.push({ ...comment, comments: [] })
        } else {
            findParentComment(nested, comment.depth)
                .comments.push({ ...comment, comments: [] })
        }
        return nested;
    }, [])
}

function findParentComment(nested, depth) {
    let parentComment = nested[nested.length - 1];
    for (var i = 1; i < depth; i++) {
        parentComment = parentComment.comments[parentComment.comments.length - 1];
    }
    return parentComment
}