function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => {
        let content;

        if (comment.status === "approved") {
          content = comment.content;
        } else if (comment.status === "pending") {
          content = "This comment is awaiting moderation.";
        } else if (comment.status === "rejected") {
          content = "This comment has been rejected.";
        } else {
          content = "Unknown status.";
        }

        return (
          <div key={comment.id}>
            <h3>
              {comment.id} <span>{content}</span>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default CommentList;
