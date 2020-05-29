export default function(comment) {
    return comment.body === "[deleted]" && comment.author === "[deleted]";
}